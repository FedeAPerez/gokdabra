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
const __MESSAGE_RIGHT_TIP_CLASS = "message-right-tip";
const __MESSAGE_CLASS = "message";

class MessageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show_tip : true
        }
    }

    getMessageHtml() {
		return { __html: this.props.messageOb.message }
	}

	getMessageTitleHTML() {
		return { __html: this.props.messageOb.message_title }
	}

    getMessageTip() {
        return { __html: this.props.messageOb.message_tip.message }
    }

    messageTipHandler() {
        if(this.props.MessageTipSubmit) {
            this.props.MessageTipSubmit(this.props.messageOb.message_tip.intent, this.props.messageOb.message_tip.message);
            if(this.props.messageOb.message_tip.should_dissapear == 'true') {
                this.state.show_tip = false;
                this.setState(this.state);
            }
        }
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
                    { 
                        (this.props.messageOb.message_tip && this.state.show_tip) && 
                        <p
                            className= { __MESSAGE_RIGHT_TIP_CLASS }
                            dangerouslySetInnerHTML={ this.getMessageTip() }
                            onClick= { this.messageTipHandler.bind(this) }
                        >
                        </p>
                    }
                </section>
            </article>
        );
    }
}

export default MessageContainer;