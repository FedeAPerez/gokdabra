const MessagesContentAPI = {
    getMessageContentFromId: function(id_message_content) {
        switch(id_message_content) {
            case "footer-hint":
                return "Ingresa tu mail para sumarte";
            break;
            case "company-name":
                return "¡Hecho con &#x2764 para el mundo! - 2018";
            break;

        }
        
        
    }
}

export default MessagesContentAPI;