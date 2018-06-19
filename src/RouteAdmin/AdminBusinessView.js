// AdminBusinessView.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/* *
 * Código de librerías internas
 * */ 
import { BusinessAPI } from  '../API';
import AdminBusinessHeader from './AdminBusinessHeader';
import MessagesContainer from './MessagesContainer';
import SettingsContainer from './SettingsContainer';
import ShareContainer from './ShareContainer';
import AnalyticsContainer from './AnalyticsContainer';
import { selectBusiness } from '../redux/actions/actions';

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
        const businessPojo = BusinessAPI.getBusinessByName(this.props.match.params.business);
        this.state = {
            'businessOb' : businessPojo,
            'selected_container' : ShareContainer
        };
        const {dispatch} = this.props;
        dispatch(selectBusiness(businessPojo));
        
    }

    handleNavigation(value) {
        this.state.selected_container = value;
        this.setState(this.state);
    }

    render() {
        const key = this.state.selected_container;
        const KeySelected = keyMap[key] || keyMap.default;

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
}

export default connect()(AdminBusinessView);