// ConversationContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */ 
import Conversation from './Conversation';
/* *
 * Hojas de Estilo y Constantes
 * */ 
class ConversationContainer extends Component {
    render() {
        return <Conversation conversation={ this.props.conversation } />
    }
}

export default ConversationContainer;