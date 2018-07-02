// src/redux/reducers/conversations.js
import * as Actions from '../actions/actions_type';

const initialState = {
    conversations_list: [],
    conversation : {},
    messages : [],
    isWriting : false
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
            messagesOb.push({
                text : action.message,
                cta : action.cta,
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
            messagesOb.push({
                text : action.message,
                sender: "user",
                hour: "22:38",
                type : {
                    class_used : "message-user"
                }
            });
            return {
                ...state,
                messages: messagesOb
            };
        break;

        case Actions.ADD_BUSINESS_MESSAGE:
            var messagesOb = Object.assign([], state.messages);
            messagesOb.push({
                text : action.message,
                sender: "business",
                hour: "22:38",
                type : {
                    class_used : "message-business"
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