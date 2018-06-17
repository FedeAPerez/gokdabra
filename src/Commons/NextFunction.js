// BlankFile.js
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
import './NextFunction.css';

class NextFunction extends Component {

    getMessageHtml() {
		return { __html: "Estamos trabajando en esta funcionalidad &#x1F4BB;" };
    }
    
    render() {
        return (
            <main>
                <div
                    className= { "next-function-container" }
                >
                <h2 
                    dangerouslySetInnerHTML= { this.getMessageHtml() }
                    className= { "next-function-message" }
                >
                </h2>
                <ul className= { "next-function-values" }>
                    <h3
                        className= { "next-function-values-header" }
                    >
                        Dentro de poco vas a poder
                    </h3>
                    {
                        this.props.nextValues.map((element, index) => {
                            return (
                                <li key={"next-function-" + index }>
                                    { element.description }
                                </li>
                            );
                        })
                    }       
                </ul>
                </div>
            </main>
        );
    }
}

export default NextFunction;