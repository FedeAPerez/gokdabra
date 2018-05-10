// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
import axios from 'axios';
const meliServiceUrl = 'https://api.mercadolibre.com/items/';

const MeliAPI = {
    getInfoByMLA: function(mla) {
      return axios(
          {
            method: 'get',
            url: meliServiceUrl+mla,
            headers: {'Content-Type': 'application/json'}
          }
        );
    }
  }
  
export default MeliAPI