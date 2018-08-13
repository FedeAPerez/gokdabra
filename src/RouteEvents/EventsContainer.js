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
            var events_list = snapshot.toJSON();
            if(events_list) {
                var eventsList = [];
                var keys = Object.keys(events_list);
                for(var i =0; i < keys.length; i++)
                {
                    var keysParent = Object.keys(events_list[keys[i]]);
                    for(var j =0; j < keysParent.length; j++)
                    {
                        eventsList.push(Object.assign({}, events_list[keys[i]][keysParent[j]] ));
                    }
                }

                this.setState((prevState, props) => {
                    return { eventsList : eventsList }
                });
            }
        })
    }

    render() {
        return (
            <div>
                <TextV2 lateralMargin bigSize>
                    { "Ahora podés manejar tus reuniones desde KDABRA&nbsp;" + getEmoji("1F60E") }
                </TextV2>
                <TextV2 lateralMargin>
                    { "La próxima vez que hables con alguien, aprovechá para crear eventos desde el chat." }
                </TextV2>
                <TextV2 lateralMargin>
                    { "Pueden ser recordatorios para comentar a tus clientes acerca de ofertas especiales, o explicarles cómo funciona tu producto. ¡Es una buena idea para potenciar tu negocio!" }
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