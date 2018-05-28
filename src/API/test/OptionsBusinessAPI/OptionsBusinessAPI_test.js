var OptionsBusinessAPI = require('../../src/OptionsBusinessAPI/');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();
var expect = chai.expect;

process.on('unhandledRejection', (err, p) => {
  console.error('unhandledRejection', err.stack, p)
})

describe('OptionsBusinessAPI', function() {
  describe('Get Options', function() {
    it('Debería retornar todas las opciones de KDABRA para un negocio\n\t - Con id_business \n\t - Respondiendo con staus_code 200',
      (done) => {
        var obj = {};
        obj.id_business = "kdabra";

        OptionsBusinessAPI.getOptionsByBusiness(obj)
        .should.be.fulfilled.then((res) => {
          res.data.status_code.should.equal(200);
        }).should.notify(done);
      }
    );

    it('Debería retornar todas las opciones de KDABRA para un negocio\n\t - Con id_business \n\t - Deberían ser 4 opciones para KDABRA en una lista llamada options_list',
      (done) => {
        var obj = {};
        obj.id_business = "kdabra";
        
        OptionsBusinessAPI.getOptionsByBusiness(obj)
        .should.be.fulfilled.then((res) => {
          res.data.should.have.property("options_list");
          res.data.options_list.length.should.equal(4);
        }).should.notify(done);
      }
    );

    it('Debería retornar todas las opciones de KDABRA para un negocio\n\t - Con id_business \n\t - Cada opción debería tener un show_message',
      (done) => {
        var obj = {};
        obj.id_business = "kdabra";
        
        OptionsBusinessAPI.getOptionsByBusiness(obj)
        .should.be.fulfilled.then((res) => {
          res.data.options_list.length.should.equal(4);
          res.data.options_list.forEach(element => {
            element.should.have.property("id_option");
            element.should.have.property("show_message");
          });
        }).should.notify(done);
      }
    );

    it('Debería poder modificar una opción para un negocio\n\t - Con id_business ,id_option y show_message \n\t - debería responder con status_code 200',
      (done) => {
        var obj = {};
        obj.id_business = "kdabra";
        obj.id_option = "contact";
        obj.show_message = "Te podés contactar al 11-2222-3334";
        
        OptionsBusinessAPI.saveOptionForBusiness(obj)
        .should.be.fulfilled.then((res) => {
          res.data.status_code.should.equal(200);
        }).should.notify(done);
      }
    );

  });
    
});