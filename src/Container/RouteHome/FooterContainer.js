// FooterContainer.js
/* *
 * Código de librerías externas
 * */

import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
/* *
 * Código de librerías internas
 * */
import MessagesContentAPI from '../../API/MessagesContentAPI';
import ProspectsAPI from '../../API/ProspectsAPI';
/* *
 * Hojas de Estilo y Constantes
 * */ 
import './FooterContainer.css';

class FooterContainer extends Component {

	constructor(props) {
		super(props);

		this.state = {
			value: '',
			registrationOkShow: false
		};
		
		this.state.input_hint_text = MessagesContentAPI.getMessageContentFromId("footer-hint");		
	}

	getMessageContentHTML(id_message_content) {
		return { __html: MessagesContentAPI.getMessageContentFromId(id_message_content) };
	}

	changeForm(e) {
		this.state.value = e.target.value;
		this.setState(this.state);
	}

	submitForm() {
		ProspectsAPI.postProspectFrom('1', this.state.value)
		.then((res) => {
		})
		.catch((err) => {
		});

		this.state.value = '';
		this.state.registrationOkShow = true;
		this.setState(this.state);
	}

	closeRegistrationOk() {

		this.state.registrationOkShow = false;
		this.setState(this.state);
	}

	render() {
		const inputStyle = {
			borderRadius: '0.5em',
			backgroundColor:'white',
			width: '60%'
		};

		return (
			<section>
				<footer>
				<section className="mail-input">
					<TextField
						id={ "mail-input-textfield" }
						hintText={ this.state.input_hint_text }
						style={ inputStyle }
						underlineShow={ false }
						onChange={ (e) => { this.changeForm(e); } }
						value={ this.state.value }
						type={ "email" } 
					/>
					<span
						className="icon-button"
						onClick={ this.submitForm.bind(this) }
					>
						<img src={'content/images/send.svg'} />

					</span>
				</section>
				<hr />
				<section className="company-name">
					<span dangerouslySetInnerHTML={ this.getMessageContentHTML("company-name") }>
					</span>
				</section>
				<section className={this.state.registrationOkShow ? "registration-ok" : 'none'}>
					<div>
					<img 
						className="registration-ok-exit" 
						src={ 'content/images/cancel.svg' }
						onClick={ this.closeRegistrationOk.bind(this) }
					/>
					<p
						dangerouslySetInnerHTML={ this.getMessageContentHTML("registration-ok") }>
					</p>
					</div>
				</section>
			</footer>
			</section>
		);
	}

}

export default FooterContainer;