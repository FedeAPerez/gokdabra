// MessagesContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */
import BusinessMessagesContainer from '../RouteNewMessages/BusinessMessagesContainer';
/* *
 * Hojas de Estilo y Constantes
 * */
import './MessagesContainer.css';

class MessagesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    

    render() {
        return (
            <main className="admin-messages-container">
                <BusinessMessagesContainer />
            </main>
        );
    }
}

export default MessagesContainer;