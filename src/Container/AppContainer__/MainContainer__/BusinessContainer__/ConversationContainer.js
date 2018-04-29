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
    
    onAnswerSubmit = (text) => {        
        var userMessage = {};
        userMessage.message = text;
        userMessage.class_used = "right";
        userMessage.sender = "user";
        this.state.messageList.push(userMessage);
        this.setState(this.state);

    }

    componentDidMount() {
		this.getNextMessage();
    }

    render() {
        return (
            <section>
                <section className="messages-container">
                {
                    this.state.messageList.length && this.state.messageList.map(
                        (element, key) => {
                            return (
                                <article className="messages-article-container" key={"messages-article-container-"+key}>
                                    <MessageContainer messageOb = {element} key={"msg-component-" + key} />
                                </article>
                            );
                        }
                    )
                }
                <div className="clear">
								</div>
                </section>
                <section className="message-handler-container">
                    <MessageHandlerContainer 
                        onAnswerSubmit = {this.onAnswerSubmit} />
                </section>
            </section>
        );
    }
}

export default ConversationContainer;
