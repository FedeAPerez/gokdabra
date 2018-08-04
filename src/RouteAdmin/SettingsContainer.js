// SettingsContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { TextField } from 'material-ui';
import { connect } from 'react-redux';
/* *
 * Código de librerías internas
 * */
import { Text } from '../ComponentsLibrary/Text';
import  Setting  from '../ComponentsLibrary/Setting';
import  { ModalSetting } from '../ComponentsLibrary/ModalSetting';
import { fbUpdateOnboarding, fbGetOnboarding, fbModifyUser } from '../firebase';
/* *
 * Hojas de Estilo y Constantes
 * */
 import './SettingsContainer.css';

class SettingsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onboarding : '',
            newOnboarding : '',
            enableUpdate : false,
            show_settings : {
                show_name : { show : false, value : "" }
            }
        };
    }

    showSetting(e, idSetting) {
        e.preventDefault();
        var newState = {...this.state.show_settings};
        newState[idSetting].show = !newState[idSetting].show;
        this.setState({ show_settings : newState });
    }

    changeSetting(e, idSetting) {
        e.preventDefault();
        console.log(e.target.value);
        var newState = {...this.state.show_settings};
        newState[idSetting].value = e.target.value;
        this.setState({ show_settings : newState });
    }

    updateSetting(e, idSetting, value) {
        e.preventDefault();
        fbModifyUser(this.props.user, idSetting, value);
        var newState = {...this.state.show_settings};
        newState[idSetting].show = !newState[idSetting].show;
        newState[idSetting].value = value;
        this.setState({ show_settings : newState });
    }

    componentDidMount() {

    }

    closeSession() {
        localStorage.removeItem("userSession");
        this.setState({ closeSession : true });
    }

    render() {
        const { user } = this.props;

        if(this.state.closeSession) {
            return (
                <Redirect to='/login' />
            );
        }
        else {
            return (
                <main className="admin-settings-container">
                    <section className="admin-settings">
                    
                    <Text primary noMargin withPadding withBackground>{'@'+ this.props.user.user_name }</Text>
                    
                    <Setting
                        disabled 
                        settingName= "Mensaje de Bienvenida" 
                        settingDescrption= "Es tu forma de recibir a los otros usuarios en KDABRA.">
                    </Setting>

                    <Setting
                        settingName= "Nombre para mostrar" 
                        settingDescrption= { user.show_name }
                        value="show_name"
                        onClick={this.showSetting.bind(this)} />
                    {
                        this.state.show_settings.show_name.show && 
                        <ModalSetting
                            settingName= "Nombre para mostrar" 
                            settingDescrption= { user.show_name }
                            id="show_name"
                            value={this.state.show_settings.show_name.value}
                            onChange={this.changeSetting.bind(this)}
                            onCancel={this.showSetting.bind(this)}
                            onClick={this.updateSetting.bind(this)} />
                        
                    } 
                    <Setting
                        disabled 
                        settingName= "Compartir" 
                        settingDescrption= "Apretá para copiar el link y llevarlo a tus fans!" />
                    
                    <Text primary noMargin withPadding withBackground>Aprender</Text>

                    <Setting 
                        disabled
                        settingName= "Mejorar mi comunicación" 
                        settingDescrption= "¿Cómo mejorar la comunicación usando KDABRA?" />
                    
                    <Text primary noMargin withPadding withBackground>General</Text>

                    <Setting
                        disabled 
                        settingName= "Acerca de KDABRA" 
                        settingDescrption= "Versión Demo - Ingresá para ver actualizaciones" />
                    <Setting 
                        settingName="Cerrar Sesión" 
                        onClick={ this.closeSession.bind(this)} />

                    </section>
                </main>
            );
        }
    }
}

function mapStateToProps(state) {

    return { user: state.user };
}
export default connect(mapStateToProps)(SettingsContainer);