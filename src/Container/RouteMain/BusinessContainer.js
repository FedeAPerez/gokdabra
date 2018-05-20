// BusinessContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */
import BusinessAPI from '../../API/BusinessAPI';
import ConversationContainer from '../Conversation/ConversationContainer';

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