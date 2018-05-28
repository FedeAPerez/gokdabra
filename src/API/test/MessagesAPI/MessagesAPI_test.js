var MessagesAPI = require('../../src/MessagesAPI/');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();
var expect = chai.expect;

process.on('unhandledRejection', (err, p) => {
  console.error('unhandledRejection', err.stack, p)
})

describe('MessagesAPI', function() {
  describe('Get Message', function() {
    it('Debería retornar un mensaje de negocio de KDABRA\n\t'+
     ' - Con id_option'+
     ' - Respondiendo con propiedad id_message, message_title, message, class_used, id_business, sender_show, intent, scroll\n\t',
      (done) => {
        MessagesAPI.getMessageByIntent2({
          "id_business":"kdabra",
          "id_option":"contact"
        }).should.be.fulfilled.then((res) => {
          res.data.status_code.should.equal(200);
          res.data.should.have.property("id_message");
          res.data.should.have.property("message_title");
          res.data.should.have.property("message");
          res.data.should.have.property("class_used");
          res.data.should.have.property("id_business");
          res.data.should.have.property("sender_show");
          res.data.should.have.property("intent");
          res.data.should.have.property("scroll");
        }).should.notify(done);
      }
    );

  });

  describe('Get Message - Deprecated', function() {
    it('Debería retornar un mensaje de negocio de KDABRA escrito por usuario\n\t'+
     ' - Con id_option'+
     ' - Respondiendo con propiedad id_message, message_title, message, class_used, id_business, sender_show, intent, scroll\n\t',
        (done) => {
            MessagesAPI.getMessageByIntent(
                "doers",
                "contact"
            ).should.be.fulfilled.then((message) => {
                message.should.have.property("id_message");
                message.should.have.property("message_title");
                message.should.have.property("message");
                message.message.should.equal("Podés contactarte con nosotros por temas relacionados a KDABRA, usando el mail hola@gokdabra.com");
                message.should.have.property("class_used");
                message.should.have.property("business_name");
                message.should.have.property("sender_show");
                message.should.have.property("intent");
                message.should.have.property("scroll");
            })
            .should.notify(done);
      }
    );
    it('Debería retornar un mensaje de negocio de KDABRA configurado por base\n\t'+
     ' - Con id_option'+
     ' - Respondiendo con propiedad id_message, message_title, message, class_used, id_business, sender_show, intent, scroll\n\t',
        (done) => {
            MessagesAPI.getMessageByIntent(
                "doers",
                "map"
            ).should.be.fulfilled.then((message) => {
                message.should.have.property("id_message");
                message.should.have.property("message_title");
                message.should.have.property("message");
                message.message.should.equal("<h3>¡No tenemos fronteras! &#x1F5FA Podés contactarte desde cualquier punto del país y vamos a interactuar con vos.</h3>");
                message.should.have.property("class_used");
                message.should.have.property("business_name");
                message.should.have.property("sender_show");
                message.should.have.property("intent");
                message.should.have.property("scroll");
            })
            .should.notify(done);
      }
    );
  });
    
});