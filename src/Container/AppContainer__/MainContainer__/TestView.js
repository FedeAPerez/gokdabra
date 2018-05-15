// BusinessContainer.js
/*
 Código librerías de externos
 */
import React, { Component } from 'react';

/*
 Código Propio y librerías desarrolladas por KDABRA
 */
import BusinessAPI from '../../../API/BusinessAPI';
import ConversationTestContainer from './BusinessContainer__/ConversationTestContainer';
import ErrorContainer from './ErrorContainer';

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
            return <ErrorContainer />;
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