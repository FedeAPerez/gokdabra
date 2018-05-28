var OptionsAPI = require('../../src/OptionsAPI/');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();
var expect = chai.expect;

process.on('unhandledRejection', (err, p) => {
  console.error('unhandledRejection', err.stack, p)
})

describe('OptionsAPI', function() {
  describe('Get Options', function() {
    it('Debería retornar todas las opciones de KDABRA\n\t - Respondiendo con staus_code 200',
      (done) => {
        OptionsAPI.getAllOptions()
        .should.be.fulfilled.then((res) => {
          res.data.status_code.should.equal(200);
        }).should.notify(done);
      }
    );

    it('Debería retornar todas las opciones de KDABRA\n\t - Respondiendo en un objeto options_list',
      (done) => {
        OptionsAPI.getAllOptions()
        .should.be.fulfilled.then((res) => {
          res.data.should.have.property("options_list");
        }).should.notify(done);
      }
    );

    it('Debería retornar todas las opciones de KDABRA\n\t - Deberían ser 4 opciones, cada una con id_option y show_message',
      (done) => {
        OptionsAPI.getAllOptions()
        .should.be.fulfilled.then((res) => {
            res.data.options_list.length.should.equal(4);
            res.data.options_list.forEach(element => {
                element.should.have.property("id_option");
                element.should.have.property("show_message");
            });
        }).should.notify(done);
      }
    );

  });
    
});