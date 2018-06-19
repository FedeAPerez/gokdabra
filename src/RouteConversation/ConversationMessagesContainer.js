// ConversationMessagesContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { connect } from 'react-redux';
/* *
 * Código de librerías internas
 * */ 
import { fbCreateNewConversation, fbUpdateOnboarding } from '../firebase';
import MessagesList from './MessagesList';
import { getMessagesOnboarding, addUserMessage } from '../redux/actions/actions';
import MessageHandlerTestContainer from '../RouteMain/Container/MessageHandler/MessageHandlerTestContainer';
/* *
 * Hojas de Estilo y Constantes
 * */ 
class ConversationMessagesContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            writing : true
        }
}

    componentDidMount() {
        // Si el usuario no tuvo onboarding hasta el momento
        const { dispatch } = this.props;
        setTimeout(() => { 
            dispatch(getMessagesOnboarding(this.props.business.business_name))
        }, 5000);
        
    }

    onAnswerSubmit = (input_value, text) => {       
        const { dispatch } = this.props; 
        if(text != '') {
            dispatch(addUserMessage(text)); 
        }

        // Si es el primer mensaje, creo la conversación, o actualizo los mensajs en fb

        fbCreateNewConversation("kdabra", "elchipibarijo", text, "22:38");

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