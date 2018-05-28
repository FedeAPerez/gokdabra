var ProspectsAPI = require('./ProspectsAPI');

ProspectsAPI.postProspectFrom("vergamarico", "footer-hint").then((res) => {
    console.log(res.status);
})