// BusinessContainer.js
/*
 Código librerías de externos
 */
import React, { Component } from 'react';
import {browserHistory} from 'react-router';
/*
 Código Propio y librerías desarrolladas por KDABRA
 */
import BusinessAPI from '../../../API/BusinessAPI';
import ConversationContainer from './BusinessContainer__/ConversationContainer';
import ErrorView from '../ErrorView/ErrorView';

class BusinessContainer extends Component {
    constructor(props) {
        super(props);
        
        const businessPojo = BusinessAPI.getBusinessByName(props.match.params.business);
        this.state = {
            'businessOb' : businessPojo
        };
    }

    render() {
        
        if (!this.state.businessOb) {
            browserHistory.push('/404');
            //return <ErrorView />;
        }

        return(
            <section className="view-container">
                <ConversationContainer 
                    __BUSINESS_INFORMATION__= { this.state.businessOb }
                    />
            </section>
        );
    }
}

export default BusinessContainer;