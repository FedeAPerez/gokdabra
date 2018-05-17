// HomeView.js
/* *
 * Código librerías de externos
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */ 
import FooterContainer from './HomeViewFolder__/FooterContainer';
/* *
* Hojas de Estilo y Constantes
* */
import './HomeViewBStyles.css';

class HomeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Scrolled fired
            fired:false,
            // Position scrolled
            scrollY:'',
            // For A/B
            id_version:''
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        if(!this.state.fired) {
            this.state.scrollY = window.scrollY;
            this.state.fired = true;
            this.setState(this.state);
        }
    }

    scrollToRef() {
        if(this['scroll_element']) {
			this['scroll_element'].scrollIntoView( {
				behavior: 'smooth'
			});
		}
    }


    render() {
        return (
            <main>
                <section className="home">
                    <article className="home-content-container">
                        <img className="home-bg-image" src={'content/images/bg-image-1920.png'} />
                        <span className="home-bg-image-filter" />
                        <div className="home-content">
                        <h1 className="home-title">Presentando KDABRA</h1>
                        <h2 className="home-tagline">Venimos a cambiar la comunicación para que cada conversación con tus clientes los ayude a convertirse en <span className="kdabra-orange">fans</span>.</h2>
                        <div 
                            className="home-cta"
                            onClick={this.scrollToRef.bind(this)}>
                            ¡Mirá cómo!
                        </div>
                        </div>
                    </article>

                    <section 
                        ref={(ref) => { this['scroll_element'] = ref }}
                        className="home-main-content">
                        <article className="home-tag">
                            <h2>Las personas se comunican con mensajes.</h2>
                            <h3>¿Te imaginás poder contestar a todos tus clientes al instante y que se queden sin dudas antes de comprar?</h3>
                        </article>
                        <hr />
                        <article className="home-tag">
                            <h2>Estamos alineados con tu negocio y con lo que querés para tus clientes.</h2>
                            <h3>Coca-Cola y Johnnie Walker son dos de las empresas que están usando este tipo de herramientas en el mundo.</h3>
                        </article>
                        <hr />
                        <article className="home-tag">
                            <h2>¡Queremos construir esta experiencia con vos!</h2>
                            <h3>Dejanos tu mail y nos vamos a contactar para que KDABRA sea una herramienta creada desde y para los usuarios.</h3>
                        </article>
                    </section>
                </section>
                <FooterContainer />
            </main>
        );
    }
}

export default HomeView;