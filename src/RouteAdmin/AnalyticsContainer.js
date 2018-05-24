// AnalyticsContainer.js
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
import './AnalyticsContainer.css';

class AnalyticsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <main className="admin-analytics-container">
                <h2>Estamos desarrollando esta funcionalidad</h2>

                <h2>Dentro de poco vas a poder ver estadísticas de uso de tu bot</h2>
            </main>
        );
    }
}

export default AnalyticsContainer;