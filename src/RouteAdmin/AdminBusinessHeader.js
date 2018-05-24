// AdminBusinessHeader.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
/* *
 * Código de librerías internas
 * */ 

/* *
 * Hojas de Estilo y Constantes
 * */ 
const __BUSINESS_HEADER_CLASS = "admin-business-header-container";
const __BUSINESS_HEADER_HOME_CLASS = "admin-business-header-home-container";
const __BUSINESS_HEADER_NAV_CLASS = "admin-business-header-nav-container";
const __BUSINESS_HEADER_CLASS_LINK = "admin-business-header-link";
const __BUSINESS_HEADER_TEXT_IMAGE = "admin-business-header-text";
const __BUSINESS_HEADER_HOME_IMAGE = "/content/images/HomeButton.svg";
const __BUSINESS_HEADER_SETTINGS_IMAGE = "/content/images/SettingsButton.svg";
const __BUSINESS_HEADER_MESSAGES_IMAGE = "/content/images/MessagesButton.svg";

class AdminBusinessHeader extends Component {
	constructor(props) {
        super(props);
        this.state = {
            'business_object' : this.props.__BUSINESS_INFORMATION__,
            'option_selected':'chat',
            'show_option':'Mensajes'
        };
    }

    navigateOption(e, value, show_message) {
        e.preventDefault();
        this.state.option_selected = value;
        this.state.show_option = show_message;
        this.setState(this.state);
        this.props.handleNavigation(value);
    }

    render() {
        return (
            <section>
            <section 
                className= { __BUSINESS_HEADER_CLASS }
            >
                <Link 
                    className= { __BUSINESS_HEADER_CLASS_LINK }
                    to="/"
                >
                    <span 
                    >
                        <img src={ __BUSINESS_HEADER_HOME_IMAGE } />
                    </span>
                </Link>
                <h2
                    className= { __BUSINESS_HEADER_TEXT_IMAGE }
                >
                    { this.state.business_object.business_name.toUpperCase() + ' | ' + this.state.show_option}
                </h2>
            </section>
                <section 
                    className= { __BUSINESS_HEADER_NAV_CLASS }
                >
                    <span 
                        className= { this.state.option_selected == 'chat' ? 'resalt':'' }
                        value={"home"}
                        onClick={ (e) => this.navigateOption(e, "chat", "Mensajes") }
                    >
                        <img src={ __BUSINESS_HEADER_MESSAGES_IMAGE } />
                    </span>
                    <span 
                        className= { this.state.option_selected == 'settings' ? 'resalt':'' }
                        value={"settigs"}
                        onClick={ (e) => this.navigateOption(e, "settings", "Configuración") }
                    >
                        <img src={ __BUSINESS_HEADER_SETTINGS_IMAGE } />
                    </span>
                </section>
            </section>
        );
    }
}

export default AdminBusinessHeader;