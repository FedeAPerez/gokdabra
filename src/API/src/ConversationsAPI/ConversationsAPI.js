'use strict';
var axios = require ('axios');
const businessServiceUrl = process.env.REACT_APP_BACK_URL.trim() + '/messages';

var  ConversationsAPI = function() {

    var getMessagesConversation = function(obj) {
      return axios(
          {
            method: 'get',
            url: businessServiceUrl + '/business/' + obj.business_name + '/user/' + obj.user,
            headers: {'Content-Type': 'application/json'},
          }
        );
    }

    var addMessageConversation = function(obj) {
      return axios(
        {
          method: 'post',
          url: businessServiceUrl + '/business/' + obj.business_name + '/user/' + obj.user,
          headers: {'Content-Type': 'application/json'},
          data: obj
        }
      );
    }

    return {
      getMessagesConversation : getMessagesConversation,
      addMessageConversation : addMessageConversation
    }
  }();
  
  module.exports = ConversationsAPI;