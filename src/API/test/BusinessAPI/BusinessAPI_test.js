var BusinessAPI = require('../../src/BusinessAPI/');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();
var expect = chai.expect;

process.on('unhandledRejection', (err, p) => {
  console.error('unhandledRejection', err.stack, p)
})

describe('BusinessAPI', function() {
  describe('Get Business', function() {
    it('Debería retornar un negocio de KDABRA\n\t - Con propiedad business_name\n\t - Respondiendo con status_code 200',
      (done) => {
        BusinessAPI.getBusinessByName({
          "business_name":"kdabra"
        }).should.be.fulfilled.then((res) => {
          res.data.status_code.should.equal(200);
        }).should.notify(done);
      }
    );

    it('En caso de que no exista el negocio\n\t - Con propiedad business_name\n\t - Respondiendo con status_code 400',
      (done) => {
        BusinessAPI.getBusinessByName({
          "business_name":"kdabrakobramonster"
        }).should.be.fulfilled.then((res) => {
          res.data.status_code.should.equal(400);
        }).should.notify(done);
      }
    );
  });

  describe('Add Business', function() {
    it('Debería agregar un nuevo negocio a KDABRA\n\t - Con propiedad business_name y contact_mail\n\t - Respondiendo con status_code 200',
        (done) => {
          BusinessAPI.addBusiness(
          {
            "business_name":"k2323do2asd3bra",
            "contact_mail":"marss2a23asd25i250m@mail.2"
          }).should.be.fulfilled.then((res) => {
            res.data.status_code.should.equal(200);
          }).should.notify(done);
        }
    );

    it('No debería agregar un nuevo negocio si ya existe el mail\n\t - Con propiedad business_name y contact_mail\n\t - Respondiendo con status_code 400 y status_message BUSINESSMAILEXISTENT',
      (done) => {
        BusinessAPI.addBusiness(
        {
          "business_name":"k1d0011232obra",
          "contact_mail":"elschipibarijo@mail.com"
        }).should.be.fulfilled.then((res) => {
          res.data.status_code.should.equal(400);
          res.data.status_message.should.equal("BUSINESSMAILEXISTENT");
        }).should.notify(done);
      }
    );

    it('No debería agregar un nuevo negocio si ya existe el nombre de usuario\n\t - Con propiedad business_name y contact_mail\n\t - Respondiendo con status_code 400 y status_message BUSINESSNAMEEXISTENT',
      (done) => {
        BusinessAPI.addBusiness(
        {
          "business_name":"kdobra",
          "contact_mail":"11elch15i0SSoSpiaasdbarijo@mail.com"
        }).should.be.fulfilled.then((res) => {
          res.data.status_code.should.equal(400);
          res.data.status_message.should.equal("BUSINESSNAMEEXISTENT");
        }).should.notify(done);
      }
    );

  });
    
});