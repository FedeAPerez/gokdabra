// Conversation.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
/* *
 * Código de librerías internas
 * */ 

/* *
 * Hojas de Estilo y Constantes
 * */ 
import './Conversation.css';

class Conversation extends Component {

    renderConversationRelationship() {
        if(this.props.conversation.relationship) {
            return(
                <span className="conversation-relationship" style={{backgroundColor:this.props.conversation.relationship.color}}>
                    { this.props.conversation.relationship.text }
                </span>
            );
        }
        else {
            return null;
        }
    }

    render() {
        return (
            <Link
            to={"/"+this.props.businessInfo.business_name+'/'+this.props.conversation.user.userName}
            >
            <div 
                className="conversation"
            >
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
                    {
                        this.renderConversationRelationship()
                    }
                    <span
                        className="conversation-last-message-date"
                    >
                        { this.props.conversation.lastMessage.date }
                    </span>
                </div>
            </div>
            </Link>
        );
    }
}

export default Conversation;