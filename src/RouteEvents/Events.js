// BlankFile.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */ 

import { SimpleSection } from '../ComponentsLibrary/Section';
import { EventV2 } from '../ComponentsLibrary/Event';
/* *
 * Hojas de Estilo y Constantes
 * */ 
class Events extends Component {
    render() {
        return (
                this.props.eventsList &&
                <SimpleSection>
                    {
                        this.props.eventsList.map((element, index) => {
                            return (
                                <EventV2
                                    key={"event_"+index}
                                    description={(element.type || {}).description ? element.type.description : 'Sin descripción' }
                                    date={element.date} 
                                    hour={element.time}
                                    userName={'@' + element.userName }
                                />
                            )
                        })
                    }
                </SimpleSection>
        );
    }
}

export default Events;
export {
    Events
}