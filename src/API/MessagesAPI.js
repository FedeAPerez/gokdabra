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
                'response_expected':{
                    'type':'text_input'
                }
            },
            {
                'id_message':'msg_opening_hours',
                'business_name':'doers',
                'message_title':'<h1>¡Hola!</h1>',
                'message':'<h3>De 9 a 18..</h3>',
                'class_used':'left-titulo-linea',
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
                'intent':'map',
                'response_expected':{
                    'type':'text_input'
                },
            },
            {
                'id_message':'msg_contact',
                'business_name':'doers',
                'message_title':'<h1>¡Hola!</h1>',
                'message':'<h3>Llama al 22333.</h3>',
                'class_used':'left-titulo-linea',
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