// MessageContainer.js
/*
 Código librerías de externos
 */
import React, { Component } from 'react';

/*
 Código Propio y librerías desarrolladas por KDABRA
 */
import './MessageContainer.css';
import './Left.css';
import './LeftTituloLinea.css';
import './LeftLinea.css';
import './Meli.css';
import './Right.css';
const __SENDER_USER = "user";
const __MESSAGE_RIGHT_CLASS = "message-right";
const __MESSAGE_LEFT_TIP_CLASS = "message-left-tip";
const __MESSAGE_CLASS = "message";
const __MESSAGE_SEND_FOR_CLASS = "message-sended-for";

class MessageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show_tip : true
        };
    }

    getMessageHtml() {
		return { __html: this.props.messageOb.message };
	}

	getMessageTitleHTML() {
		return { __html: this.props.messageOb.message_title };
	}

    getMessageTip() {
        return { __html: this.props.messageOb.message_tip.message };
    }

    messageTipHandler() {
        if(this.props.MessageTipSubmit) {
            this.props.MessageTipSubmit(this.props.messageOb.message_tip.intent, this.props.messageOb.message_tip.show_message);
            if(this.props.messageOb.message_tip.should_dissapear == 'true') {
                this.state.show_tip = false;
                this.setState(this.state);
            }
        }
    }

    messageInteractHandler() {
        this.props.MessageTipSubmit('give_review', '');    
    }

    renderMeliOb() {
        return (
            <section className="meli-ob-container">
                <div className="meli-ob-content-container"> 
                <img className="meli-ob-img" src={this.props.messageOb.meli_ob.thumbnail}/>
                <span className="meli-ob-title">{this.props.messageOb.meli_ob.title}</span>
                </div>
                <span className="meli-ob-price">{"$" + this.props.messageOb.meli_ob.price}</span>
                <a onClick={ () => this.messageInteractHandler() } className="meli-ob-link" target="_blank" href={this.props.messageOb.meli_ob.permalink}>Finalizar la compra!</a>
            </section>
            );
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
                        this.props.messageOb.meli_ob && this.renderMeliOb()
                    }
                    {
                            this.props.messageOb.sender != __SENDER_USER &&
                            <span className= {  __MESSAGE_SEND_FOR_CLASS }>
                            {"Enviado por " + this.props.messageOb.sender_show}
                            </span>
                    }
                    { 
                        (this.props.messageOb.message_tip && this.state.show_tip) && 
                        <p
                            className= { __MESSAGE_LEFT_TIP_CLASS }
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