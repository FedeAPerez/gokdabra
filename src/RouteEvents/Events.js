// BlankFile.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */ 

import { Section } from '../ComponentsLibrary/Section';
import { Event } from '../ComponentsLibrary/Event';
/* *
 * Hojas de Estilo y Constantes
 * */ 
class Events extends Component {
    render() {
        console.log("para usar");
        console.log(this.props.eventsList);
        return (
                this.props.eventsList &&
                <Section>
                    {
                        this.props.eventsList.map((element, index) => {
                            return (
                                <Event
                                    key={"event_"+index}
                                    date={element.date} 
                                    hour={element.time}
                                    userName={element.userName}
                                />
                            )
                        })
                    }
                </Section>
        );
    }
}

export default Events;
export {
    Events
}