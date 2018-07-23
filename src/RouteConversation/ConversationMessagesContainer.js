// ConversationMessagesContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { connect } from 'react-redux';
/* *
 * Código de librerías internas
 * */ 
import { fbCreateNewConversation,  fbAddNewMessage, fbGetMessagesConversationSuscription } from '../firebase';
import MessagesList from './MessagesList';
import { getMessagesOnboarding, getCompleteConversation, selectUser } from '../redux/actions/actions';
import MessageHandler from '../ComponentsLibrary/MessageHandler';
/* *
 * Hojas de Estilo y Constantes
 * */ 
class ConversationMessagesContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            writing : false
        }
}

    componentDidMount() {
        
        const cachedUser = JSON.parse(localStorage.getItem("userSession"));
        const { dispatch } = this.props;
        dispatch(selectUser(cachedUser));
        if(this.props.user) {
        // Si no hay mensajes en el historial, largo onboarding
        const nameRef = fbGetMessagesConversationSuscription(this.props.visitedUser.user_name, this.props.user.user_name);
        nameRef.on('value', snapshot => {
            if(!snapshot.val()) {
                setTimeout(() => {
                    
                }, 5000);
            }
            else {
                dispatch(getCompleteConversation(
                    snapshot.val()[Object.keys(snapshot.val())[0]]
                ));
            }
          })
        }

        
    }


    onAnswerSubmit = (input_value, text) => {     
        // Creo o actualizo la conversación, agrego nuevos mensajes
        fbCreateNewConversation(this.props.visitedUser.user_name, this.props.user.user_name, text, "22:38");
        fbAddNewMessage(this.props.visitedUser.user_name, this.props.user.user_name, text, "22:38", this.props.user.user_name, "message-user");

    };

    render() {
        return(
            <section className="base-container">
                <MessagesList
                    messages = {this.props.messages}
                    user = { this.props.user }
                    isWriting = {this.props.isWriting}
                />
                <MessageHandler 
                    onAnswerSubmit = { this.onAnswerSubmit.bind(this) } 
                />
            </section>
        );
    }
}

function mapStateToProps(state) {
    const { isWriting } = state.conversations;
    const { messages } = state.conversations.conversation;
    const { visitedUser, user} = state;
    return { messages , isWriting, visitedUser, user};
}

export default connect(mapStateToProps)(ConversationMessagesContainer);