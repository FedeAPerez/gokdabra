// MessagesContainer.js
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
                <h2>Estamos desarrollando esta funcionalidad</h2>

                <h2>Dentro de poco vas a poder comunicarte con tus clientes usando toda la tecnología de KDABRA</h2>
            </main>
        );
    }
}

export default MessagesContainer;