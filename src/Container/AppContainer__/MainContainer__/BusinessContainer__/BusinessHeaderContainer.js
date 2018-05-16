// BusinessHeaderContainer.js
/*
 Código librerías de externos
 */
import React, { Component } from 'react';
const __BUSINESS_HEADER_CLASS = "business-header-container";
const __BUSINESS_HEADER_CLASS_IMAGE = "business-header-image";
const __BUSINESS_HEADER_TEXT_IMAGE = "business-header-text";
const __BUSINESS_HEADER_ROUTE_IMAGE = "content/images/home.svg";

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
                <span 
                    className= { __BUSINESS_HEADER_CLASS_IMAGE }
                >
                    <img src={ __BUSINESS_HEADER_ROUTE_IMAGE } />
                </span>
                <h2
                    className= { __BUSINESS_HEADER_TEXT_IMAGE }
                >
                    { this.businessMoreVersion() }
                </h2>
            </section>
        );
    }
}

export default BusinessHeaderContainer;
