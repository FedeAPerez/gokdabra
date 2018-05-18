// BusinessContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
//import {browserHistory} from 'react-router';
/* *
 * Código de librerías internas
 * */ 
import BusinessAPI from '../../../API/BusinessAPI';
import ConversationTestContainer from './BusinessContainer__/ConversationTestContainer';

class TestView extends Component {
    constructor(props) {
        super(props);
        
        const businessPojo = BusinessAPI.getBusinessByName(this.props.id);
        this.state = {
            'businessOb' : businessPojo
        };
    }

    render() {
        
        if (!this.state.businessOb) {
            //browserHistory.push('/404');
        }

        return(
            <section className="view-container">
                <ConversationTestContainer 
                    __BUSINESS_INFORMATION__= { this.state.businessOb }
                    />
            </section>
        );
    }
}

export default TestView;