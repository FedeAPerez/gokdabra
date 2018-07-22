// SearchBusinessContainer.js
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
class SearchBusinessContainer extends Component {
    render() {
        return (
            <section>                
                <Text centered>Dentro de poco vas a poder buscar los negocios que más te gustan</Text>
                
            </section>
        );
    };
}

export default SearchBusinessContainer;