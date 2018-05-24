// SettingsContainer.js
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
 import './SettingsContainer.css';

class SettingsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <main className="admin-settings-container">
                <h2>Estamos desarrollando esta funcionalidad</h2>

                <h2>Dentro de poco vas a poder configurar todos tus mensajes.</h2>
            </main>
        );
    }
}

export default SettingsContainer;