// SettingsContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */
import OptionsAPI from '@gokdabra/gokdabraapi';
/* *
 * Hojas de Estilo y Constantes
 * */
 import './SettingsContainer.css';

class SettingsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: []
        };
    }

    componentDidMount() {
        this.state.options.push({
            id: "opening_hours",
            title: "Horarios de atención",
            description: "No tenemos horario fijo, pero podés agendar una visita enviándonos un mensaje a nuestro teléfono de contacto. ⌚"
        });
        this.state.options.push({
            id: "work_map",
            title: "Lugar de trabajo",
            description: "Estamos en Santos Lugares! 🗺"
        });
        this.state.options.push({
            id: "paymantes_availables",
            title: "Métodos de pago",
            description: "Podés pagar con efectivo o Visa y MasterCard usando MercadoPago! Sino mediante transferencia bancaria."
        });
        this.state.options.push({
            id: "contact_information",
            title: "Información de contacto",
            description: "Podés enviar un WhatsApp al 15-2525-3636."
        });
        this.setState(this.state);
    }

    modifyElement() {

    }

    render() {
        return (
            <main className="admin-settings-container">
                <section className="admin-settings">
                    {
                        this.state.options.length > 0 && this.state.options.map((element, index)=> {
                            return (
                            <div className="admin-settings-item" key={"admin-settings-item-"+index}>
                                <h3 className="admin-settings-item-header" key={"admin-settings-item-header-"+index}>
                                {element.title}
                                </h3>
                                <div className="admin-settings-item-description-container" key={"admin-settings-item-description-container-"+index}>
                                    <p className="admin-settings-item-description" key={"admin-settings-item-description-"+index}>
                                        {element.description}
                                    </p>
                                    <button className="admin-settings-modify-button" key={"admin-settings-modify-button-"+index}>
                                        Modificar
                                    </button>
                                </div>
                            </div>
                            );
                        })
                    }
                </section>
            </main>
        );
    }
}

export default SettingsContainer;