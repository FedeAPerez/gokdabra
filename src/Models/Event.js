import * as firebase from 'firebase';
import ReactGA from 'react-ga';

class Event {

    constructor(eventPayload) {
        if(eventPayload) {
            this.creator = eventPayload.creator;
            this.receiver = eventPayload.receiver;
            this.date = eventPayload.event.date;
            this.time = eventPayload.event.time;
            this.description = eventPayload.event.description;
        }
        else {
            this.creator = '';
            this.receiver = '';
            this.date = '';
            this.time = '';
            this.description = '';
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
                userName : this.creator.user_name,
                date : this.date,
                time : this.time,
                type : {
                    category : 'event',
                    description : this.description
                }
            };
            var alta = firebase.database().ref('/reunions/'+this.receiver.user_name+'/'+this.creator.user_name);
            alta.push(event).then(success => {
                    console.log('success',success);
                },
                error => {
                    console.log('error',error);
                }
            );

            var eventInverse = {
                userName : this.receiver.user_name,
                date : this.date,
                time : this.time,
                type : {
                    category : 'event',
                    description : this.description
                }
            };
            var altaInversa = firebase.database().ref('/reunions/'+this.creator.user_name+'/'+this.receiver.user_name);
            altaInversa.push(eventInverse).then(success => {
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