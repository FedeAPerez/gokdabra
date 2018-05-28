'use strict';
var axios = require ('axios');
const businessOptionsServiceUrl = process.env.REACT_APP_BACK_URL.trim() + '/optionsbusiness';

var  OptionsBusinessAPI = function() {

    var _getOptionsByBusiness = function(obj) {
      return axios(
          {
            method: 'get',
            url: businessOptionsServiceUrl + '/' + obj.id_business,
            headers: {'Content-Type': 'application/json'}
          }
      );
    };

    var _getMessageByBusinessOption = function(obj, resolve, reject) {
      if(resolve && reject) {

      }
      else {
        return axios(
            {
              method: 'get',
              url: businessOptionsServiceUrl + '/' + obj.id_business + '/' + obj.id_option,
              headers: {'Content-Type': 'application/json'}
            }
        );
      }
    };

    var _saveOptionForBusiness = function(obj) {
      return axios(
        {
          method: 'post',
          url: businessOptionsServiceUrl + '/' + obj.id_business + '/' + obj.id_option,
          headers: {'Content-Type': 'application/json'},
          data: obj
        }
      );
    }

    return {
      getOptionsByBusiness : _getOptionsByBusiness,
      getMessageByBusinessOption : _getMessageByBusinessOption,
      saveOptionForBusiness : _saveOptionForBusiness
    }
  }();
  
  module.exports = OptionsBusinessAPI;