// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const MessagesAPI = {
    business: [
      { number: 1, business_name: "Doers", color: "red" },
      { number: 2, business_name: "KDABRA", color: "green" }
    ],
    messages: [
        {
            'id_message':'msg_welcome',
            'message_title':'<h1>¡Hola!</h1>',
            'message':'<h3>Escribí tu mensaje o selecciona alguna de las opciones para comenzar.</h3>',
            'class_used':'left-titulo-linea',
            'intent':'welcome',
            'response_expected':{
                'type':'text_input'
            }
        }
    ],
    all: function() { return this.business},
    getMessage: function(business_name_param) {
      return this.messages[0];
    }
  }
  
  export default MessagesAPI