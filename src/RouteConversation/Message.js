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
import './Message.css';

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
                    className={ "message-container " + this.props.class }
                >
                    <main 
                        className="message-main"
                        dangerouslySetInnerHTML= { this.getMessageHtml() }
                    >
                    </main>                   
                </article>

                {
                    this.props.message.hour &&
                    <aside
                        className="message-hour"
                    >
                    { this.props.message.hour }
                    </aside>
                }
                <div className="clear">
                </div>
            </article>
        );
    }
}

export default MessageContainer;