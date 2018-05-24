// AdminBusinessView.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */ 
import { BusinessAPI } from  '@gokdabra/gokdabraapi';
import AdminBusinessHeader from './AdminBusinessHeader';
/* *
 * Hojas de Estilo y Constantes
 * */
 import './AdminBusinessView.css';

class AdminBusinessView extends Component {
    constructor(props) {
        super(props);
        const businessPojo = BusinessAPI.getBusinessByName(props.match.params.business);
        this.state = {
            'businessOb' : businessPojo
        };
    }

    render() {
        return (
            <main>
                <AdminBusinessHeader __BUSINESS_INFORMATION__= { this.state.businessOb } />
            </main>
        );
    }
}

export default AdminBusinessView;