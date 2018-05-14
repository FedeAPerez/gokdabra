// BusinessContainer.js
/*
 Código librerías de externos
 */
import React, { Component } from 'react';

/*
 Código Propio y librerías desarrolladas por KDABRA
 */
import BusinessAPI from '../../../API/BusinessAPI';
import ConversationContainer from './BusinessContainer__/ConversationContainer';
import ErrorContainer from './ErrorContainer';

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
            return <ErrorContainer />;
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