// OnboardingCard.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */ 

/* *
 * Hojas de Estilo y Constantes
 * */ 

class OnboardingCard extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}
	render() {
		return (
			<div className="onboarding-box">
            	<div className="onboarding-image-container">
            		<img className="onboarding-image" src={ this.props.ImageSrc } alt= { this.props.ImageAlt } />
            	</div>
            	<h2>{ this.props.CardTitle }</h2>
            	<h3>{ this.props.CardSubTitle }</h3>
        	</div>
        );
	}
}

export default OnboardingCard;