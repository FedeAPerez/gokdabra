import * as firebase from 'firebase';
import ReactGA from 'react-ga';

class Event {

    constructor(eventPayload) {
        if(eventPayload) {
            this.creator = eventPayload.creator;
            this.receiver = eventPayload.receiver;
            this.date = eventPayload.event.date;
            this.time = eventPayload.event.time;
        }
        else {
            this.creator = '';
            this.receiver = '';
            this.date = '';
            this.time = '';
        }
    }
    getEventsSubscription(user) {
        return firebase.database().ref().child('/reunions/' + user.user_name);
    }
    createEvent() {
        ReactGA.event({
            category: 'Usuario',
            action: 'Intentó la creación de un evento'
        });

        try {
            var event = {
                date : this.date,
                time : this.time,
                type : {
                    category : 'event'
                }
            };
            var alta = firebase.database().ref('/reunions/'+this.receiver.user_name+'/'+this.creator.user_name);
            alta.set(event).then(success => {
                console.log('success',success);
            },
            error => {
                console.log('error',error);
            }
        );
            var altaInversa = firebase.database().ref('/reunions/'+this.creator.user_name+'/'+this.receiver.user_name);
            altaInversa.set(event).then(success => {
                console.log('success',success);
            },
            error => {
                console.log('error',error);
            }
        );
        }
        catch(e) {
        }
    }
};

export default Event;
export {
    Event
};