import { fbGetOnboarding } from '../../firebase';
import * as Actions from './actions_type';
import moment from 'moment';

// Informa del pedido de la lista de negocios
const startFetching = function() {
  return {
    type: Actions.START_FETCHING,
    requested_at: moment().format('MMMM Do YYYY, h:mm:ss a')
  };
}

// Informa del pedido de la lista de negocios
const finishedFetching = function() {
  return {
    type: Actions.FINISHED_FETCHING,
    finished_at: moment().format('MMMM Do YYYY, h:mm:ss a')
  };
}

const receiveMessages = function(json) {
  return {
    type: Actions.RECEIVE_MESSAGES,
    messages : json,
    received_at: moment().format('LLL')
  }
}

const visitUser = function(json) {
  return {
    type: Actions.VISIT_USER,
    visitedUser: json
  };
}

const selectUser = function(json) {
  return {
    type: Actions.SELECT_USER,
    user: json
  };
}

const getOnboardingAction = function(data) {
  return {
    type: Actions.RECEIVE_MESSAGES_ONBOARDING,
    message: data.message
  };
}

const getMessagesOnboarding = function(user_name) {
    return function (dispatch) {
      
      dispatch(startedWriting());
      
      return fbGetOnboarding(user_name)
      .then((res) => {
        dispatch(getOnboardingAction(res.val()));
        dispatch(finishedWriting());
      })
      .catch((err) => {
      });
    }
}

const getCompleteConversation = function(messagesList) {
  return function (dispatch) {
    dispatch(startFetching());
    // Enviar la conversación
      console.log("procesemos los mensajes");
    dispatch(receiveMessages(messagesList));
    dispatch(finishedFetching());
  }
}

const startedWriting = function() {
  return {
    type: Actions.STARTED_WRITING
  };
}

const finishedWriting = function() {
  return {
    type: Actions.FINISHED_WRITING
  };
}
export 
  {
    startFetching,
    finishedFetching,
    visitUser,
    selectUser,
    getMessagesOnboarding,
    finishedWriting,
    getCompleteConversation
 };