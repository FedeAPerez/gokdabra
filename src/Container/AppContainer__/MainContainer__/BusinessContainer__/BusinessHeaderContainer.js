/*
 Código librerías de externos
 */
import React, { Component } from 'react';

class BusinessHeaderContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'businessOb' : this.props.__BUSINESS_INFORMATION__
        }
    }

    render() {
        return (
            <section style = {
                    {backgroundColor : this.state.businessOb.color}
                }>
                <p>{ this.state.businessOb.business_name }</p>
            </section>
        );
    }
}

export default BusinessHeaderContainer;
