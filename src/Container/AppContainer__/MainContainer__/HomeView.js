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
                <article className="home-content">
                <h1 className="home-title">KDABRA</h1>
                <h2 className="home-tagline">¿Querés comunicarte con tus clientes como lo hacen <br />Coca-Cola y Johnnie Walker?</h2>
                </article>
                <FooterContainer />
            </section>
        );
    }
}

export default HomeView;