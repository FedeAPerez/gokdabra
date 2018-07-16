// AdminBusinessHeader.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
/* *
 * Código de librerías internas
 * */ 
import NavigationItem from '../RouteAdmin/NavigationItem';
/* *
 * Hojas de Estilo y Constantes
 * */ 
// CSS Classes
const __BUSINESS_HEADER_CLASS = "admin-business-header-container";
const __BUSINESS_HEADER_HOME_CLASS = "admin-business-header-home-container";
const __BUSINESS_HEADER_NAV_CLASS = "admin-business-header-nav-container";
const __BUSINESS_HEADER_CLASS_LINK = "admin-business-header-link";
const __BUSINESS_HEADER_TEXT_IMAGE = "admin-business-header-text";
// Images
const __BUSINESS_HEADER_HOME_IMAGE = "/content/images/HomeButton.svg";
const __BUSINESS_HEADER_SETTINGS_IMAGE = "/content/images/SettingsButton.svg";
const __BUSINESS_HEADER_SETTINGS_SELECTED_IMAGE = "/content/images/SettingsButtonSelected.svg";
const EVENTS_IMAGE = "/content/images/actions/event.svg";
const EVENTS_IMAGE_SECOND = "/content/images/actions/event_orange.svg";
const __BUSINESS_HEADER_MESSAGES_IMAGE = "/content/images/MessagesButton.svg";
const __BUSINESS_HEADER_MESSAGES_SELECTED_IMAGE = "/content/images/MessagesButtonSelected.svg";

class AdminBusinessHeader extends Component {
	constructor(props) {
        super(props);
        this.state = {
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

    renderBusinessHeaderLabel() {
        return {__html :  "PaulPogba | <span class=biggerH2>" + this.state.show_option + "</span>"};
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
                    dangerouslySetInnerHTML={ this.renderBusinessHeaderLabel() }
                >
                </h2>
            </section>
                <section 
                    className= { __BUSINESS_HEADER_NAV_CLASS }
                >
                    <NavigationItem 
                        value= { "chat" }
                        isSelected= { this.state.option_selected == "chat" }
                        defaultImage= { __BUSINESS_HEADER_MESSAGES_IMAGE }
                        selectedImage= { __BUSINESS_HEADER_MESSAGES_SELECTED_IMAGE }
                        navigateOption= { this.navigateOption.bind(this) }
                        showMessage= { "Mensajes" }
                    />
                    <NavigationItem 
                        value= { "events" }
                        isSelected= { this.state.option_selected == "events" }
                        defaultImage= { EVENTS_IMAGE }
                        selectedImage= { EVENTS_IMAGE_SECOND }
                        navigateOption= { this.navigateOption.bind(this) }
                        showMessage= { "Eventos" }
                    />
                    <NavigationItem 
                        value= { "settings" }
                        isSelected= { this.state.option_selected == "settings" }
                        defaultImage= { __BUSINESS_HEADER_SETTINGS_IMAGE }
                        selectedImage= { __BUSINESS_HEADER_SETTINGS_SELECTED_IMAGE }
                        navigateOption= { this.navigateOption.bind(this) }
                        showMessage= { "Configuración" }
                    />
                </section>
            </section>
        );
    }
}

export default AdminBusinessHeader;