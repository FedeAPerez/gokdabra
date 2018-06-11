// Conversation.js
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
import './Conversation.css';

class Conversation extends Component {
    render() {
        return (
            <div className="conversation">
                <img 
                    className="conversation-user-profile-pic"
                    src={ this.props.conversation.user.profilePic } 
                />
                <div className="conversation-container">
                    <span
                        className="conversation-user-user-name"
                    >
                        { this.props.conversation.user.userName }
                    </span>
                    <span
                        className="conversation-last-message-text"
                    >
                        { this.props.conversation.lastMessage.text }
                    </span>
                    <span
                        className="conversation-last-message-date"
                    >
                        { this.props.conversation.lastMessage.date }
                    </span>
                </div>
            </div>
        );
    }
}

export default Conversation;