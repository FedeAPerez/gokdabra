// BusinessHeaderContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
/* *
 * Hojas de Estilo y Constantes
 * */
import './BusinessHeaderContainer.css';
const __BUSINESS_HEADER_CLASS = "business-header-container";
const __BUSINESS_HEADER_CLASS_LINK = "business-header-link";
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
                <Link 
                    className= { __BUSINESS_HEADER_CLASS_LINK }
                    to="/"
                >
                    <span 
                    >
                        <img src={ __BUSINESS_HEADER_ROUTE_IMAGE } />
                    </span>
                </Link>
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
