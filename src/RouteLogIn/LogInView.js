// LogInView.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */ 
import UserContainer from './UserContainer';
/* *
* Hojas de Estilo y Constantes
* */ 
import './LogInView.css';

class LogInView extends Component {
    
    render() {
        return (
            <main className="main-container">
                <section>
                    <UserContainer />
                </section>
            </main>
        );
    }
}

export default LogInView;