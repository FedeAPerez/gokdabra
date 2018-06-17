// BusinessInfoContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { connect } from 'react-redux';
/* *
 * Código de librerías internas
 * */ 
import NextFunction from '../Commons/NextFunction';
import ConversationHeaderContainer from './ConversationHeaderContainer';
/* *
 * Hojas de Estilo y Constantes
 * */ 
class BusinessInfoContainer extends Component {
    render() {
        var businessInfonextValues = [];
        businessInfonextValues.push({
            description : "Conocer mejor a " + this.props.business.business_name.toLowerCase() + " y todo lo que hacen día a día para darte un mejor servicio."
        });
        businessInfonextValues.push({
            description : "Saber los horarios de trabajo y atención al público."
        });
        return(
            <main>
                <ConversationHeaderContainer 
                    business= { this.props.business }
                    isBack= { true }
                />
                <NextFunction 
                    nextValues = { businessInfonextValues }
                />
            </main>
        );
    }
}

function mapStateToProps(state) {
    const { business } = state.business;
    return { business : business };
}

export default connect(mapStateToProps)(BusinessInfoContainer);