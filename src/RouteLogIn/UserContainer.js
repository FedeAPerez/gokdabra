// UserContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { TextField, RaisedButton   } from 'material-ui';
import {
    Redirect
  } from "react-router-dom";
/* *
 * Código de librerías internas
 * */ 
import { doSignInWithEmailAndPassword } from '../firebase';
/* *
 * Hojas de Estilo y Constantes
 * */ 
class UserContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',
            buttonEnabled:false,
            authed: false
        };
    }
    authUser() {
        doSignInWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
            console.log(res);
            this.setState({authed:true});
          })
          .catch(error => {
            console.log(error);
          });
    } 
    checkEnabledButton() {
        if(this.state.email != '' && this.state.password != '') {
            this.setState({buttonEnabled:true});
        }
        if(this.state.email == '' || this.state.password == '') {
            this.setState({buttonEnabled:false});
        }
    }
    changeUserName(e, value) {
        e.preventDefault();
        this.setState({email : value});
        this.checkEnabledButton();
    }
    changePassword(e, value) {
        e.preventDefault();
        this.setState({password : value});
        this.checkEnabledButton();
    }
    render() {
        const styledTextField = {
            margin: '0rem auto',
            display: 'block'
        };
        const styledButton = {
            margin: '1rem auto',
            display: 'block'
        }
        const styledFocusUnderline = {
            borderColor: "#f16334"
        }
        const styledFloated = {
            color: "black"
        }
        if(this.state.authed) {
            return <Redirect to={ '/admin/' + 'kdabra' } />;
        }
        return (
            <section>
                <img src={"/kdabra-icon-512.png"} className="kdabra-logo" />
            <TextField 
                style= { styledTextField }
                floatingLabelStyle= { styledFloated }
                underlineFocusStyle = { styledFocusUnderline }
                floatingLabelText="Mail" 
                onChange={this.changeUserName.bind(this)}
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
            <RaisedButton 
                style= { styledButton }
                label="Ingresar"
                backgroundColor={"#f16334"}
                labelColor={"white"}
                onClick={this.authUser.bind(this)}
                fullWidth={true}
                disabled={!this.state.buttonEnabled}
            />
            <p>
            <span className="secondary-label">¿No estás registrado?</span> <span className="primary-label">Create una cuenta.</span>
            </p>
            <p>
                <span className="secondary-label">(Próximamente)</span>
            </p>
            </section>
        );
    }
}

export default UserContainer;