import axios from 'axios';
const intentServiceUrl = 'http://back.gokdabra.com/intent';

export class IntentService {

    static getIntentFromText(text) {
        var bodyFormData = new FormData();
        bodyFormData.set('message', text);
        axios.post(
            intentServiceUrl,
            bodyFormData,
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