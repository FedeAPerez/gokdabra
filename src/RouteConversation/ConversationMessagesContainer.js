// ConversationMessagesContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { connect } from 'react-redux';
/* *
 * Código de librerías internas
 * */ 
import MessageContainer from './MessageContainer';
import { getMessagesOnboarding, addUserMessage, finishedWriting } from '../redux/actions/actions';
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
            dispatch(getMessagesOnboarding());
            dispatch(finishedWriting());
        }, 5000);
        
    }

    onAnswerSubmit = (input_value, text) => {       
        const { dispatch } = this.props; 
        if(text != '') {
            dispatch(addUserMessage(text)); 
        }

    };

    render() {
        console.log(this.props.messages);
        return(
            <section className="base-container">
                <section className="messages-container">
                    {
                        (this.props.messages).length > 0 &&
                        this.props.messages.map(
                            (element, index) => {
                                console.log(element);
                                return (
                                    <MessageContainer 
                                        message={ element } 
                                        key={"conversation-messages" + index} 
                                    />
                                );
                            }
                        )
                    }
                    {
                        this.props.isWriting && 
                        <MessageContainer
                            message= { {
                                text : "Está escribiendo...",
                                type : {
                                    class_used : "waiting"
                                },
                                sender : ''
                            } }
                        />
                    }
                </section>

                <MessageHandlerTestContainer 
                    onAnswerSubmit = { this.onAnswerSubmit.bind(this) } 
                />
            </section>
        );
    }
}

function mapStateToProps(state) {
    const { messages, isWriting } = state.conversations;

    return { messages : messages, isWriting : isWriting };
}

export default connect(mapStateToProps)(ConversationMessagesContainer);