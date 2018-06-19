import { ProspectsAPI, ConversationsAPI } from '../../API';

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
    messages : json.data,
    received_at: moment().format('LLL')
  }
}

const selectBusiness = function(json) {
  return {
    type: Actions.SELECT_BUSINESS,
    business: json
  };
}
// Informa de la llegada de la información de la lista de negocios
const receiveBusinessList = function(json) {
  return {
    type: Actions.RECEIVE_BUSINESSLIST,
    businessList: json.data,
    received_at: moment().format('LLL')
  };
}


const getMessagesOnboarding = function() {
  return {
    type: Actions.RECEIVE_MESSAGES_ONBOARDING
  };
}

const addUserMessage = function(message) {
  return {
    type: Actions.ADD_USER_MESSAGE,
    message: message
  };
}

const authUser = function() {
  return {
    type: Actions.AUTH_USER,
    id: 'fedeaperez',
    name: 'Federico Pérez'
  };
};

const fetchBusinessList = function (){

  return function (dispatch) {
    dispatch(startFetching());

    return ProspectsAPI.getAllProspects()
    .then((res) => {
      dispatch(receiveBusinessList(res.data));
      dispatch(finishedFetching());
      
    })
    .catch((err) => {
      dispatch(errorFetching());
    });
  }
}

const addMessage = function() {

}

const getMessages = function(business_name, user) {
  return function (dispatch) {
    dispatch(startFetching());
    var obj = {};
    obj.business_name  = business_name;
    obj.user = user;
    return ConversationsAPI.getMessagesConversation(obj)
    .then((res) => {
      dispatch(receiveMessages(res.data));
      dispatch(finishedFetching());
      
    })
    .catch((err) => {
      dispatch(errorFetching());
    });
  }
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
    fetchBusinessList, 
    addMessage, 
    selectBusiness,
    getMessages,
    getMessagesOnboarding,
    addUserMessage,
    finishedWriting
 };