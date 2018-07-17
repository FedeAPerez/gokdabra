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
        var messages = [];
        if(this.props.messages) {
            const messages_list = this.props.messages;
            var keys = Object.keys(messages_list);
            for(var i =0; i< keys.length; i++)
            {
                messages.push(messages_list[keys[i]]);
            }
        }
        console.log(messages);
        return (
            <section className="messages-container">
                {
                    messages.length > 0 &&
                    messages.map(
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