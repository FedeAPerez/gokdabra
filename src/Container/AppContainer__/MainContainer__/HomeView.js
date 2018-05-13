// HomeView.js
/*
 Código librerías de externos
 */
import React, { Component } from 'react';
import FooterContainer from './HomeViewFolder__/FooterContainer';

class HomeView extends Component {
    render() {
        return (
            <section className="home">
            	<div className="container">
					<img className="wave-sgv" src={'content/images/wave.svg'} />
				</div>
                <h1 className="home-title">KDABRA</h1>
                <h2 className="home-tagline">¿Quéres comunicarte con tus clientes y fans como lo harían con WhatsApp y Messenger?</h2>
                <FooterContainer />
            </section>
        );
    }
}

export default HomeView;