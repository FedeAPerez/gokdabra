// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
var axios = require('axios');
const meliServiceUrl = 'https://api.mercadolibre.com/items/';
const meliBackDexter = process.env.REACT_APP_BACK_URL.trim() + '/meli/dexter/shoes';

var MeliAPI = function(){
    var getInfoByMLA = function(mla) {
      return axios(
          {
            method: 'get',
            url: meliServiceUrl+mla,
            headers: {'Content-Type': 'application/json'}
          }
        );
    }

    var getInfoByDat = function(stack) {
      return axios(
          {
            method: 'post',
            url: meliBackDexter,
            headers: {'Content-Type': 'application/json'},
            data: {
              talle: stack.talle,
              max_price: stack.max_price,
              gender : stack.gender
            }
          }
        );
    }
    return {
      getInfoByDat : getInfoByDat,
      getInfoByMLA : getInfoByMLA
    }
}();
  
module.exports = MeliAPI;