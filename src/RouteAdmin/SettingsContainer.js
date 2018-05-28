// SettingsContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
/* *
 * Código de librerías internas
 * */
import  { OptionsAPI }  from '../API';
import  { OptionsBusinessAPI }  from '../API';
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
            percentage_completed: '0%',
            setting_item : false,
            setting_option : "",
            setting_show_message : "",
            setting_value : "",
            setting_dirty : false
        };
    }

    fillOptionsBusiness() {
        var objOptions = {};
        objOptions.id_business = this.props.businessObject.business_name.toLowerCase();
        OptionsBusinessAPI.getOptionsByBusiness(objOptions)
        .then((res) => {
            res.data.options_list.forEach(element => {
                var indexElement = this.state.options_list.findIndex(p => p.id_option == element.id_option);
                if(indexElement >= 0) {
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
            var perce = (this.state.profile_completed / this.state.options_list.length) *100;
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
        });
    }

    componentDidMount() {
        this.fillOptions();
    }

    modifyElement(id_option, show_message) {
        this.state.setting_item = true;
        this.state.setting_option = id_option;
        this.state.setting_show_message = show_message;
        this.setState(this.state);
    }

    modifyElementClose() {
        this.state.setting_item = false;
        this.state.setting_option = "";
        this.state.setting_show_message = "";
        this.state.setting_value = "";
        this.setState(this.state);
    }

    modifyElementSave() {
        var obj = {};
        obj.id_option = this.state.setting_option;
        obj.id_business = this.props.businessObject.business_name.toLowerCase();
        obj.show_message = this.state.setting_value;
        OptionsBusinessAPI.saveOptionForBusiness(obj)
        .then((res) => {
            console.log(res);
            this.modifyElementClose();
            this.fillOptionsBusiness();
        })
        .catch((err) => {

        });
    }

    handleChange = (e) => {        
        e.preventDefault();
        this.setState(
            {
                setting_value: e.target.value,
                setting_dirty: true
            }
        );
	};

    render() {
        const inputStyle = {
            margin: '0em auto',
            marginLeft: '1em',
            marginRight: '1em',
            fullWidth: true,
            display: 'inline-block',
            backgroundColor: 'white',
            borderRadius: '1em'
        }
        const hintStyle = {
            color: '#95a5a6'
        }

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
                                    <button 
                                        onClick = { () => this.modifyElement(element.id_option, element.show_message) }
                                        className="admin-settings-modify-button" 
                                        key={"admin-settings-modify-button-"+index}
                                    >
                                        { element.description != undefined ? "Modificar" : "Agregar" }
                                    </button>
                                </div>
                            </div>
                            );
                        })
                    }
                </section>
                {
                    this.state.setting_item &&    
                    <section className="admin-settings-modify">
                        <section className="admin-settings-modify-area">
                            <img 
                                className="admin-settings-modify-close"
                                src={'/content/images/cancel.svg'}
                                onClick={this.modifyElementClose.bind(this)}
                            />
                            <h2>{
                                this.state.setting_show_message
                            }</h2>

                            {
                                !this.state.setting_dirty &&
                            <h3>
                                Este mensaje va a ayudar a tus clientes a entender mejor tu negocio y obtener toda la información de antemano.
                            </h3>
                            }
                            <TextField 
                                hintStyle= { hintStyle }
                                multiLine={true}
                                style= { inputStyle }
                                onChange={ this.handleChange }
                                value={ this.state.setting_value }
                                hintText={"Escribí tu mensaje..."}
                            />
                            <button 
                                onClick={this.modifyElementSave.bind(this)}
                                className="admin-settings-modify-save" 
                            >
                                ¡Guardar cambios!
                            </button>
                        </section>
                    </section>
                }
            </main>
        );
    }
}

export default SettingsContainer;