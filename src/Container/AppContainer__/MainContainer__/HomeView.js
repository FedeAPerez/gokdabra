// HomeView.js
/*
 Código librerías de externos
 */
import React, { Component } from 'react';
import FooterContainer from './HomeViewFolder__/FooterContainer';

class HomeView extends Component {
    render() {
        return (
            <main>
            <section className="home">
            	<div className="container">
					<img className="wave-sgv" src={'content/images/wave.svg'} />
				</div>
                <article className="home-content">
                <h1 className="home-title">KDABRA</h1>
                <h2 className="home-tagline">¿Querés comunicarte con tus clientes como lo hacen <br />Coca-Cola y Johnnie Walker?</h2>
                </article>
                <hr />
                <article className="home-tag">
                    <h2>Estamos alineados con tu negocio y con lo que querés para tus clientes.</h2>
                    <h3>Creemos que la comunicación y la conversación son vitales para las ventas de tu negocio</h3>
                </article>
                
            </section>
            
            <FooterContainer />
            </main>
        );
    }
}

export default HomeView;