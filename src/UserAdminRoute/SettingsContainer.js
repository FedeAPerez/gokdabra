// SettingsContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */ 
import Text from '../ComponentsLibrary/Text';
/* *
 * Hojas de Estilo y Constantes
 * */ 
class SettingsContainer extends Component {
    render() {
        return (
            <span>
                <Text secondary centered>Estamos trabajando para que puedas configurar tu perfil.</Text>
            </span>
        );
    }
}

export default SettingsContainer;