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
import SettingsContainer from './NewSettingsContainer';
import ShareContainer from './ShareContainer';
import AnalyticsContainer from './AnalyticsContainer';
import {fbGetBusiness} from '../firebase';
import { selectBusiness, isBusiness } from '../redux/actions/actions';

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
            'businessOb' : null,
            'selected_container' : ShareContainer
        };

        const businessPojo = fbGetBusiness(this.props.match.params.business);
        businessPojo.then(
        (snapshot) => { 
            console.log(snapshot.val());
            const {dispatch} = this.props;
            dispatch(selectBusiness(snapshot.val()));
            dispatch(isBusiness());

            this.setState({ businessOb : snapshot.val() });
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
        if(this.state.businessOb) {

            return (
                <main>
                    <AdminBusinessHeader 
                        handleNavigation= { this.handleNavigation.bind(this) }
                        __BUSINESS_INFORMATION__= { this.state.businessOb } />
                    <KeySelected 
                            businessObject= { this.state.businessOb } />
                </main>
            );
        }
        else {
            return null;
        }
    }
}

export default connect()(AdminBusinessView);