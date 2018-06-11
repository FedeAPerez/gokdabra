// Loading.js
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
import './Loading.css';

class Loading extends Component {
    render() {
        return (
                <div>
                {
                    this.props.isFetching && 
                    <div className="loading-spinner">
                        <img src = {'/content/images/spinner.svg'} />
                    </div>
                }
                </div>
            
        );
    }
}

export default Loading;