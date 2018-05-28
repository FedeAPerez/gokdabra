'use strict';
var axios = require ('axios');
const businessServiceUrl = process.env.REACT_APP_BACK_URL.trim() + '/business';

var  BusinessAPI = function() {
    var _getBusiness = function() {
      var business = [
      { number: 1, business_name: "Doers", },
      { number: 2, business_name: "KDABRA" },
      { number: 3, business_name: "eColitas" },
      { number: 4, business_name: "fotoflasheventos" },
      { number: 5, business_name: "dexter" },
      { number: 6, business_name: "prune" }
      ]
      return business;
    }

    var all = function() {
      return _getBusiness;
    }

    var getBusinessByName2 = function(name) {
      return axios(
          {
            method: 'get',
            url: businessServiceUrl+'/'+name,
            headers: {'Content-Type': 'application/json'}
          }
        );
    }

    var getBusinessByName = function(name) {
      return _getBusiness().find(function(business){
        return business.business_name.toLowerCase() == name.toLowerCase();
      });
    }

    var getBusinessByEmail = function(obj) {
      return axios(
          {
            method: 'post',
            url: businessServiceUrl,
            headers: {'Content-Type': 'application/json'},
            data: obj
          }
        );
    }

    var addBusiness = function(obj) {
      return axios(
        {
          method: 'post',
          url: businessServiceUrl,
          headers: {'Content-Type': 'application/json'},
          data: obj
        }
      );
    }

    return {
      getBusinessByName : getBusinessByName,
      getBusinessByName2 : getBusinessByName2,
      addBusiness : addBusiness,
      all : all
    }
  }();
  
  module.exports = BusinessAPI;