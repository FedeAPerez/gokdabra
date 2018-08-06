'use strict';
import * as firebase from 'firebase';
import ReactGA from 'react-ga';

class Message {
    constructor(user, visitedUser, messagePayload) {
        this.sender = user.user_name;
        this.receiver = visitedUser.user_name;
        this.date = messagePayload.date; // falta este dato
        this.time = messagePayload.time;
        this.message = messagePayload.text;
    }

};