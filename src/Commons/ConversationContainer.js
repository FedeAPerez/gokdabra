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
        return <Conversation 
                userInfo = { this.props.user }
                conversation = { this.props.conversation } />
    }
}
function mapStateToProps(state) {
    const { user } = state;
    return { user };
}
export default connect(mapStateToProps)(ConversationContainer);