// MessagesList.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */ 

import MessageContainer from './MessageContainer';
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
                            console.log(element);
                            return (
                                <MessageContainer 
                                    message={ element } 
                                    key={"conversation-messages" + index} 
                                />
                            );
                        }
                    )
                }
                {
                    this.props.isWriting && 
                    <MessageContainer
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