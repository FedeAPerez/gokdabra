import axios from 'axios';
const intentServiceUrl = process.env.REACT_APP_BACK_URL.trim() + '/intent';

export class IntentAPI {

    static getIntentFromText(text) {
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
}

export default IntentAPI;