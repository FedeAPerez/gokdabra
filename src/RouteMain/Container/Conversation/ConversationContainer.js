// ConversationContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */
import { MessagesAPI } from  '../../../API';
import { IntentAPI } from  '../../../API';
import MessageContainer from '../Message/MessageContainer';
import MessageHandlerContainer from '../MessageHandler/MessageHandlerContainer';
import BusinessHeaderContainer from '../BusinessHeader/BusinessHeaderContainer';
/* *
 * Hojas de Estilo y Constantes
 * */
import './ConversationContainer.css';
const __SENDER_USER = "user";
const __SENDER_KDABRA = "KDABRA";
const __SENDER_USER_CLASS = "right";
const __CLEAR_CLASS = "clear";
const __BASE_CONTAINER_CLASS = "base-container";
const __MESSAGES_CONTAINER_CLASS = "messages-container";
const __MESSAGE_ARTICLE_CONTAINER_CLASS = "messages-article-container";
const __MESSAGE_ARTICLE_CONTAINER_ID = "messages-article-container-";
const __MESSAGE_CONTAINER_ID = "msg-component-";

class ConversationContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'messageList' : [

            ],
            'scroll_item' : 1
        }
    }

    addUserMessage(text) {
        var userMessage = {};
        userMessage.message = text;
        userMessage.class_used = __SENDER_USER_CLASS;
        userMessage.sender = __SENDER_USER;
        this.state.messageList.push(userMessage);
        this.setState(this.state);
    }

    getFirstMessage() {
        var m = MessagesAPI.getFirstMessage();
		this.state.messageList.push(m);
        this.setState(this.state);
	}
    
    processIntent(id_business, input_value, text) {
        var ProcessPromise = new Promise(function(resolve, reject) {
            if(input_value == "text_input") {
                IntentAPI.getIntentFromText(text)
                    .then(
                        (responseIntentAPI) => {
                            if(responseIntentAPI.data.intent) {
                                // Si obtuve un intent del input de texto lo proceso
                                MessagesAPI.getMessageByIntent(id_business , responseIntentAPI.data.intent)
                                .then((responseMessagesAPI) => {
                                    resolve(responseMessagesAPI);
                                }).catch((errMessagesAPI) => {
                                    reject(errMessagesAPI);
                                });
                            }
                            else {
                                // Sino lo obtengo de los mensajes
                                MessagesAPI.getMessageByIntent(id_business , input_value)
                                .then((responseMessagesAPI) => {
                                    resolve(responseMessagesAPI);
                                }).catch((errMessagesAPI) => {
                                    reject(errMessagesAPI);
                                });
                            }
                        }
                    )
                    .catch(
                        (errIntentAPI) => {
                            MessagesAPI.getMessageByIntent(id_business , input_value)
                            .then((resMessagesAPI) => {
                                resolve(resMessagesAPI);
                            }).catch((errMessagesAPI) => {
                                reject(errMessagesAPI);
                            });
                        }
                    )
            }
            else {
                MessagesAPI.getMessageByIntent(id_business , input_value)
                .then((resMessagesAPI) => {
                    resolve(resMessagesAPI);
                }).catch((errMessagesAPI) => {
                    reject(errMessagesAPI);
                });
            }
        });
        return ProcessPromise;
    }

    onAnswerSubmit = (input_value, text) => {        
        if(text != '')
            this.addUserMessage(text);

        var mIntent;

        this.processIntent(this.props.__BUSINESS_INFORMATION__.business_name, input_value, text)
        .then((res) => {
            mIntent = res;
            if(mIntent.scroll=='true')
            {
                this.state.scroll_item = mIntent.id_message;
            }
            this.state.messageList.push(mIntent);
            this.setState(this.state);
        })
        .catch((err) => {
            console.log(err);
        });
        
        
        // doy mensaje después de x tiempo
        setTimeout(function() {
            this.getNextMessage(mIntent);
        }.bind(this), 1000);

    };

    getNextMessage(mIntent) {
        if(mIntent && mIntent.next_message && mIntent.next_message != '') {
            var mNext;
            var that = this;
            MessagesAPI.getMessageById(mIntent.next_message)
                .then((res) => {
                    if(res.scroll=='true')
                    {
                        this.state.scroll_item = res.id_message;
                    }
                    that.state.messageList.push(res);
                    that.setState(that.state);
                    setTimeout(function() {
                        this.getNextMessage(res);
                    }.bind(that), 1000 );
                })
                .catch((err) => {
                    alert(err);
                });

        }
    }

    componentDidMount() {
		this.getFirstMessage();
    }

    componentDidUpdate() {
		if(this[`shouldScroll$`+this.state.scroll_item]) {
			this[`shouldScroll$`+this.state.scroll_item].scrollIntoView( {
				behavior: 'smooth'
			});
		}
    }
    render() {
        return (
            <section className= { __BASE_CONTAINER_CLASS }>
                <BusinessHeaderContainer 
                    __BUSINESS_INFORMATION__= { this.props.__BUSINESS_INFORMATION__ }
                    />
                <section className= { __MESSAGES_CONTAINER_CLASS }>
                {
                    this.state.messageList.length && this.state.messageList.map(
                        (element, key) => {
                            return (
                                <article 
                                    className= { __MESSAGE_ARTICLE_CONTAINER_CLASS }
                                    key= { __MESSAGE_ARTICLE_CONTAINER_ID + key }
                                >
                                    <MessageContainer 
                                        messageOb= { element } 
                                        key= { __MESSAGE_CONTAINER_ID + key}
                                        MessageTipSubmit= { this.onAnswerSubmit }
                                    />
                                    <div 
                                        id= {'shouldScroll$' + element.id_message}
                                        ref = {(ref) => {
                                                this['shouldScroll$' + element.id_message] = ref
                                            }}>
                                    </div>
                                </article>
                            );
                        }
                    )
                }
                <div 
                    className= { __CLEAR_CLASS }>
				</div>
                </section>
                <MessageHandlerContainer 
                    onAnswerSubmit = { this.onAnswerSubmit.bind(this) } 
                />
            </section>
        );
    }
}

export default ConversationContainer;
