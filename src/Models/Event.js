'use strict';

class Event {
    constructor(user, visitedUser, eventPayload) {
        this.creator = user.user_name;
        this.receiver = visitedUser.user_name;
        this.date = eventPayload.date;
        this.time = eventPayload.time;
    }

    getPrettyEvent() {
        return (this.creator || '').toUpperCase() + " te va a recibir el " + this.date + " a las " + this.time + ".";
    }
};