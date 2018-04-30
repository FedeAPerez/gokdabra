// ConversationContainer.js
/*
 Código librerías de externos
 */
import React, { Component } from 'react';

/*
 Código Propio y librerías desarrolladas por KDABRA
 */
import MessagesAPI from '../../../../API/MessagesAPI';
import MessageContainer from './ConversationContainer__/MessageContainer';
import MessageHandlerContainer from './ConversationContainer__/MessageHandlerContainer';
const __SENDER_USER = "user";
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

			]
        }
    }
    getNextMessage() {
        var m = MessagesAPI.getMessage();
		this.state.messageList.push(m);
		this.setState(this.state);
	}
    
    onAnswerSubmit = (input_value, text) => {        
        var userMessage = {};
        userMessage.message = text;
        userMessage.class_used = __SENDER_USER_CLASS;
        userMessage.sender = __SENDER_USER;
        this.state.messageList.push(userMessage);
        this.setState(this.state);

    }

    componentDidMount() {
		this.getNextMessage();
    }

    render() {
        return (
            <section className= { __BASE_CONTAINER_CLASS }>
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
                                        messageOb = {element} 
                                        key= { __MESSAGE_CONTAINER_ID + key} 
                                    />
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
                        onAnswerSubmit = {this.onAnswerSubmit} 
                    />
                </section>
            </section>
        );
    }
}

export default ConversationContainer;
