// BusinessMessagesContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */
import ConversationsListContainer from './Containers/ConversationsListContainer';
import BusinessListContainer from './Containers/BusinessListContainer';
import LoadingContainer from '../Commons/LoadingContainer';
import ConversationContainer from '../Commons/ConversationContainer';
/* *
 * Hojas de Estilo y Constantes
 * */
class BusinessMessagesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div>
        <ConversationContainer />
        
        <ConversationContainer />
        
        <ConversationContainer />
        
        <ConversationContainer />
        
        <ConversationContainer />
        
        <ConversationContainer />
      </div>
    );
  }
};

export default BusinessMessagesContainer;
