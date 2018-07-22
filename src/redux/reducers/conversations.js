// src/redux/reducers/conversations.js
import * as Actions from '../actions/actions_type';

const initialState = {
    conversations_list: [],
    conversation : {},
    isWriting : false
}

export default (state = initialState, action) => {
    switch (action.type) {
        
        case Actions.RECEIVE_CONVERSATIONS:
            return {
                ...state,
                conversations_list : action.conversations_list
            };
        
        case Actions.STARTED_WRITING:
            return {
                ...state,
                isWriting : true
            }
        case Actions.FINISHED_WRITING:
            return {
                ...state,
                isWriting : false
            }

        default:
            return state;
    }
}