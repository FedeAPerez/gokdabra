// ConversationMessagesContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
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
    
        if(this.props.user && this.props.user.user_name !== '') {
        // Si no hay mensajes en el historial, largo onboarding
        const nameRef = fbGetMessagesConversationSuscription(this.props.user.user_name, this.props.visitedUser.user_name);
        nameRef.on('value', snapshot => {
            if(!snapshot.val()) {
                setTimeout(() => {
                    
                }, 5000);
            }
            else {
                console.log(snapshot.val());
                const { dispatch } = this.props;
                dispatch(getCompleteConversation(
                    snapshot.val()
                ));
            }
          })
        }

        
    }


    onAnswerSubmit = (input_value, text) => {
        var time = moment().format('HH:mm');
        var SubmitedMessage = {
            receiver : {},
            sender : {},
            payload : {
                time : time
            }
        }    
        // Creo o actualizo la conversación, agrego nuevos mensajes
        fbCreateNewConversation(this.props.visitedUser.user_name, this.props.user.user_name, text, time);
        fbAddNewMessage(this.props.visitedUser.user_name, this.props.user.user_name, text, time, this.props.user.user_name);

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