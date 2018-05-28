// OnboardingView.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
/* *
 * Código de librerías internas
 * */ 

/* *
 * Hojas de Estilo y Constantes
 * */ 
import './OnboardingView.css';

class OnboardingView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onboarding_actual : 0,
            onboarding_ammount : 3
        };
    }

    handleChangeIndex(index) {
        this.setState({ onboarding_actual : index });
    };
    render() {
        const styleViewOnboarding = {
            width: '100%',
            height: '90%'
        };
        return (
            <section className="onboarding">
                <SwipeableViews 
                    className="onboarding" style={ styleViewOnboarding }
                    index={this.state.onboarding_actual}
                    onChangeIndex={this.handleChangeIndex.bind(this)}
                >
                    <div className="onboarding-box onboarding-home">
                        <h2>El futuro y presente de la comunicación está en los mensajes...</h2>
                        <h3>En el mundo se envían 60 mil millones de mensajes entre WhatsApp y Messenger.</h3>
                    </div>
                    <div className="onboarding-box onboarding-hook">
                        <h2>Alineados con tu negocio y con lo que está ocurriendo en el mundo.</h2>
                        <h3>Johnnie Walker y Coca-Cola son dos de las grandes marcas que utilizaron mensajes para potenciarse.</h3>
                    </div>
                    <div className="onboarding-box onboarding-product">
                        <h2>¡Queremos construir esta experiencia con nuestros usuarios!</h2>
                        <h3>Sumate antes del lanzamiento y ayudanos a definir el futuro de <span className="kdabra-orange-text">KDABRA</span>.</h3>
                    </div>
                </SwipeableViews>
                <div className="onboarding-state">
                    {(this.state.onboarding_actual+1) + ' de ' + this.state.onboarding_ammount}
                </div>
            </section>
        );
    }
}

export default OnboardingView;