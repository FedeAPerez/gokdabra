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
    businessMoreVersion() {
        return this.state.businessOb.version != '' ? this.state.businessOb.business_name.toUpperCase() + " - " + this.state.businessOb.version :this.state.businessOb.business_name.toUpperCase();
    }

    render() {
        return (
            <section 
                    className= { __BUSINESS_HEADER_CLASS }
            >
                <h2>{ this.businessMoreVersion() }</h2>
            </section>
        );
    }
}

export default BusinessHeaderContainer;
