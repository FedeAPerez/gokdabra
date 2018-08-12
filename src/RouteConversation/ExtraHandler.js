// BlankFile.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
/* *
 * Código de librerías internas
 * */ 
import { ModalSection, ModalInnerSection, FlexSection, SimpleSection } from '../ComponentsLibrary/Section';
import { SimpleButton } from '../ComponentsLibrary/Button';
import { TextGlobeKdabra } from '../ComponentsLibrary/TextGlobe';
import { getEmoji } from '../Models/Emoji';
/* *
 * Hojas de Estilo y Constantes
 * */ 
class ExtraHandler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onboarding : {
                isOnboarded : false,
                messages : []
            },
            event : {
                date : {},
                time : {}
            }
        };
    }
    componentDidMount() {

        setTimeout(function() {
            this.setState((prevState, props) => {
                var newOnboarding = Object.assign({}, prevState.onboarding);
                newOnboarding.messages.push("¡Hola!, soy tu asistente de KDABRA. Por el momento, lo único que puedo hacer es generar reuniones. " + getEmoji("1F600"));
                newOnboarding.isOnboarded = false;
                return {
                    onboarding : newOnboarding
                };
    
            });

            setTimeout(function() {
                this.setState((prevState, props) => {
                    var newOnboarding = Object.assign({}, prevState.onboarding);
                    newOnboarding.messages.push("Seleccioná una fecha y un horario que te parezcan acordes.");
                    newOnboarding.isOnboarded = true;
                    return {
                        onboarding : newOnboarding
                    };
        
                });

            }.bind(this), 800);

        }.bind(this), 1000);

    }
    
    handleDateChange = (event, date) => {
        this.setState((prevState, props) => {
            var newEvent = Object.assign({}, prevState.event);
            newEvent.date = date;
            return { event : newEvent };
        });
    };

    handleTimeChange = (event, time) => {
        this.setState((prevState, props) => {
            var newEvent = Object.assign({}, prevState.event);
            newEvent.time = time;
            return { event : newEvent };
        });
    };

    render() {
        return (
            <ModalSection>
            <ModalInnerSection noPadding relative>
                {
                    (this.state.onboarding && this.state.onboarding.messages.length > 0) &&
                    this.state.onboarding.messages.map((element, index) => {
                        return (
                            <TextGlobeKdabra isLeft key={"onboarding_extra_"+index}>{element}</TextGlobeKdabra>  
                        );
                    })
                }
                {
                    this.state.onboarding.isOnboarded &&
                    <SimpleSection>
                        <DatePicker
                            hintText="Seleccioná la fecha"
                            value={this.state.event.date}
                            onChange={this.handleDateChange}
                        />
                        <TimePicker
                            format="24hr"
                            hintText="Elegí un horario"
                            value={this.state.event.time}
                            onChange={this.handleTimeChange}
                            />
                        <FlexSection>
                            <SimpleButton onClick={ (e) => { this.props.onExtraClose ? this.props.onExtraClose(e) : null } }>Cancelar</SimpleButton>
                            <SimpleButton onClick={ (e) => { this.props.onExtraCreate ? this.props.onExtraCreate(e, this.state.event) : null } }>Crear</SimpleButton>
                        </FlexSection>
                    </SimpleSection> 
                }     
            </ModalInnerSection>
            </ModalSection>
        );
    }
}

export default ExtraHandler;