// UserContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { TextField   } from 'material-ui';
import { connect } from 'react-redux';
import * as Actions from '../redux/actions/actions';
import {
    Redirect
  } from "react-router-dom";
/* *
 * Código de librerías internas
 * */ 
import { doCreateUserWithEmailAndPassword, fbCreateUser } from '../firebase';
import CheckBox from '../ComponentsLibrary/CheckBox';
import Button from '../ComponentsLibrary/Button';
import { Text, BoldText } from '../ComponentsLibrary/Text';

/* *
 * Hojas de Estilo y Constantes
 * */ 
class CreateUserContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',
            user_name : '',
            buttonEnabled:false,
            errorLogin: false,
            isBusiness : false
        };
    }
    authUser() {
        const { dispatch } = this.props;
        dispatch(Actions.startFetching());
        doCreateUserWithEmailAndPassword(this.state.email.toLowerCase(), this.state.password)
        .then((res) => {
                var user = {};
                user.email = this.state.email;
                user.user_name = this.state.user_name.toLowerCase();
                user.isBusiness = this.state.isBusiness;

                fbCreateUser(user);
                
                dispatch(Actions.finishedFetching());
                this.setState({authedUser:true});

          })
          .catch(error => {
              
            dispatch(Actions.finishedFetching());
            this.setState({ errorLogin : true });
          });
    } 
    checkEnabledButton() {
        if(this.state.email !== '' && this.state.password !== '') {
            this.setState({buttonEnabled:true});
        }
        if(this.state.email === '' || this.state.password === '') {
            this.setState({buttonEnabled:false});
        }
    }
    changeUserName(e, value) {
        e.preventDefault();
        this.setState({user_name : value});
        this.checkEnabledButton();
    }
    changeMail(e, value) {
        e.preventDefault();
        this.setState({email : value});
        this.checkEnabledButton();
    }
    changePassword(e, value) {
        e.preventDefault();
        this.setState({password : value});
        this.checkEnabledButton();
    }
    handleBusinessChange(e) {
        e.preventDefault();
        this.setState({ isBusiness : !this.state.isBusiness });
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

        if(this.state.authedUser) {
            return <Redirect to={ '/admin/' + this.state.user_name.toLowerCase() } />;
        }
        return (
            <section>
                <img src={"/kdabra-icon-512.png"} className="kdabra-logo" />
                <Text centered noMargin primary>Mejorando la comunicación, con foco en las personas<br /> y las marcas que los representan.</Text>
                <TextField
                    style= { styledTextField }
                    floatingLabelStyle= { styledFloated }
                    underlineFocusStyle = { styledFocusUnderline }
                    floatingLabelText="Nombre de Usuario" 
                    onChange={this.changeUserName.bind(this)}
                    value={this.state.user_name}
                />

                <Text 
                    noMargin
                    secondary centered>
                    { "mi.gokdabra.com/"}<BoldText secondary>{this.state.user_name}</BoldText>
                </Text>

                <TextField 
                    style= { styledTextField }
                    floatingLabelStyle= { styledFloated }
                    underlineFocusStyle = { styledFocusUnderline }
                    floatingLabelText="Mail" 
                    onChange={this.changeMail.bind(this)}
                    value={this.state.email}
                />
                <TextField
                    style= { styledTextField }
                    floatingLabelStyle= { styledFloated }
                    underlineFocusStyle = { styledFocusUnderline }
                    floatingLabelText="Contraseña" 
                    type="password"
                    onChange={this.changePassword.bind(this)}
                    value={this.state.password}
                />
                <Text centered noMargin>Hagamos que tu experiencia sea la más adecuada... <br />¿Querés usar KDABRA como una empresa?</Text>

                <CheckBox  onClick={this.handleBusinessChange.bind(this)} checked={this.state.isBusiness} >
                    ¡Sí, tengo una!
                </CheckBox>
                <Button primary
                    onClick={this.authUser.bind(this)}
                    disabled={!this.state.buttonEnabled}
                >
                    Crear Usuario
                </Button>

            </section>
        );
    }
}

export default connect()(CreateUserContainer);