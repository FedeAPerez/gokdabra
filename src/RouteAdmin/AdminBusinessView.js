// AdminBusinessView.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/* *
 * Código de librerías internas
 * */ 
import AdminBusinessHeader from './AdminBusinessHeader';
import MessagesContainer from './MessagesContainer';
import SettingsContainer from './SettingsContainer';
import ShareContainer from './ShareContainer';
import AnalyticsContainer from './AnalyticsContainer';
import { fbGetUser  } from '../firebase';

/* *
 * Hojas de Estilo y Constantes
 * */
import './AdminBusinessView.css';
const keyMap = {
    'chat' : MessagesContainer,
    'settings' : SettingsContainer,
    'analytics' : AnalyticsContainer,
    'share': ShareContainer,
    'default' : MessagesContainer
};

class AdminBusinessView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'userOb' : null,
            'selected_container' : ShareContainer
        };

        const businessPojo = fbGetUser(this.props.match.params.user);
        businessPojo.then(
        (snapshot) => { 
            console.log(snapshot.val());
            const {dispatch} = this.props;

            this.setState({ userOb : snapshot.val() });
        })
        .catch((err) => {
            console.log(err);
        });
        
    }

    handleNavigation(value) {
        this.state.selected_container = value;
        this.setState(this.state);
    }

    render() {
        const key = this.state.selected_container;
        const KeySelected = keyMap[key] || keyMap.default;
        if(this.state.userOb) {

            return (
                <main>
                    <AdminBusinessHeader 
                        handleNavigation= { this.handleNavigation.bind(this) }
                        user = { this.state.userOb } />
                    <KeySelected 
                        user= { this.state.userOb } />
                </main>
            );
        }
        else {
            return null;
        }
    }
}

export default connect()(AdminBusinessView);