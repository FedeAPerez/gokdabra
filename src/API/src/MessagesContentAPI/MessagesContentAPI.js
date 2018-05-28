'use strict'
var MessagesContentAPI = function () {
    var getMessageContentFromId = function getMessageContentFromId(id_message_content) {
        switch(id_message_content) {
            case "footer-hint":
                return "Ingresa tu mail para sumarte";
            break;
            case "company-name":
                return "¡Hecho con &#x2764 para el mundo! - 2018";
            break;
            case "registration-ok":
                return "¡Estás registrado! &#x1F44c Dentro de poco te va a llegar un mail para la creación de tu bot.";
            break;
            default:
                return "not find";
            break;
        }        
    };

    return {
        getMessageContentFromId : getMessageContentFromId
    }
    
}();

module.exports = MessagesContentAPI;