// SettingsContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */
import  { OptionsAPI }  from '@gokdabra/gokdabraapi';

import  { OptionsBusinessAPI }  from '@gokdabra/gokdabraapi';
/* *
 * Hojas de Estilo y Constantes
 * */
 import './SettingsContainer.css';

class SettingsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options_list: [],
            profile_completed: 0,
            percentage_completed: '0%'
        };
    }

    fillOptionsBusiness() {
        var objOptions = {};
        objOptions.id_business = this.props.businessObject.business_name.toLowerCase();
        OptionsBusinessAPI.getOptionsByBusiness(objOptions)
        .then((res) => {
            res.data.options_list.forEach(element => {
                var indexElement = this.state.options_list.findIndex(p => p.id_option == element.id_option);
                if(indexElement > 0) {
                    this.state.options_list[indexElement].description = element.show_message;
                    this.state.profile_completed += 1;
                }
            });
            this.setState(this.state);
            this.profileCompletedPercentage();
        })
        .catch((err) => {
        });
    }

    profileCompletedPercentage() {
        if(this.state.options_list) {
            console.log(this.state.profile_completed);
            var perce = (this.state.profile_completed / this.state.options_list.length) *100;
            console.log(perce);
            this.state.percentage_completed = "%"+perce;
            this.setState(this.state);
        }
    }

    fillOptions() {
        OptionsAPI.getAllOptions()
        .then((res) => {
            this.state.options_list = res.data.options_list;
            this.setState(this.state);

            this.fillOptionsBusiness();
        })
        .catch((err) => {
            console.error(err);
        });
    }

    componentDidMount() {
        this.fillOptions();
    }

    modifyElement() {

    }

    render() {
        return (
            <main className="admin-settings-container">
                <section className="admin-settings">
                    <div className="admin-settings-reward">
                        <h3>{"Perfil completo al: " + this.state.percentage_completed}</h3>
                    </div>
                    {
                        this.state.options_list.length > 0 && this.state.options_list.map((element, index)=> {
                            return (
                            <div className="admin-settings-item" key={"admin-settings-item-"+index}>
                                <h3 className="admin-settings-item-header" key={"admin-settings-item-header-"+index}>
                                {element.show_message}
                                </h3>
                                <div className="admin-settings-item-description-container" key={"admin-settings-item-description-container-"+index}>
                                    <p className="admin-settings-item-description" key={"admin-settings-item-description-"+index}>
                                        {element.description != undefined ? element.description : "¡Configurá este mensaje para que tus clientes lo vean en KDABRA!"}
                                    </p>
                                    <button className="admin-settings-modify-button" key={"admin-settings-modify-button-"+index}>
                                        { element.description != undefined ? "Modificar" : "Agregar" }
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