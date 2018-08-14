// BlankFile.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */ 
import OptInOnboarding from './OptInOnboarding';
/* *
 * Hojas de Estilo y Constantes
 * */ 
class OptInView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOnboarded : false
        }
    }
    render() {
        if(!this.state.isOnboarded) {
            return (
                <OptInOnboarding />
            );
        }
    }
}

export default OptInView;