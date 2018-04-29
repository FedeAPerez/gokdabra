// BusinessHeaderContainer.js
/*
 Código librerías de externos
 */
import React, { Component } from 'react';
const __BUSINESS_HEADER_CLASS = "business-header-container";

class BusinessHeaderContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'businessOb' : this.props.__BUSINESS_INFORMATION__
        }
    }

    render() {
        return (
            <section 
                    className= { __BUSINESS_HEADER_CLASS }
                    style = {
                    {backgroundColor : this.state.businessOb.color}
                }>
                <h2>{ this.state.businessOb.business_name }</h2>
            </section>
        );
    }
}

export default BusinessHeaderContainer;