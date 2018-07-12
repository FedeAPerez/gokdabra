// SettingsContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
/* *
 * Código de librerías internas
 * */
/* *
 * Hojas de Estilo y Constantes
 * */
 import './SettingsContainer.css';

class SettingsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    fillOptionsBusiness() {
    }

    profileCompletedPercentage() {
    }

    fillOptions() {
    }

    componentDidMount() {
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
        /*OptionsBusinessAPI.saveOptionForBusiness(obj)
        .then((res) => {
            console.log(res);
            this.modifyElementClose();
            this.fillOptionsBusiness();
        })
        .catch((err) => {

        });*/
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
                    {
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