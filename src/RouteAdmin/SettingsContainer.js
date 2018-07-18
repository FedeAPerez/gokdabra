// SettingsContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */
import { Text } from '../ComponentsLibrary/Text';
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
                <section className="admin-settings">
                <Text centered>Estamos construyendo esta sección!</Text>
                </section>
            </main>
        );
    }
}

export default SettingsContainer;