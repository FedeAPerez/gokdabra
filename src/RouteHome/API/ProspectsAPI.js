import axios from 'axios';
const businessServiceUrl = process.env.REACT_APP_BACK_URL.trim() + '/business/prospect';

export class ProspectsAPI {

    static postProspectFrom(id_track, mail) {
        return axios({
            method: 'post',
            url: businessServiceUrl,
            headers: {'Content-Type': 'application/json'},
            data: {
              contact_mail: mail
            }
        });

    }
}

export default ProspectsAPI;