'use strict';
var axios = require ('axios');
const optionsServiceUrl = process.env.REACT_APP_BACK_URL.trim() + '/options';

var  OptionsAPI = function() {

    var _getAllOptions = function() {
      return axios(
        {
          method: 'get',
          url: optionsServiceUrl,
          headers: {'Content-Type': 'application/json'}
        }
      );
    };

    return {
      getAllOptions : _getAllOptions
    }
  }();
  
  module.exports = OptionsAPI;