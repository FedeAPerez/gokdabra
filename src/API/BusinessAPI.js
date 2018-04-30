// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const apiVersion = '1.0.4';
const BusinessAPI = {
    business: [
      { number: 1, business_name: "Doers", color: "#34495e", version : apiVersion},
      { number: 2, business_name: "KDABRA", color: "#e74c3c", version : apiVersion}
    ],
    all: function() { return this.business},
    getBusinessByName: function(business_name_param) {
      const isBusiness = p => p.business_name.toLowerCase() === business_name_param.toLowerCase();
      return this.business.find(isBusiness);
    }
  }
  
  export default BusinessAPI