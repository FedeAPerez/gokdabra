// src/redux/reducers/conversations.js
import * as Actions from '../actions/actions_type';

const initialState = {
    conversations_list: [],
    conversation : {},
    messages : [],
    isWriting : true
}

export default (state = initialState, action) => {
    switch (action.type) {
        case Actions.RECEIVE_MESSAGES:
            return {
                ...state,
                messages: action.messages
            };
        break;
        case Actions.RECEIVE_CONVERSATIONS:
            return {
                ...state,
                conversations_list : action.conversations_list
            };
        break;
        case Actions.RECEIVE_MESSAGES_ONBOARDING:
            var messagesOb = Object.assign([], state.messages);
            console.log(messagesOb);
            messagesOb.push({
                text : "<b>¡Hola! ¿Cómo estás? &#x1F44B;</b>Te presento a KDABRA, la herramienta que ayuda a que te comuniques mejor con los negocios que amás. &#x1F495;",
                cta : "Mandá tu mensaje para que te contestemos lo antes posible!",
                sender: "kdabra",
                type : {
                    class_used : "message-onboarding"
                }
            });
            return {
                ...state,
                messages: messagesOb
            };
        break;

        case Actions.ADD_USER_MESSAGE:
            var messagesOb = Object.assign([], state.messages);
            console.log(messagesOb);
            messagesOb.push({
                text : action.message,
                sender: "user",
                type : {
                    class_used : "message-user"
                }
            });
            return {
                ...state,
                messages: messagesOb
            };
        break;

        case Actions.FINISHED_WRITING:
            return {
                ...state,
                isWriting : false
            }
        break; 

        default:
            return state;
        break;
    }
}