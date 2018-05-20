// ConversationContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */
import MessagesAPI from '../../API/MessagesAPI';
import IntentService from '../../Services/IntentService';
import MessageContainer from './MessageContainer';
import MessageHandlerContainer from './MessageHandlerContainer';
import BusinessHeaderContainer from '../BusinessHeader/BusinessHeaderContainer';
/* *
 * Hojas de Estilo y Constantes
 * */
const __SENDER_USER = "user";
const __SENDER_KDABRA = "KDABRA";
const __SENDER_USER_CLASS = "right";
const __CLEAR_CLASS = "clear";
const __BASE_CONTAINER_CLASS = "base-container";
const __MESSAGES_CONTAINER_CLASS = "messages-container";
const __MESSAGE_ARTICLE_CONTAINER_CLASS = "messages-article-container";
const __MESSAGE_ARTICLE_CONTAINER_ID = "messages-article-container-";
const __MESSAGE_CONTAINER_ID = "msg-component-";
const __MESSAGE_HANDLER_CONTAINER_CLASS = "message-handler-container";

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
    
    onAnswerSubmit = (input_value, text) => {        
        if(text != '')
            this.addUserMessage(text);

        var mIntent;
        if(input_value == "text_input") {
            IntentService.getIntentFromText(text)
                .then(
                    (response) => {
                        if(response.data.intent) {
                            mIntent = MessagesAPI.getMessageByIntent(this.props.__BUSINESS_INFORMATION__.business_name , response.data.intent);
                        }
                        else {
                            mIntent = MessagesAPI.getMessageByIntent(this.props.__BUSINESS_INFORMATION__.business_name , input_value);
                        }
                        if(mIntent.scroll=='true')
                        {
                            this.state.scroll_item = mIntent.id_message;
                        }
                        this.state.messageList.push(mIntent);
                        this.setState(this.state);
                    }
                )
                .catch(
                    (err) => {
                        mIntent = MessagesAPI.getMessageByIntent(this.props.__BUSINESS_INFORMATION__.business_name , input_value);
                        
                        if(mIntent.scroll=='true')
                        {
                            this.state.scroll_item = mIntent.id_message;
                        }
                        this.state.messageList.push(mIntent);
                        this.setState(this.state);
                    }
                )
        }
        else {
            mIntent = MessagesAPI.getMessageByIntent(this.props.__BUSINESS_INFORMATION__.business_name , input_value);
            if(mIntent.scroll=='true')
            {
                this.state.scroll_item = mIntent.id_message;
            }
            this.state.messageList.push(mIntent);
            this.setState(this.state);
        }
        
        // doy mensaje después de x tiempo
        setTimeout(function() {
            this.getNextMessage(mIntent);
        }.bind(this), 1000);

    }

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
                <section 
                    className= { __MESSAGE_HANDLER_CONTAINER_CLASS }>
                    <MessageHandlerContainer 
                        onAnswerSubmit = { this.onAnswerSubmit.bind(this) } 
                    />
                </section>
            </section>
        );
    }
}

export default ConversationContainer;
