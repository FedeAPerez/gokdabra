// SettingsContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { TextField } from 'material-ui';
import { connect } from 'react-redux';
/* *
 * Código de librerías internas
 * */
import { Text } from '../ComponentsLibrary/Text';
import { Button } from '../ComponentsLibrary/Button';
import { TextGlobeKdabra } from '../ComponentsLibrary/TextGlobe';
import { fbUpdateOnboarding, fbGetOnboarding } from '../firebase';
/* *
 * Hojas de Estilo y Constantes
 * */
 import './SettingsContainer.css';
import MapsTransferWithinAStation from 'material-ui/SvgIcon';

class SettingsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onboarding : '',
            newOnboarding : ''
        };
    }

    changeOnBoarding(e, value) {
        e.preventDefault();
        this.setState({ newOnboarding : value});
    }

    updateOnboarding() {
        const { user } = this.props;
        if(this.state.newOnboarding != '' ){
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

    getHtml() {
        if(this.state.onboarding != '')
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
        return (
            <main className="admin-settings-container">
                <section className="admin-settings">
                <Text centered>Actualizá tu mensaje de bienvenida, para que todos conozcan lo mejor de tu negocio.</Text>
                
                <TextGlobeKdabra 
                        dangerouslySetInnerHTML= { this.getHtml() }></TextGlobeKdabra>
                <footer>
                    <TextField 
                        style= { styledTextField }
                        floatingLabelStyle= { styledFloated }
                        underlineFocusStyle = { styledFocusUnderline }
                        floatingLabelText="Mensaje de Bienvenida" 
                        onChange={this.changeOnBoarding.bind(this)}
                        value={this.state.newOnboarding}
                    />
                    <Button
                        onClick={ this.updateOnboarding.bind(this) }
                    >
                        Actualizar
                    </Button>
                </footer>
                </section>
            </main>
        );
    }
}

function mapStateToProps(state) {

    return { user: state.user };
}
export default connect(mapStateToProps)(SettingsContainer);