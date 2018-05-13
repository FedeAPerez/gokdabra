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
                <h1 className="home-title">Presentando KDABRA</h1>
                <h2 className="home-tagline">¿Querés comunicarte con tus clientes como lo hacen <br /><b>Coca-Cola</b> y <b>Johnnie Walker</b>?</h2>
                </article>

                <article className="home-tag">
                    <h2>Las personas se comunican con mensajes.</h2>
                    <h3>En el mundo se envían 60 mil millones de mensajes entre WhatsApp y Messenger.</h3>
                </article>
                <hr />
                <article className="home-tag">
                    <h2>Estamos alineados con tu negocio y con lo que querés para tus clientes.</h2>
                    <h3>Creemos que la comunicación y la conversación son vitales para distinguirte como una marca relevante.</h3>
                </article>
                
            </section>
            
            <FooterContainer />
            </main>
        );
    }
}

export default HomeView;