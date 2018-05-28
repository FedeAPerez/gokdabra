// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.

import MeliAPI from '../MeliAPI';

var MessagesAPI = function(){
    var messages = [
            {
                'id_message':'msg_welcome',
                'message_title':'',
                'business_name':'default',
                'message':'<h3>¡Hola! Te voy a asistir desde KDABRA, mi misión es ayudarte a encontrar los mejores productos y ofertas de Dexter. <b>¿Querés conocerlas?</b></h3>',
                'class_used':'left-linea',
                'sender_show':'KDABRA',
                'intent':'welcome',
                'scroll':'true',
                'response_expected':{
                    'type':'text_input'
                }
            },
            {
                'id_message':'msg_anything',
                'message_title':'',
                'business_name':'default',
                'message':'<h3>Ups... Por el momento únicamente te puedo ayudar a buscar zapatillas, próximamente me van a sumar funciones.</h3>',
                'class_used':'left-linea',
                'sender_show':'KDABRA',
                'intent':'anything_else',
                'scroll':'true',
                'response_expected':{
                    'type':'text_input'
                }
            },
            {
                'id_message':'msg_wanna_buy_sex',
                'message_title':'',
                'business_name':'default',
                'message':'<h3>Por el momento te puedo ayudar a encontrar las mejores <b>zapatillas</b> &#x1f45f. ¿Serían para hombre o mujer?</h3>',
                'class_used':'left-linea',
                'sender_show':'KDABRA',
                'intent':'wanna_buy',
                'scroll':'true',
                'response_expected':{
                    'type':'text_input'
                }
            },
            {
                'id_message':'msg_wanna_buy_size',
                'message_title':'',
                'business_name':'default',
                'message':'<h3>Perfecto, ¿Cuál es tu talle?</h3>',
                'class_used':'left-linea',
                'sender_show':'KDABRA',
                'intent':'wanna_buy_sex',
                'scroll':'true',
                'response_expected':{
                    'type':'text_input'
                }
            },
            {
                'id_message':'msg_wanna_buy_price_range',
                'message_title':'',
                'business_name':'default',
                'message':'<h3>¿Hasta cuánto te gustaría pagar? &#x1F911</h3>',
                'class_used':'left-linea',
                'sender_show':'KDABRA',
                'intent':'wanna_buy_size',
                'scroll':'true',
                'response_expected':{
                    'type':'text_input'
                }
            },
            {
                'id_message':'msg_wanna_buy_complete',
                'message_title':'',
                'business_name':'default',
                'message':'<h3>Perfecto! Creo que con esto puedo buscar las zapatillas!</h3>',
                'class_used':'left-linea',
                'sender_show':'KDABRA',
                'call_meli':'true',
                'next_message':'msg_product',
                'intent':'wanna_buy_price_range',
                'scroll':'true',
                'response_expected':{
                    'type':'text_input'
                }
            },
            {
                'id_message':'msg_product',
                'message_title':'',
                'business_name':'default',
                'class_used':'left-product',
                'sender_show':'MercadoLibre',
                'type': {
                    'id':'meli_item'
                },
                'intent':'wanna_buy_complete',
                'scroll':'true',
                'response_expected':{
                    'type':'text_input'
                }
            },
            {
                'id_message':'msg_thanks_to_user',
                'message_title':'',
                'message':'<h3>¡Genial! Espero haber sido de ayuda &#x1F603</h3>',
                'business_name':'default',
                'class_used':'left-product',
                'sender_show':'KDABRA',
                'intent':'wanna_buy_completed',
                'scroll':'true',
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
        
    ]

    var getFirstMessage = function() {
      return messages[0];
    }

    var getMeliMessage = function(stack) {
        var that = this;
        return new Promise(function(resolve, reject) {
            const isMessage = p => p.id_message == "msg_product";

            var message = that.messages.find(isMessage);
            var stackClean = {};
            var thatMessage = {};
            thatMessage.message = message;

            // Obtención de talle para la búsqueda
            var talle = stack.find(elem => elem.intent == "wanna_buy_size").entities.find(p => p.id == 'sys-number').value;
            console.log("Talle " + talle);
            stackClean.talle = talle;
            // Obtención de genero
            var gender = stack.find(elem => elem.intent == "wanna_buy_sex").entities[0].id;
            console.log("gender " + gender);
            stackClean.gender = gender;

            var max_price = stack.find(elem => elem.intent == "wanna_buy_price_range").entities[0].value;
            console.log("max_price " + max_price);
            stackClean.max_price = max_price;
            MeliAPI.getInfoByData(stackClean)
            .then(function(res) {
                console.log(res);
                thatMessage.message.value = "MLA";
                thatMessage.message.meli_ob = {};
                thatMessage.message.meli_ob.title = res.data.data.title;
                thatMessage.message.meli_ob.available_quantity = res.data.data.available_quantity;
                thatMessage.message.meli_ob.price = res.data.data.price;
                thatMessage.message.meli_ob.permalink = res.data.data.permalink;
                thatMessage.message.meli_ob.thumbnail = res.data.data.thumbnail;
                thatMessage.message.meli_ob.picture_link = res.data.data.pictures[0].url;
                resolve(thatMessage.message);
            })
            .catch(function(err) {
                reject(err);
            });
        });
    }

    var getMessageById = function(id_message) {
        var that = this;
        return new Promise(function(resolve, reject) {
            const isMessage = p => p.id_message == id_message;

            var message = that.messages.find(isMessage);
            var thatMessage = {};
            thatMessage.message = message;

            resolve(thatMessage.message);
        });
    }
    var getMessageByIntent = function(id_business, id_intent) {
        // Obteng el intent en caso de que sea un intento de text-input

        const isBusiness = p => p.business_name.toLowerCase() === id_business.toLowerCase();
        var messagesForBusiness = [];
        messagesForBusiness = messages.filter(isBusiness);

        const isIntent = p => p.intent === id_intent;
        var messageSelected = [];
        messageSelected = messagesForBusiness.filter(isIntent);

        if(messageSelected.length == 0) {
            return getMessageByIntent('default', id_intent);
        }

        return messageSelected[0];
    }

    return {
        getMessageByIntent : getMessageByIntent,
        getMessageById : getMessageById,
        getFirstMessage : getFirstMessage
    }
}();
  
module.exports = MessagesAPI;