// LoadingContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { connect } from 'react-redux';
/* *
 * Código de librerías internas
 * */ 
import Loading from './Loading';
/* *
 * Hojas de Estilo y Constantes
 * */ 
function mapStateToProps(state){
    const { isFetching  } = state.fetching;

    return {
        isFetching: isFetching
    }
}
class LoadingContainer extends Component {
    render() {
        return (
            <Loading isFetching = { this.props.isFetching }/>
        );
    }
}

export default connect(mapStateToProps)(LoadingContainer);