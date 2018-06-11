// ConversationsContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */ 
import ConversationsList from '../Components/ConversationsList';
/* *
 * Hojas de Estilo y Constantes
 * */ 

class ConversationsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            convesations : []
        };
    }

    componentDidMount() {
        
        /*fetchConversations()
        .then((res) => {

        })
        .catch((err) => {

        }); */
    }
    render() {
        return <ConversationsList convesations={ this.state.convesations } />;
    }
}

export default ConversationsContainer;