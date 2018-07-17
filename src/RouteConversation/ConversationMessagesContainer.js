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
import { getMessagesOnboarding, getCompleteConversation } from '../redux/actions/actions';
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
        // Si el usuario no tuvo onboarding hasta el momento
        const { dispatch } = this.props;

        // Si no hay mensajes en el historial, largo onboarding
        const nameRef = fbGetMessagesConversationSuscription(this.props.user_name, 'fedeaperez');
        nameRef.on('value', snapshot => {
            console.log(snapshot.val());
            if(snapshot.val().length == 0) {
                setTimeout(() => { 
                    dispatch(getMessagesOnboarding(this.props.user_name))
                }, 5000);
            }
            else {
                dispatch(getCompleteConversation(
                    snapshot.val()
                ));
            }
          })
        
    }


    onAnswerSubmit = (input_value, text) => {     
        // Creo o actualizo la conversación, agrego nuevos mensajes
        fbCreateNewConversation(this.props.user_name, "fedeaperez", text, "22:38");
        fbAddNewMessage(this.props.user_name, "fedeaperez", text, "22:38", this.props.user_name, "message-user");

    };

    render() {
        return(
            <section className="base-container">
                <MessagesList
                    messages = {this.props.messages}
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
    const { messages, isWriting } = state.conversations;

    return { messages , isWriting, user_name : state.visitedUser.user_name };
}

export default connect(mapStateToProps)(ConversationMessagesContainer);