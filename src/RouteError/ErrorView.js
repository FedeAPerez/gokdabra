// ErrorView.js
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
import './NoFound.css';

class ErrorView extends Component {
    render() {
        return (
            <section className="no-found">
            	<h1 className="no-found-title">KDABRA</h1>
                <h2 className="no-found-tagline">Oups... parece que este negocio todavía no está dando la mejor comunicación a los clientes.</h2>
                <h3 className="no-found-contact">Si te gustaría que esté, manda un mail a hola@gokdabra.com</h3>
            </section>
        );
    }
}

export default ErrorView;