var axios = require ('axios');
const intentServiceUrl = process.env.REACT_APP_BACK_URL.trim() + '/intent';

var IntentAPI = function (){

    var getIntentFromText = function(text) {
        return axios(
        {
          method: 'post',
          url: intentServiceUrl,
          headers: {'Content-Type': 'application/json'},
          data: {
            message: text
          }
        }
        );

    }
    return {
      getIntentFromText : getIntentFromText
    }
}();

module.exports = IntentAPI;