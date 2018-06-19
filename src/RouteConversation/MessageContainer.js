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
    
    getMessageCTAHtml() {
        return { __html: this.props.message.cta };
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
                        dangerouslySetInnerHTML= { this.getMessageHtml() }
                    >
                    </main>
                    {
                        this.props.message.cta &&
                        <footer
                            className="message-cta"
                            dangerouslySetInnerHTML= { this.getMessageCTAHtml() }
                        >
                        </footer>
                    }                    
                    {
                        /* Afuera hasta nuevo aviso
                        (this.props.message.sender || '') !== '' &&
                        <footer 
                            className="message-footer">
                            Enviador por { this.props.message.sender }
                        </footer>*/
                    }
                </article>

                {
                    this.props.message.hour &&
                    <aside
                        className="message-hour"
                    >
                    { this.props.message.hour }
                    </aside>
                }
                <div class="clear">
                </div>
            </article>
        );
    }
}

export default MessageContainer;