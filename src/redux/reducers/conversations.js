// src/redux/reducers/conversations.js
import * as Actions from '../actions/actions_type';

const initialState = {
    conversations_list: [],
    conversation : {},
    messages : []
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
                    class_used : "user-message"
                }
            });
            return {
                ...state,
                messages: messagesOb
            };
        break;

        default:
            return state;
        break;
    }
}