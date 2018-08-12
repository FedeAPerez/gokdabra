// MessagesList.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */ 

import Message from './Message';
import { TextGlobeKdabra } from '../ComponentsLibrary/TextGlobe';
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
        return (
            <section className="messages-container">
                {
                    messages &&
                    messages.map(
                        (element, index) => {
                            //console.log(element);
                            var elementClass = element.sender === this.props.user.user_name ? 'message-user' : '';
                            if((element.type || {}).isBot) {
                                return (
                                    <TextGlobeKdabra 
                                    key={"conversation-messages" + index} >{ element.text }</TextGlobeKdabra>
                                );
                            }
                            else {
                                return (
                                    <Message 
                                        message={ element } 
                                        key={"conversation-messages" + index} 
                                        class = { elementClass }
                                    />
                                );
                            }
                        }
                    )
                }
            </section>
        );
    }
}

export default MessagesList;