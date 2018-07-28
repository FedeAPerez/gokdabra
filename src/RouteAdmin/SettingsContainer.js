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
import { Button } from '../ComponentsLibrary/Button';
import { TextGlobeKdabra } from '../ComponentsLibrary/TextGlobe';
import  Setting  from '../ComponentsLibrary/Setting';
import { fbUpdateOnboarding, fbGetOnboarding } from '../firebase';
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
            enableUpdate : false
        };
    }

    changeOnBoarding(e, value) {
        e.preventDefault();
        var shouldEnable = value !== '';
        this.setState({ newOnboarding : value, enableUpdate : shouldEnable});
    }

    updateOnboarding() {
        const { user } = this.props;
        if(this.state.newOnboarding !== '' ){
            fbUpdateOnboarding(user.user_name, this.state.newOnboarding);
            
            this.setState({ newOnboarding : '' });
        }
    }

    componentDidMount() {
        const { user } = this.props;
        fbGetOnboarding(user.user_name)
        .then((res) => {
            this.setState({ onboarding : res.val().message });
        })
        .catch((err) => {

        });
    }
    closeSession() {
        localStorage.removeItem("userSession");
        this.setState({ closeSession : true });
    }
    getHtml() {
        if(this.state.onboarding !== '')
            return { __html : this.state.onboarding };
        else
            return { __html : "Acá vas a poder ver tu mensaje"};
    }

    render() {
        const styledTextField = {
            margin: '0rem auto',
            display: 'block'
        };
        const styledFocusUnderline = {
            borderColor: "#f16334"
        }
        const styledFloated = {
            color: "black"
        }
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
                    <Text centered>{
                        this.props.user.isBusiness ?
                        "Actualizá tu mensaje de bienvenida para que todos conozcan lo mejor de vos!":
                        "Actualizá tu mensaje de bienvenida, para que todos conozcan lo mejor de tu negocio."
                        }
                    </Text>
                    
                    <TextGlobeKdabra onboarding
                            dangerouslySetInnerHTML= { this.getHtml() }></TextGlobeKdabra>
                    <footer>
                        <TextField 
                            style= { styledTextField }
                            floatingLabelStyle= { styledFloated }
                            underlineFocusStyle = { styledFocusUnderline }
                            floatingLabelText="Mensaje de Bienvenida" 
                            onChange={this.changeOnBoarding.bind(this)}
                            value={this.state.newOnboarding}
                            multiLine
                        />
                        <Button
                            disabled={ !this.state.enableUpdate }
                            onClick={ this.updateOnboarding.bind(this) }
                        >
                            Actualizar
                        </Button>
                        <Text primary noMargin withPadding withBackground>General</Text>
                        <Setting 
                            settingName= "Acerca de KDABRA" 
                            settingDescrption= "Versión Demo" />
                        <Setting 
                            settingName="Cerrar Sesión" 
                            onClick={ this.closeSession.bind(this)} />

                    </footer>
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