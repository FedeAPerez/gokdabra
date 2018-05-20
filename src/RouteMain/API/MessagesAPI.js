// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.

import MeliAPI from './MeliAPI';

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
                'message_title':'',
                'business_name':'default',
                'message':'<h3><b>¡Hola! ¿Cómo estás?</b> Soy el asistente de KDABRA y estoy acá para ayudarte. Escribí tu mensaje para comenzar.</h3>',
                'message_tip':{
                    'message': '¿Es tu primera vez usando KDABRA? Hacé click aquí para aprender a usarlo &#x1F601',
                    'intent':'onboarding_kdabra',
                    'should_dissapear':'true',
                    'show_message': '¡Quiero aprender a usar KDABRA!'
                },
                'class_used':'left-linea',
                'sender_show':'KDABRA',
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
                'sender_show':'KDABRA',
                'message':'<h3>También te quería comentar que al hablar por KDABRA te ahorraste 8 minutos de tu tiempo!</h3>',
                'message_tip':{
                    'message': '¡Compartir en las redes!',
                    'intent':'share_kdabra',
                    'show_message': '¡Quiero compartir en las redes!'
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
                'sender_show':'KDABRA',
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
                'sender_show':'KDABRA',
                'response_expected':{
                    'type':'text_input'
                }
            },
            {
                'id_message':'msg_onboarding_kdabra_2',
                'message':"Podés enviar mensajes como lo harías con tus familiares y amigos; recibiendo respuestas al instante.",
                'business_name':'default',
                'message_title':'',
                'sender_show':'KDABRA',
                'class_used':'left-linea',
                'intent':'onboarding_kdabra_2',
                'next_message':'msg_onboarding_kdabra_3',
                'scroll':'false',
                'response_expected':{
                    'type':'text_input'
                }
            },
            {
                'id_message':'msg_onboarding_kdabra_3',
                'message':"Los mensajes que se identifiquen como Kdabra fueron enviados por nuestra inteligencia artificial para ahorrarte tiempo.",
                'business_name':'default',
                'message_title':'',
                'sender_show':'KDABRA',
                'class_used':'left-linea',
                'intent':'onboarding_kdabra_3',
                'scroll':'true',
                'response_expected':{
                    'type':'text_input'
                }
            },
            {
                'id_message':'msg_opening_hours',
                'business_name':'doers',
                'sender_show':'KDABRA',
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
                'sender_show':'KDABRA',
                'message':'<h3>No tenemos horario fijo, pero podés agendar una visita enviándonos un mensaje a nuestro teléfono de contacto. &#x231A</h3>',
                'class_used':'left-linea',
                'message_tip': {
                    'message':'Ver información de contacto.',
                    'intent':'contact',
                    'should_dissapear':'true',
                    'show_message': '¿Cómo me contacto con ustedes?'
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
                'sender_show':'KDABRA',
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
                'sender_show':'KDABRA',
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
                'sender_show':'KDABRA',
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
                'sender_show':'KDABRA',
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
                'sender_show':'KDABRA',
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
                'sender_show':'KDABRA',
                'message_tip': {
                    'message':'Ver información de contacto.',
                    'intent':'contact',
                    'should_dissapear':'true',
                    'show_message': '¿Cuál es otro medio de contacto?'
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
                'sender_show':'KDABRA',
                'message':'<h3>Estamos en Santos Lugares! &#x1F5FA</h3>',
                'class_used':'left-linea',
                'message_tip': {
                    'message':'Ver información de contacto.',
                    'intent':'contact',
                    'should_dissapear':'true',
                    'show_message': '¿Cómo me contacto con ustedes?'
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
                'sender_show':'KDABRA',
                'message':'<h3>¡Somos de Morón, pero damos servicio desde Capital a Luján! &#x1F5FA</h3>',
                'class_used':'left-linea',
                'message_tip': {
                    'message':'Ver información de contacto.',
                    'intent':'contact',
                    'should_dissapear':'true',
                    'show_message': '¿Cuál es otro medio de contacto?'
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
                'sender_show':'KDABRA',
                'message':'<h3>Podés llamar en nuestro horario de atención <br />al <b>11-1111-2222</b></h3>',
                'message_tip': {
                    'message':'Ver el horario de atención.',
                    'intent':'opening_hours',
                    'should_dissapear':'true',
                    'show_message': '¿En qué horarios trabajan?'
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
                'sender_show':'KDABRA',
                'message':'<h3>Podés enviar un WhatsApp <br />al <b>11-5161-3672</b></h3>',
                'message_tip': {
                    'message':'Ver el horario de atención.',
                    'intent':'opening_hours',
                    'should_dissapear':'true',
                    'show_message': '¿Cuáles son sus horarios de atención?'
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
                'sender_show':'KDABRA',
                'message':'<h3>Podés enviar un WhatsApp <br />al <b>11-3454-8720</b></h3>',
                'message_tip': {
                    'message':'Ver el horario de atención.',
                    'intent':'opening_hours',
                    'should_dissapear':'true',
                    'show_message': '¿Cuál es su horario de atención?'
                },
                'class_used':'left-linea',
                'scroll':'true',
                'intent':'contact',
                'response_expected':{
                    'type':'text_input'
                }
            },
            {
                'id_message':'msg_start_intro',
                'business_name':'ecolitas',
                'message_title':'',
                'sender_show':'KDABRA',
                'next_message':'msg_start_hook',
                'message':'<h3>Nos preocupamos por la salud y bienestar de los infantes. Por eso creamos eColitas, dándoles confort y protección en su higiene.</h3>',
                'class_used':'left-linea',
                'scroll':'true',
                'intent':'start',
                'response_expected':{
                    'type':'text_input'
                }
            },
            {
                'id_message':'msg_start_hook',
                'business_name':'ecolitas',
                'message_title':'',
                'sender_show':'KDABRA',
                'next_message':'msg_start_product',
                'message':'<h3>Utilizamos telas certificadas internacionalmente con protección solar para las diferentes etapas de tu hijo... por eso te ofrecemos este producto!</h3>',
                'class_used':'left-linea',
                'scroll':'true',
                'intent':'start_hook',
                'response_expected':{
                    'type':'text_input'
                }
            },
            {
                'id_message':'msg_start_product',
                'business_name':'ecolitas',
                'message_title':'',
                'sender_show':'MercadoLibre',
                'type': {
                    'id':'meli_item',
                    'value':'MLA678733469'
                },
                'message':'',
                'class_used':'left-product',
                'scroll':'true',
                'intent':'start_product',
                'response_expected':{
                    'type':'text_input'
                }
            },
            {
                'id_message':'msg_ask_review',
                'business_name':'default',
                'intent':'give_review',
                'message_title':'',
                'sender_show':'KDABRA',
                'message':'¿Qué te parece el producto que acabas de ver?',
                'class_used':'left-linea',
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
        var that = this;
        return new Promise(function(resolve, reject) {
            const isMessage = p => p.id_message == id_message;

            var message = that.messages.find(isMessage);
            var thatMessage = {};
            thatMessage.message = message;

            if(message.type && message.type.id == 'meli_item') {
                MeliAPI.getInfoByMLA(message.type.value)
                .then(function(res) {
                    thatMessage.message.meli_ob = {};
                    thatMessage.message.meli_ob.title = res.data.title;
                    thatMessage.message.meli_ob.available_quantity = res.data.available_quantity;
                    thatMessage.message.meli_ob.price = res.data.price;
                    thatMessage.message.meli_ob.permalink = res.data.permalink;
                    thatMessage.message.meli_ob.thumbnail = res.data.thumbnail;
                    thatMessage.message.meli_ob.picture_link = res.data.pictures[0].url;
                    resolve(thatMessage.message);
                })
                .catch(function(err) {
                    reject(err);
                });
            }
            else {
                resolve(thatMessage.message);
            }
        });
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
  
  export default MessagesAPI;