import * as firebase from 'firebase';
import ReactGA from 'react-ga';
import moment from 'moment';

class Conversation{

    updateConversation(messagePayload) {
        const conversation  = {
            user : {
                userName: messagePayload.sender.user_name
            },
            lastMessage :  {
                text : messagePayload.payload.text,
                date : messagePayload.payload.time
            },
            relationship : {
                text : 'Nuevo',
                color : 'orange'
            }
        }
        const conversationVisited  = {
            user : {
                userName: messagePayload.receiver.user_name
            },
            lastMessage :  {
                text : messagePayload.payload.text,
                date : messagePayload.payload.time
            },
            relationship : {
                text : 'Nuevo',
                color : 'orange'
            }
        }
        firebase.database().ref('/conversations/'+messagePayload.receiver.user_name+'/'+messagePayload.sender.user_name).set(conversation);
        firebase.database().ref('/conversations/'+messagePayload.sender.user_name+'/'+messagePayload.receiver.user_name).set(conversationVisited);
    }
    
    createNewMessage(messagePayload) {
        console.log(messagePayload);
        var time = moment().format('HH:mm');
        const messageOb = {
            text : messagePayload.payload.text,
            type : {
                category : messagePayload.category,
                isBot : messagePayload.isBot
            },
            time : time,
            sender : messagePayload.sender.user_name
        }

        messagePayload.payload.time = time;

        ReactGA.event({
            category: 'Usuario',
            action: 'Intentó envío de un Mensaje'
        });

        try {
            var pushRef = firebase.database().ref('/messages/'+messagePayload.receiver.user_name+'/'+messagePayload.sender.user_name).push();
            pushRef.set(messageOb);
            var pushVisitedRef = firebase.database().ref('/messages/'+messagePayload.sender.user_name+'/'+messagePayload.receiver.user_name).push();
            pushVisitedRef.set(messageOb);
            this.updateConversation(messagePayload);
        }
        catch(e) {
            console.log(e);
        }
        finally {
            return messagePayload;
        }
    }

};

export default Conversation;
export {
    Conversation
}