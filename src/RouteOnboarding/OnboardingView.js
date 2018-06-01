// OnboardingView.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
/* *
 * Código de librerías internas
 * */
import OnboardingCard from './OnboardingCard';
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
    handleChangeButton() {
      var next = this.state.onboarding_actual + 1;
      this.setState({ onboarding_actual : next });
    }

    handleSkipButton() {
        this.setState({ onboarding_actual : this.state.onboarding_ammount - 1 });
    };

    render() {
        const styleViewOnboarding = {
            width: '100%',
            height: '100%',
            margin: '0em auto',
            display: 'block'
        };

        const styleViewOnboardingSlide= {
            height: '100%',
            alignItems: 'center'
        }
        return (
            <section className="onboarding-container">
                <div className="onboarding-wrapper">
                <SwipeableViews
                    className="onboarding"
                    style={ styleViewOnboarding }
                    index={this.state.onboarding_actual}
                    containerStyle = { styleViewOnboardingSlide}
                    onChangeIndex={this.handleChangeIndex.bind(this)}
                >
                    <OnboardingCard
                        ImageSrc = { "/content/images/icons/1.png" }
                        ImageAlt = { "mensajes" }
                        CardTitle = { "El futuro y presente de la comunicación está en los mensajes..." }
                        CardSubTitle = { "En el mundo se envían 60 mil millones de mensajes entre WhatsApp y Messenger." }
                    />

                    <OnboardingCard
                        ImageSrc = { "/content/images/icons/2.png" }
                        ImageAlt = { "marcas" }
                        CardTitle = { "Alineados con tu negocio y con lo que está ocurriendo en el mundo." }
                        CardSubTitle = { "Johnnie Walker y Coca-Cola son dos de las grandes marcas que utilizaron mensajes para potenciarse." }
                    />

                    <OnboardingCard
                        ImageSrc = { "/content/images/icons/3.png" }
                        ImageAlt = { "negocios" }
                        CardTitle = { "¡Queremos construir esta experiencia con nuestros usuarios!" }
                        CardSubTitle = { "Sumate antes del lanzamiento y ayudanos a definir el futuro de KDABRA." }
                    />

                </SwipeableViews>
                <div className="pagination-wrapper">
                  {
                    this.state.onboarding_actual !== this.state.onboarding_ammount -1 &&
                    <div
                      className={ "pagination-button" + " " + "pagination-first" }
                      onClick={this.handleSkipButton.bind(this)}
                    >
                      Saltear
                    </div>
                  }
                    {
                        this.state != undefined &&
                        <div className="pagination">
                          <span className={ this.state.onboarding_actual == 0 ? "active":""}></span>
                          <span className={ this.state.onboarding_actual == 1 ? "active":""}></span>
                          <span className={ this.state.onboarding_actual == 2 ? "active":""}></span>
                        </div>
                    }

                    <div
                      className={ "pagination-button pagination-last" }
                      onClick={this.handleChangeButton.bind(this)}
                    >
                      Siguiente
                    </div>
                </div>
                </div>
            </section>
        );
    }
}

export default OnboardingView;
