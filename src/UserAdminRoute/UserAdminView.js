// UserAdminView.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */ 

import MessagesContainer from './MessagesContainer';
import SettingsContainer from './SettingsContainer';
import EventsContainer from './EventsContainer';
import UserAdminHeader from './UserAdminHeader';
/* *
 * Hojas de Estilo y Constantes
 * */ 

const keyMap = {
    'chat' : MessagesContainer,
    'settings' : SettingsContainer,
    'events': EventsContainer,
    'default' : MessagesContainer
};

class UserAdminView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'selected_container' : MessagesContainer
        };
    }

    handleNavigation(value) {
        this.setState({ selected_container : value });
    }
    render() {
        
        const key = this.state.selected_container;
        const KeySelected = keyMap[key] || keyMap.default;
        return (
            <main>
                <UserAdminHeader 
                    handleNavigation= { this.handleNavigation.bind(this) }
                />
                <KeySelected />
            </main>
        );
    }
}

export default UserAdminView;