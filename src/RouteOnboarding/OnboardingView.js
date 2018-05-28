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

    render() {
        const styleViewOnboarding = {
            width: '100%',
            height: '100%'
        };
        return (
            <section className="onboarding">
                <SwipeableViews className="onboarding" style={ styleViewOnboarding }>
                    <div className="onboarding-box onboarding-home">
                        <h2>Las personas se comunican con mensajes.</h2>
                        <h3>En el mundo se envían 60 mil millones de mensajes entre WhatsApp y Messenger.</h3>
                    </div>
                    <div className="onboarding-box onboarding-hook">
                        <h2>Alineados con tu negocio y con lo que querés para tus clientes.</h2>
                        <h3>Creemos que la comunicación y la conversación son vitales para distinguirte como una marca relevante.</h3>
                    </div>
                    <div className="onboarding-box onboarding-product">
                        <h2>¡Queremos construir esta experiencia con nuestros usuarios!</h2>
                        <h3>Sumate antes del lanzamiento y ayudanos a definir el futuro de KDABRA.</h3>
                    </div>
                </SwipeableViews>
            </section>
        );
    }
}

export default OnboardingView;