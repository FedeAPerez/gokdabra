// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
import axios from 'axios';

const trackServiceURL = process.env.REACT_APP_BACK_URL.trim() + '/track';

const TrackAPI = {
    getInfoByData: function(stack) {
      return axios(
          {
            method: 'post',
            url: trackServiceURL,
            headers: {'Content-Type': 'application/json'},
            data: {
              stack
            }
          }
        );
    }
  }
  
export default TrackAPI;