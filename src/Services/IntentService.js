import axios from 'axios';
const intentServiceUrl = 'http://back.gokdabra.com/intent';

export class IntentService {

    static getIntentFromText(text) {
        axios.post(
            intentServiceUrl,
            {
              'message':text
            },
            )
          .then(function (response) {
            console.log(response);
            return response;
          })
          .catch(function (error) {
            console.log(error);
          });
    }
}

export default IntentService;