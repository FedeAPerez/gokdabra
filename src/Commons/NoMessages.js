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
import './NoMessages.css';

class NoMessages extends Component {
    getMessageHtml() {
        return { __html : "Parece que no tenés mensajes por el momento." };
    }
    render() {
        return (
            <article>
                <main 
                    className="no-messages"
                    dangerouslySetInnerHTML= { this.getMessageHtml() }>
                </main>
            </article>
        );
    }
}

export default NoMessages;