// ConversationTestContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */
import MessagesAPI from '../../API/MessagesTestAPI';
import TrackAPI from '../../API/TrackAPI';
import GUIDAPI from '../../API/GUIDAPI';
import IntentService from '../../Services/IntentService';
import MessageContainer from './MessageContainer';
import MessageHandlerTestContainer from './MessageHandlerTestContainer';
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

class ConversationTestContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'messageList' : [

            ],
            'message_data_stack' : [

            ],
            'scroll_item' : 1,
            'id_conversation':''
        }
        this.state.id_conversation = GUIDAPI.guid();;
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
        // doy mensaje después de x tiempo
        setTimeout(function() {
            this.getNextMessage(m);
        }.bind(this), 1000);
	}
    
    onAnswerSubmit = (input_value, text) => {        
        if(text != '')
            this.addUserMessage(text);

        var mIntent;
        if(input_value == "text_input") {
            TrackAPI.postDataToTrack({
                "id_conversation":this.state.id_conversation,
                "object":"text_input",
                "info_saved":text
            });
            IntentService.getIntentFromText(text)
                .then(
                    (response) => {
                        console.log("tengo " + response.data.intent);
                        TrackAPI.postDataToTrack({
                            "id_conversation":this.state.id_conversation,
                            "object":"intent",
                            "info_saved":response.data
                        });
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
                        this.state.message_data_stack.push(response.data);
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
                    // MELI
                    if(res.type && res.type.id == 'meli_item') {
                        console.log("deberia traerte el de meli");
                        MessagesAPI.getMeliMessage(that.state.message_data_stack)
                        .then((mess) => {
                            console.log("me llego el mess " + mess);
                            TrackAPI.postDataToTrack({
                                "id_conversation":that.state.id_conversation,
                                "object":"recomended",
                                "info_saved":mess
                            });
                            that.state.messageList.push(mess);
                            that.setState(that.state);

                        })
                        .catch((err) => {
                            console.log("fallo con " + err);
                        });
                    }
                    // MELI
                    else {    
                        that.state.messageList.push(res);
                        that.setState(that.state);
                        setTimeout(function() {
                            this.getNextMessage(res);
                        }.bind(that), 1000 );
                    }
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
                    <MessageHandlerTestContainer 
                        onAnswerSubmit = { this.onAnswerSubmit.bind(this) } 
                    />
                </section>
            </section>
        );
    }
}

export default ConversationTestContainer;
