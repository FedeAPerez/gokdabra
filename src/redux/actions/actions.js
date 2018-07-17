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

// Informa de un error en el pedido de la lista de negocios
const errorFetching = function(json) {
  return {
    type: Actions.FINISHED_FETCHING,
    error_at: moment().format('MMMM Do YYYY, h:mm:ss a')
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
  console.log("lanzando accion");
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
    message: data.message,
    cta: data.cta
  };
}

const getMessagesOnboarding = function(business) {
    return function (dispatch) {
      return fbGetOnboarding(business)
      .then((res) => {
        dispatch(startedWriting());
        dispatch(getOnboardingAction(res.val()));
        dispatch(finishedWriting());
      })
      .catch((err) => {
      });
    }
}

const authUser = function() {
  return {
    type: Actions.AUTH_USER,
    id: 'fedeaperez',
    name: 'Federico Pérez'
  };
};

const getCompleteConversation = function(messagesList) {
  return function (dispatch) {
    dispatch(startFetching());
    // Enviar la lista de conversaciones desde firebase
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
    authUser, 
    visitUser,
    selectUser,
    getMessagesOnboarding,
    finishedWriting,
    getCompleteConversation
 };