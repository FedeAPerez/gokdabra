// AdminBusinessHeader.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
/* *
 * Código de librerías internas
 * */ 
import NavigationItem from './NavigationItem';
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
const __BUSINESS_HEADER_ANALYTICS_IMAGE = "/content/images/AnalyticsButton.svg";
const __BUSINESS_HEADER_ANALYTICS_SELECTED_IMAGE = "/content/images/AnalyticsButtonSelected.svg";
const __BUSINESS_HEADER_MESSAGES_IMAGE = "/content/images/MessagesButton.svg";
const __BUSINESS_HEADER_MESSAGES_SELECTED_IMAGE = "/content/images/MessagesButtonSelected.svg";
const __BUSINESS_HEADER_SHARE_IMAGE = "/content/images/ShareButton.svg";
const __BUSINESS_HEADER_SHARE_SELECTED_IMAGE = "/content/images/ShareButtonSelected.svg";

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

    renderBusinessHeaderLabel() {
        return {__html : this.state.business_object.business_name.toUpperCase() + " | <span class=biggerH2>" + this.state.show_option + "</span>"};
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
                        value= { "analytics" }
                        isSelected= { this.state.option_selected == "analytics" }
                        defaultImage= { __BUSINESS_HEADER_ANALYTICS_IMAGE }
                        selectedImage= { __BUSINESS_HEADER_ANALYTICS_SELECTED_IMAGE }
                        navigateOption= { this.navigateOption.bind(this) }
                        showMessage= { "Uso" }
                    />
                    <NavigationItem 
                        value= { "share" }
                        isSelected= { this.state.option_selected == "share" }
                        defaultImage= { __BUSINESS_HEADER_SHARE_IMAGE }
                        selectedImage= { __BUSINESS_HEADER_SHARE_SELECTED_IMAGE }
                        navigateOption= { this.navigateOption.bind(this) }
                        showMessage= { "Compartir" }
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