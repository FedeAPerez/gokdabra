// BlankFile.js
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
class MessagesContainer extends Component {
    render() {
        return (
            <span>
                <Text secondary centered>Parece que no tenés mensajes por el momento.</Text>
            </span>
        );
    }

}

export default MessagesContainer;