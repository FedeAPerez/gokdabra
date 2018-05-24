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
            'businessOb' : this.props.__BUSINESS_INFORMATION__
        };
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
                    { this.state.businessOb.business_name.toUpperCase() }
                </h2>
            </section>
                <section 
                    className= { __BUSINESS_HEADER_NAV_CLASS }
                >
                    <span 
                    >
                        <img src={ __BUSINESS_HEADER_MESSAGES_IMAGE } />
                    </span>
                    <span 
                    >
                        <img src={ __BUSINESS_HEADER_SETTINGS_IMAGE } />
                    </span>
                </section>
            </section>
        );
    }
}

export default AdminBusinessHeader;