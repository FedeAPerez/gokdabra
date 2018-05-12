// HomeContainer.js
/*
 Código librerías de externos
 */
import React, { Component } from 'react';

class HomeContainer extends Component {
    render() {
        return (
            <section className="home">
                <h1 className="home-title">KDABRA</h1>
                <h2 className="home-tagline">¿Quéres comunicarte con tus clientes y fans como lo harían con WhatsApp y Messenger?</h2>
                <h3 className="home-tagline-contact">Envia un mail a hola@gokdabra.com</h3>
            </section>
        );
    }
}

export default HomeContainer;