// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const MessagesAPI = {
    business: [
      { number: 1, business_name: "Doers", color: "#34495e" },
      { number: 2, business_name: "KDABRA", color: "#e74c3c" }
    ],
    messages: [
            {
                'id_message':'msg_welcome',
                'message_title':'<h1>¡Hola!</h1>',
                'business_name':'pepe',
                'message':'<h3>Escribí tu mensaje o selecciona alguna de las opciones para comenzar.</h3>',
                'class_used':'left-titulo-linea',
                'intent':'welcome',
                'scroll':'true',
                'response_expected':{
                    'type':'text_input'
                }
            },
            {
                'id_message':'msg_opening_hours',
                'business_name':'doers',
                'message_title':'',
                'message':'<h3>Nuestro horario es de 9 a 18 hs de lunes a viernes. Sábados y domingos de 10 a 20hs.</h3>',
                'class_used':'left-linea',
                'scroll':'true',
                'intent':'opening_hours',
                'response_expected':{
                    'type':'text_input'
                }
            },
            {
                'id_message':'msg_map',
                'business_name':'doers',
                'message_title':'<h1>¡Hola!</h1>',
                'message':'<h3>Estamos en tesei.</h3>',
                'class_used':'left-titulo-linea',
                'scroll':'true',
                'intent':'map',
                'response_expected':{
                    'type':'text_input'
                },
            },
            {
                'id_message':'msg_contact',
                'business_name':'doers',
                'message_title':'',
                'message':'<h3>Podés llamar en nuestro horario de atención al <b>11-1111-2222</b></h3>',
                'message_tip': {
                    'message':'Ver el horario de atención.',
                    'intent':'opening_hours'
                },
                'class_used':'left-linea',
                'scroll':'true',
                'intent':'contact',
                'response_expected':{
                    'type':'text_input'
                }
            }
        
    ],
    all: function() { return this.business},
    getMessage: function(business_name_param) {
      return this.messages[0];
    },
    getMessageByIntent: function(id_business, id_intent) {
        const isBusiness = p => p.business_name.toLowerCase() === id_business.toLowerCase();
        var messagesForBusiness = [];
        messagesForBusiness = this.messages.filter(isBusiness);

        const isIntent = p => p.intent === id_intent;
        var messageSelected = [];
        messageSelected = messagesForBusiness.filter(isIntent);
        
        return messageSelected[0];
    }
  }
  
  export default MessagesAPI