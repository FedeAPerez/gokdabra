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
                'business_name':'default',
                'message':'<h3>Escribí tu mensaje o selecciona alguna de las opciones para comenzar.</h3>',
                'message_tip':{
                    'message': 'Quiero aprender a usar KDABRA',
                    'intent':'onboarding_kdabra'
                },
                'class_used':'left-titulo-linea',
                'intent':'welcome',
                'scroll':'true',
                'response_expected':{
                    'type':'text_input'
                }
            },
            {
                'id_message':'msg_use_input',
                'message_title':'',
                'business_name':'default',
                'message':'<h3>Dentro de poco vas a poder interactuar con los negocios de la misma forma que con tus amigos. <b>¡Estamos trabajando en esto!</b></h3>',
                'class_used':'left-linea',
                'intent':'text_input',
                'scroll':'true',
                'response_expected':{
                    'type':'text_input'
                }
            },
            {
                'id_message':'msg_onboarding_kdabra',
                'message_title':'<h1>En pocos pasos te voy a enseñar lo necesario de <span class="kdabra-orange">KDABRA</span>.</h1>',
                'business_name':'default',
                'message':'<h3>Podés ingresar tanto mensajes en texto o usar los atajos que damos mediante botones.</h3>',
                'class_used':'left-titulo-linea',
                'intent':'onboarding_kdabra',
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
                'id_message':'msg_know_payments',
                'business_name':'doers',
                'message_title':'',
                'message':'<h3>Podés pagar con efectivo o Visa y MasterCard usando MercadoPago!</h3>',
                'class_used':'left-linea',
                'scroll':'true',
                'intent':'payments',
                'response_expected':{
                    'type':'text_input'
                }
            },
            {
                'id_message':'msg_talk_agent',
                'business_name':'default',
                'message_title':'',
                'message':'<h3>Dentro de poco te vas a poder comunicar con los representantes de las marcas y locales que más te gustan. <b>¡Estamos trabajando en esto!</b></h3>',
                'class_used':'left-linea',
                'scroll':'true',
                'intent':'talk_agent',
                'response_expected':{
                    'type':'text_input'
                }
            },
            {
                'id_message':'msg_map',
                'business_name':'doers',
                'message_title':'',
                'message':'<h3>¡No tenemos fronteras! &#x1F5FA Podés contactarte desde cualquier punto del país y vamos a interactuar con vos.</h3>',
                'class_used':'left-linea',
                'message_tip': {
                    'message':'Ver información de contacto.',
                    'intent':'contact'
                },
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
                'message':'<h3>Podés llamar en nuestro horario de atención <br />al <b>11-1111-2222</b></h3>',
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
        // Obteng el intent en caso de que sea un intento de text-input
        
        const isBusiness = p => p.business_name.toLowerCase() === id_business.toLowerCase();
        var messagesForBusiness = [];
        messagesForBusiness = this.messages.filter(isBusiness);

        const isIntent = p => p.intent === id_intent;
        var messageSelected = [];
        messageSelected = messagesForBusiness.filter(isIntent);

        if(messageSelected.length == 0) {
            return this.getMessageByIntent('default', id_intent);
        }

        return messageSelected[0];
    }
  }
  
  export default MessagesAPI