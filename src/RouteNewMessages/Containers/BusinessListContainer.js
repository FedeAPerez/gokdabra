// BusinessListContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { connect } from 'react-redux'
/* *
 * Código de librerías internas
 * */ 
import { fetchBusinessList, getMessages, authUser } from '../../redux/actions/actions';
import BusinessList from '../Components/BusinessList';
import Messages from '../Components/Messages';
/* *
 * Hojas de Estilo y Constantes
 * */ 

function mapStateToProps(state){
    const { businessList, isFetching  } = state.business;
    const { messages } = state.conversations;

    return {
        businessList: businessList,
        isFetching: isFetching,
        messages: messages
    }
}
  
class BusinessListContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchBusinessList());
        dispatch(authUser());
        dispatch(getMessages("kdabra", "fedeaperez"));
    }

    render() {
        const { businessList, isFetching, messages } = this.props;
        return (
            <div>
                {
                    isFetching &&
                    <div>Estoy cargando</div>
                }

                { messages &&
                    <Messages  messages = { messages } />
                }

            </div>
        );
    }
}
export default connect(mapStateToProps)(BusinessListContainer);