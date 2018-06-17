// MessageContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */ 

/* *
 * Hojas de Estilo y Constantes
 * */ 
import './MessageContainer.css';

class MessageContainer extends Component {

    getMessageHtml() {
		return { __html: this.props.message.text };
    }
    
    render() {
        return (
            <article
                className={ "message-container " + this.props.message.type.class_used }
            >
                <main 
                    dangerouslySetInnerHTML= { this.getMessageHtml() }>
                </main>
                {
                    (this.props.message.sender || '') !== '' &&
                    <footer 
                        className="message-footer">
                        Enviador por { this.props.message.sender }
                    </footer>
                }
            </article>
        );
    }
}

export default MessageContainer;