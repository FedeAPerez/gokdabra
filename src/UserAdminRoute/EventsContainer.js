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
class EventsContainer extends Component {
    render() {
        return (
            <span>
                <Text secondary centered>Parece que ninguna marca creo un evento para vos... todavía.</Text>
            </span>
        );
    }
}

export default EventsContainer;