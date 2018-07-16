// BlankFile.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { connect } from 'react-redux';
/* *
 * Código de librerías internas
 * */ 
import { fbGetConversationsSuscription } from '../firebase';
import { getConversations } from '../redux/actions/conversationsActions';
import Text from '../ComponentsLibrary/Text';
/* *
 * Hojas de Estilo y Constantes
 * */ 
class MessagesContainer extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        if(this.props.user) {
            const nameRef = fbGetConversationsSuscription(this.props.user.user_name);
  
            nameRef.on('value', snapshot => {
              dispatch(getConversations(
                  snapshot.val()
              ));
            })
        }
    }

    render() {
        return (
            <span>
                <Text secondary centered>Parece que no tenés mensajes por el momento.</Text>
            </span>
        );
    }

}

function mapStateToProps(state) {
    const { conversations_list } = state.conversations;
    const { user } = state.user;
    return { conversations_list, user };
}

export default connect(mapStateToProps)(MessagesContainer);