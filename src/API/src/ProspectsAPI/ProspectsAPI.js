'use strict';
var axios = require('axios');
const businessServiceUrl = process.env.REACT_APP_BACK_URL.trim() + '/business/prospect';

var ProspectsAPI = function() {

    var postProspectFrom = function(id_track, mail) {
        return axios({
            method: 'post',
            url: businessServiceUrl,
            headers: {'Content-Type': 'application/json'},
            data: {
              contact_mail: mail
            }
        });

    }

    return {
        postProspectFrom : postProspectFrom
    }

}();

module.exports = ProspectsAPI;