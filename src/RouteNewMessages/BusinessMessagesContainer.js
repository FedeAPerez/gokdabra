// BusinessMessagesContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { connect } from 'react-redux';
/* *
 * Código de librerías internas
 * */
import { getConversations } from '../redux/actions/actions';
import LoadingContainer from '../Commons/LoadingContainer';
import ConversationContainer from '../Commons/ConversationContainer';
import * as firebase from 'firebase';
/* *
 * Hojas de Estilo y Constantes
 * */
class BusinessMessagesContainer extends Component {
  constructor(props) {
    super(props);
    var config = {
        apiKey: "AIzaSyDBKnBlkI-Bz-jaPn3H5LrqPY0O7oDv6eU",
        authDomain: "kdabrademo.firebaseapp.com",
        databaseURL: "https://kdabrademo.firebaseio.com",
        projectId: "kdabrademo",
        storageBucket: "kdabrademo.appspot.com",
        messagingSenderId: "494488149572"
      };

    this.state = {
        name : '',
        firebase : firebase.initializeApp(config)
    };
  }

  componentDidMount() {
      const { dispatch } = this.props;
      const nameRef = this.state.firebase.database().ref().child('conversations/kdabra');
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
