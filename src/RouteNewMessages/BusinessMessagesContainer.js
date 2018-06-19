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
import { getConversations } from '../redux/actions/actions';
import LoadingContainer from '../Commons/LoadingContainer';
import ConversationContainer from '../Commons/ConversationContainer';
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
      const nameRef = fbGetConversationsSuscription('kdabra');

      nameRef.on('value', snapshot => {
        dispatch(getConversations(
            snapshot.val()
        ));
      })
  }

  render() {
    const conversations_list = this.props.conversations_list;
    var conversationsList = [];
    var keys = Object.keys(conversations_list);
    for(var i =0; i< keys.length; i++)
    {
        conversationsList.push(conversations_list[keys[i]]);
    }
    return (
      <div>
          <LoadingContainer />
          {
              conversationsList &&
              conversationsList.map((element, index) => {
                  return (
                      <ConversationContainer 
                        key={"conversation_"+index} 
                        conversation = { element } />
                  );
              })
          }
      </div>
    );
  }
};
function mapStateToProps(state) {
    const { conversations_list } = state.conversations;
    return { conversations_list };
}
export default connect(mapStateToProps)(BusinessMessagesContainer);
