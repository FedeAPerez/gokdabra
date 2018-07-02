// ConversationMessagesContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { connect } from 'react-redux';
/* *
 * Código de librerías internas
 * */ 
import { fbCreateNewConversation, fbUpdateOnboarding, fbAddNewMessage, fbGetMessagesConversationSuscription } from '../firebase';
import MessagesList from './MessagesList';
import { getMessagesOnboarding, addUserMessage, addBusinessMessage, getCompleteConversation } from '../redux/actions/actions';
import MessageHandlerTestContainer from '../RouteMain/Container/MessageHandler/MessageHandlerTestContainer';
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
        const nameRef = fbGetMessagesConversationSuscription(this.props.business.business_name, 'fedeaperez');
        nameRef.on('value', snapshot => {
            console.log(snapshot.val());
            if(snapshot.val().length == 0) {
                setTimeout(() => { 
                    dispatch(getMessagesOnboarding(this.props.business.business_name))
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
        const { dispatch } = this.props; 
        if(text != '' && !this.props.isBusiness) {
            dispatch(addUserMessage(text)); 
            // Creo o actualizo la conversación, agrego nuevos mensajes
            fbCreateNewConversation(this.props.business.business_name, "fedeaperez", text, "22:38");
            fbAddNewMessage(this.props.business.business_name, "fedeaperez", text, "22:38", "fedeaperez", "message-user");
        }
        if(text != '' && this.props.isBusiness) {
            dispatch(addBusinessMessage(text)); 
            // Creo o actualizo la conversación, agrego nuevos mensajes
            fbCreateNewConversation(this.props.business.business_name, "fedeaperez", text, "22:38");
            fbAddNewMessage(this.props.business.business_name, "fedeaperez", text, "22:38", this.props.business.business_name, "message-business");
        
        }

    };

    render() {
        return(
            <section className="base-container">
                <MessagesList
                    messages = {this.props.messages}
                    isWriting = {this.props.isWriting}
                />
                <MessageHandlerTestContainer 
                    onAnswerSubmit = { this.onAnswerSubmit.bind(this) } 
                />
            </section>
        );
    }
}

function mapStateToProps(state) {
    const { messages, isWriting } = state.conversations;
    const { business } = state.business;

    return { messages , isWriting, business  };
}

export default connect(mapStateToProps)(ConversationMessagesContainer);