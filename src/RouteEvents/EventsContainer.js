// BlankFile.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */ 
import { TextV2, Text } from '../ComponentsLibrary/Text';
import { Section } from '../ComponentsLibrary/Section';
import { Event } from '../Models/Event';
import { Events } from './Events';
import { getEmoji } from '../Models/Emoji';
/* *
 * Hojas de Estilo y Constantes
 * */ 
class EventsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        var event = new Event();
        const eventsFirebase = event.getEventsSubscription(this.props.user);
        eventsFirebase.on('value', snapshot => {
            console.log(snapshot.val());
            const events_list = snapshot.val();
            var eventsList = [];
            var keys = Object.keys(events_list);
            for(var i =0; i< keys.length; i++)
            {
                eventsList.push(Object.assign({}, events_list[keys[i]], { userName : keys[i] } ));
            }
            this.setState((prevState, props) => {
                return { eventsList : eventsList }
            });
        })
    }

    render() {
        return (
            <div>
                <TextV2 lateralMargin bigSize>
                    { "Ahora podés manejar tus reuniones desde KDABRA&nbsp;" + getEmoji("1F60E") }
                </TextV2>
                <TextV2 lateralMargin>
                    { "La próxima vez que hables con alguien, aprovechá para organizar tus eventos en el chat." }
                </TextV2>
                {
                    this.state.eventsList && 
                    <Events eventsList={this.state.eventsList} />
                }
            </div>
        );
    }
}

export default EventsContainer;