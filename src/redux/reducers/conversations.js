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
        default:
            return state;
        break;
    }
}