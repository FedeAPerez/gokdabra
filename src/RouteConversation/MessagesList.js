// MessagesList.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */ 

import Message from './Message';
/* *
 * Hojas de Estilo y Constantes
 * */ 
class MessagesList extends Component {
    render() {
        return (
            <section className="messages-container">
                {
                    (this.props.messages).length > 0 &&
                    this.props.messages.map(
                        (element, index) => {
                            return (
                                <Message 
                                    message={ element } 
                                    key={"conversation-messages" + index} 
                                />
                            );
                        }
                    )
                }
                {
                    this.props.isWriting && 
                    <Message
                        message= { {
                            text : "Escribiendo...",
                            type : {
                                class_used : "waiting"
                            },
                            sender : ''
                        } }
                    />
                }
            </section>
        );
    }
}

export default MessagesList;