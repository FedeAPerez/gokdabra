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
import SearchBusinessContainer from './SearchBusinessContainer';
import { fbGetUser  } from '../firebase';
import * as Actions from '../redux/actions/actions';

/* *
 * Hojas de Estilo y Constantes
 * */
import './AdminBusinessView.css';
const keyMap = {
    'chat' : MessagesContainer,
    'settings' : SettingsContainer,
    'search': SearchBusinessContainer,
    'default' : SearchBusinessContainer
};

class AdminBusinessView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'userOb' : null,
            'selected_container' : SearchBusinessContainer
        };

        const userPojo = fbGetUser(this.props.match.params.user);
        userPojo.then(
        (snapshot) => { 
            console.log("seleccionando el usuario");
            this.props.dispatch(Actions.selectUser(snapshot.val()));
            this.setState({ userOb : snapshot.val() });
        })
        .catch((err) => {
            console.log(err);
        });
        
    }

    handleNavigation(value) {
        this.setState({ selected_container : value });
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