// SignUpView.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */ 
import CreateUserContainer from './CreateUserContainer';
/* *
* Hojas de Estilo y Constantes
* */ 
import './LogInView.css';

class SignUpView extends Component {
    
    render() {
        return (
            <main className="main-container">
                <section className="main-section-container">
                    <CreateUserContainer />
                </section>
            </main>
        );
    }
}

export default SignUpView;