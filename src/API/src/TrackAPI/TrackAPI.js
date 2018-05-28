// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
var axios = require('axios');

const trackServiceURL = process.env.REACT_APP_BACK_URL.trim() + '/track';

var TrackAPI = function(){
  
    var postDataToTrack = function(stack) {
      return axios(
          {
            method: 'post',
            url: trackServiceURL,
            headers: {'Content-Type': 'application/json'},
            data: {
              stack: stack
            }
          }
        );
    }

    return {
      postDataToTrack : postDataToTrack
    }
}();
  
module.exports = TrackAPI;