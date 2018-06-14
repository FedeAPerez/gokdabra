// ConversationContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { connect } from 'react-redux';
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

function mapStateToProps(state) {
    const conversation  = {
        user : {
            userName: 'Federico'
        },
        lastMessage :  {
            text : 'Perfecto, me queda bien ese horario!',
            date : '14:58'
        },
        relationship : {
            text : 'Fan'
        }
    }
    return { conversation : conversation }
}

export default connect(mapStateToProps)(ConversationContainer);