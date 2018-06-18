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
                className="messages-article-container"
            >
                <article
                    className={ "message-container " + this.props.message.type.class_used }
                >
                    <main 
                        className="message-main"
                        dangerouslySetInnerHTML= { this.getMessageHtml() }>
                    </main>
                    {
                        /* Afuera hasta nuevo aviso
                        (this.props.message.sender || '') !== '' &&
                        <footer 
                            className="message-footer">
                            Enviador por { this.props.message.sender }
                        </footer>*/
                    }
                </article>
            </article>
        );
    }
}

export default MessageContainer;