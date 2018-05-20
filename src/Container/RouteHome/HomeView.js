// HomeView.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */ 
import FooterContainer from './FooterContainer';
/* *
 * Hojas de Estilo y Constantes
 * */ 
import './HomeView.css';

class HomeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fired:false,
            scrollY:''
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll(event) {
    // do something like call `this.setState`
    // access window.scrollY etc
        if(!this.state.fired) {

            this.state.scrollY = window.scrollY;
            this.state.fired = true;
            this.setState(this.state);

        }

    }

    render() {
        return (
            <main onScroll={this.handleScroll.bind(this)}>
                <section className="home">
                	<div className={this.state.fired ? "container-none": "container"}>
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
                    <hr />
                    <article className="home-tag">
                        <h2>¡Queremos construir esta experiencia con nuestros usuarios!</h2>
                        <h3>Sumate antes del lanzamiento y ayudanos a definir el futuro de KDABRA.</h3>
                    </article>
                </section>
                
                <FooterContainer />
            </main>
        );
    }
}

export default HomeView;