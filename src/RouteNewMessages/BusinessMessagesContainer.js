// BusinessMessagesContainer.js
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
import ConversationContainer from '../Commons/ConversationContainer';
import Text from '../ComponentsLibrary/Text';
/* *
 * Hojas de Estilo y Constantes
 * */
class BusinessMessagesContainer extends Component {
  constructor(props) {
    super(props);


    this.state = {
        name : '',
    };
  }

  componentDidMount() {
      const { dispatch } = this.props;
      const nameRef = fbGetConversationsSuscription(this.props.user.user_name);

      nameRef.on('value', snapshot => {
        dispatch(getConversations(
            snapshot.val()
        ));
      })
  }

  render() {
    if(this.props.conversations.conversations_list) {
        const conversations_list = this.props.conversations.conversations_list;
        var conversationsList = [];
        var keys = Object.keys(conversations_list);
        for(var i =0; i< keys.length; i++)
        {
            conversationsList.push(conversations_list[keys[i]]);
        }
    }
    return (
      <div>
          {
              (conversationsList && conversationsList.length > 0) &&
              conversationsList.map((element, index) => {
                  return (
                      <ConversationContainer 
                        key={"conversation_"+index} 
                        conversation = { element }
                        onClick={ this.handlerConversation } />
                  );
              })
          }
          {
              !conversationsList &&
                <Text secondary centered >Parece que no tenés mensajes por el momento.</Text>
          }
      </div>
    );
  }
};
function mapStateToProps(state) {
    const { conversations, user } = state;
    return { conversations, user };
}
export default connect(mapStateToProps)(BusinessMessagesContainer);
