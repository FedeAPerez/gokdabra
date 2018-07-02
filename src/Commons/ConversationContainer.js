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
                businessInfo = { this.props.business }
                conversation={ this.props.conversation } />
    }
}
function mapStateToProps(state) {
    const { business } = state.business;
    return { business };
}
export default connect(mapStateToProps)(ConversationContainer);