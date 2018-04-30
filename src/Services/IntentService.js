const intentServiceUrl = 'http://back.gokdabra.com/intent';

export class IntentService {

    static getIntentFromText(text) {
        var serviceBody = {};
        serviceBody.message = text;
        return fetch(intentServiceUrl, {
            'method': 'post',
            'headers': { 'Content-Type': 'application/json' },
            'body': serviceBody
        })
            .then((response) => response.json());
    }
}

export default IntentService;