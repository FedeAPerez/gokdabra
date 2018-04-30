import axios from 'axios';
const intentServiceUrl = 'http://back.gokdabra.com/intent';

export class IntentService {

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

export default IntentService;