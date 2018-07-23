import * as Actions from './actions_type';
import { startFetching, finishedFetching } from './actions';

const receiveConversations = function(json) {
    return {
      type: Actions.RECEIVE_CONVERSATIONS,
      conversations_list: json
    };
}

const getConversations = function(conversationsList) {
    return function (dispatch) {
      dispatch(startFetching());
      dispatch(receiveConversations(conversationsList));
      dispatch(finishedFetching());
    }
    
}

export 
  {
    getConversations
 };