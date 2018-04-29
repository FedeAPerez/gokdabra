// MessageContainer.js
/*
 Código librerías de externos
 */
import React, { Component } from 'react';

/*
 Código Propio y librerías desarrolladas por KDABRA
 */
const __SENDER_USER = "user";
const __MESSAGE_RIGHT_CLASS = "message-right";
const __MESSAGE_CLASS = "message";

class MessageContainer extends Component {
    getMessageHtml() {
		return { __html: this.props.messageOb.message }
	}

	getMessageTitleHTML() {
		return { __html: this.props.messageOb.message_title }
	}

    render() {
        return(
            <article 
                className= { 
                    this.props.messageOb.sender == __SENDER_USER ? 
                        __MESSAGE_RIGHT_CLASS : __MESSAGE_CLASS
                }
            >
                <section 
                    className= { 
                        this.props.messageOb.class_used
                    }
                >
				    { 
                        this.props.messageOb.message_title && 
                        <p 
                            dangerouslySetInnerHTML={ this.getMessageTitleHTML() }
                        >
                        </p> 
                    }
                    { 
                        this.props.messageOb.message && 
                        <p 
                            dangerouslySetInnerHTML={ this.getMessageHtml() }
                        >
                        </p>
                    }
                </section>
            </article>
        );
    }
}

export default MessageContainer;