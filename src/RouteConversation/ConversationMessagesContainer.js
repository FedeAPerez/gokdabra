// ConversationMessagesContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { connect } from 'react-redux';
/* *
 * Código de librerías internas
 * */ 
import { Conversation } from '../Models/Conversation';
import { Event } from '../Models/Event';
import { fbGetMessagesConversationSuscription } from '../firebase';
import MessagesList from './MessagesList';
import { getCompleteConversation } from '../redux/actions/actions';
import MessageHandler from '../ComponentsLibrary/MessageHandler';
import ExtraHandler from './ExtraHandler';
/* *
 * Hojas de Estilo y Constantes
 * */ 
class ConversationMessagesContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addExtra : false
        }
}

    componentDidMount() {
    
        if(this.props.user && this.props.user.user_name !== '') {
        const nameRef = fbGetMessagesConversationSuscription(this.props.user.user_name, this.props.visitedUser.user_name);
        nameRef.on('value', snapshot => {
            if(!snapshot.val()) {
                setTimeout(() => {
                    
                }, 5000);
            }
            else {
                const { dispatch } = this.props;
                dispatch(getCompleteConversation(
                    snapshot.val()
                ));
            }
          })
        }

        
    }

    onExtraChange = (e) => {
        this.setState((prevState, props) => {
            return { addExtra : !prevState.addExtra };
        });
    }

    onExtraCreate = (e, extraEvent) => {
        var kdabraSubmitedMessage = {
            receiver : this.props.visitedUser,
            sender : this.props.user,
            isBot : true,
            category : "event",
            payload : {
                text : "¡Listo! Ya les cree el evento, próximamente lo van a poder ver en sus agendas. &#x1F558"
            }
        };

        var conv = new Conversation();
        conv.createNewMessage(kdabraSubmitedMessage);
        
        var eventPayload = {
            creator : this.props.user,
            receiver : this.props.visitedUser,
            event : {
                date : extraEvent.date.getDay() + "/" + extraEvent.date.getMonth() + "/" + extraEvent.date.getFullYear(),
                time : extraEvent.time.getHours() + ":" + extraEvent.time.getMinutes() + ":" + extraEvent.time.getSeconds()
            }
        };
        var event = new Event(eventPayload);
        event.createEvent();
        this.setState((prevState, props) => {
            return { addExtra : !prevState.addExtra };
        });
    }

    onAnswerSubmit = (text) => {
        var submitedMessage = {
            receiver : this.props.visitedUser,
            sender : this.props.user,
            isBot : false,
            category : "text",
            payload : {
                text : text
            }
        }    
        var conv = new Conversation();
        conv.createNewMessage(submitedMessage);
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
                    onExtraSubmit = { this.onExtraChange.bind(this) }
                />
                {
                    this.state.addExtra &&
                    <ExtraHandler
                        onExtraClose = { this.onExtraChange.bind(this) }
                        onExtraCreate = { this.onExtraCreate.bind(this) }
                    />
                }
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