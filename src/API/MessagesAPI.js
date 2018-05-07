// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const MessagesAPI = {
    business: [
      { number: 1, business_name: "Doers", color: "#34495e" },
      { number: 2, business_name: "KDABRA", color: "#e74c3c" },
      { number: 3, business_name: "eColitas", color: "#2ecc71" },
        { number: 4, business_name: "fotoflasheventos", color: "#2ecc71" }
    ],
    messages: [
            {
                'id_message':'msg_welcome',
                'message_title':'<h1>¡Hola! ¿Cómo estás?</h1>',
                'business_name':'default',
                'message':'<h3>Escribí tu mensaje o selecciona alguna de las opciones para comenzar.</h3>',
                'message_tip':{
                    'message': '¿Es tu primera vez usando KDABRA? Hacé click &#x1F601',
                    'intent':'onboarding_kdabra',
                    'should_dissapear':'true'
                },
                'class_used':'left-titulo-linea',
                'intent':'welcome',
                'scroll':'true',
                'response_expected':{
                    'type':'text_input'
                }
            },
            {
                'id_message':'msg_thanks',
                'message_title':'<h1>¡Gracias a vos!</h1>',
                'business_name':'default',
                'message':'<h3>También te quería comentar que al hablar por KDABRA te ahorraste 8 minutos de tu tiempo!</h3>',
                'message_tip':{
                    'message': '¡Compartir en las redes!',
                    'intent':'share_kdabra'
                },
                'class_used':'left-titulo-linea',
                'intent':'thanks',
                'scroll':'true',
                'response_expected':{
                    'type':'text_input'
                }
            },
            {
                'id_message':'msg_use_input',
                'message_title':'',
                'business_name':'default',
                'message':'<h3>Dentro de poco vas a poder interactuar con los negocios de la misma forma que con tus amigos. <b>¡Estamos trabajando en esto! &#x1F468</b></h3>',
                'class_used':'left-linea',
                'intent':'text_input',
                'scroll':'true',
                'response_expected':{
                    'type':'text_input'
                }
            },
            {
                'id_message':'msg_onboarding_kdabra',
                'message':"<span class='kdabra-orange'>KDABRA</span> es la herramienta que viene a cambiar la comunicación entre las marcas que amas y vos. &#x1F60D</h1>",
                'business_name':'default',
                'message_title':'',
                'next_message':'msg_onboarding_kdabra_2',
                'class_used':'left-linea',
                'intent':'onboarding_kdabra',
                'scroll':'true',
                'response_expected':{
                    'type':'text_input'
                }
            },
            {
                'id_message':'msg_onboarding_kdabra_2',
                'message':"Podés enviar mensajes como lo harías con tus familiares y amigos; recibiendo respuestas al instante.",
                'business_name':'default',
                'message_title':'',
                'class_used':'left-linea',
                'intent':'onboarding_kdabra_2',
                'scroll':'false',
                'response_expected':{
                    'type':'text_input'
                }
            },
            {
                'id_message':'msg_opening_hours',
                'business_name':'doers',
                'message_title':'',
                'message':'<h3>Nuestro horario es de 9 a 18 hs de lunes a viernes. Sábados y domingos de 10 a 20hs. &#x231A</h3>',
                'class_used':'left-linea',
                'scroll':'true',
                'intent':'opening_hours',
                'response_expected':{
                    'type':'text_input'
                }
            },
            {
                'id_message':'msg_opening_hours',
                'business_name':'ecolitas',
                'message_title':'',
                'message':'<h3>No tenemos horario fijo, pero podés agendar una visita enviándonos un mensaje a nuestro teléfono de contacto. &#x231A</h3>',
                'class_used':'left-linea',
                'message_tip': {
                    'message':'Ver información de contacto.',
                    'intent':'contact',
                    'should_dissapear':'true'
                },
                'scroll':'true',
                'intent':'opening_hours',
                'response_expected':{
                    'type':'text_input'
                }
            },
            {
                'id_message':'msg_opening_hours',
                'business_name':'fotoflasheventos',
                'message_title':'',
                'message':'<h3>Operamos durante todo el día, y los fines de semana hacemos horario nocturno de 10pm a 2am.  &#x231A</h3>',
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
                'id_message':'msg_know_payments',
                'business_name':'ecolitas',
                'message_title':'',
                'message':'<h3>Podés pagar con efectivo o Visa y MasterCard usando MercadoPago! Sino mediante transferencia bancaria.</h3>',
                'class_used':'left-linea',
                'scroll':'true',
                'intent':'payments',
                'response_expected':{
                    'type':'text_input'
                }
            },
            {
                'id_message':'msg_know_payments',
                'business_name':'fotoflasheventos',
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
                'message':'<h3>Dentro de poco te vas a poder comunicar con los representantes de las marcas y locales que más te gustan. <b>¡Estamos trabajando en esto! &#x1f4bb</b></h3>',
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
                    'intent':'contact',
                    'should_dissapear':'true'
                },
                'scroll':'true',
                'intent':'map',
                'response_expected':{
                    'type':'text_input'
                },
            },
            {
                'id_message':'msg_map',
                'business_name':'ecolitas',
                'message_title':'',
                'message':'<h3>Estamos en San Martín &#x1F5FA</h3>',
                'class_used':'left-linea',
                'message_tip': {
                    'message':'Ver información de contacto.',
                    'intent':'contact',
                    'should_dissapear':'true'
                },
                'scroll':'true',
                'intent':'map',
                'response_expected':{
                    'type':'text_input'
                },
            },
            {
                'id_message':'msg_map',
                'business_name':'fotoflasheventos',
                'message_title':'',
                'message':'<h3>¡Somos de Morón, pero damos servicio desde Capital a Luján! &#x1F5FA</h3>',
                'class_used':'left-linea',
                'message_tip': {
                    'message':'Ver información de contacto.',
                    'intent':'contact',
                    'should_dissapear':'true'
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
                    'intent':'opening_hours',
                    'should_dissapear':'true'
                },
                'class_used':'left-linea',
                'scroll':'true',
                'intent':'contact',
                'response_expected':{
                    'type':'text_input'
                }
            },
            {
                'id_message':'msg_contact',
                'business_name':'ecolitas',
                'message_title':'',
                'message':'<h3>Podés enviar un WhatsApp <br />al <b>11-5161-3672</b></h3>',
                'message_tip': {
                    'message':'Ver el horario de atención.',
                    'intent':'opening_hours',
                    'should_dissapear':'true'
                },
                'class_used':'left-linea',
                'scroll':'true',
                'intent':'contact',
                'response_expected':{
                    'type':'text_input'
                }
            },
            {
                'id_message':'msg_contact',
                'business_name':'fotoflasheventos',
                'message_title':'',
                'message':'<h3>Podés enviar un WhatsApp <br />al <b>11-3454-8720</b></h3>',
                'message_tip': {
                    'message':'Ver el horario de atención.',
                    'intent':'opening_hours',
                    'should_dissapear':'true'
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
    getFirstMessage: function(business_name_param) {
      return this.messages[0];
    },
    getMessageById: function(id_message) {
        const isMessage = p => p.id_message == id_message;
        return this.messages.find(isMessage);
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