import axios from 'axios';
const businessServiceUrl = 'http://back.gokdabra.com/business';

export class ProspectsAPI {

    static postProspectFrom(id_track, mail) {
        console.log(mail);
        return axios(
        {
          method: 'post',
          url: businessServiceUrl,
          headers: {'Content-Type': 'application/json'},
          data: {
            contact_mail: mail
          }
        }
        );

    }
}

export default ProspectsAPI;