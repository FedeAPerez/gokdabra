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
import { doCreateUserWithEmailAndPassword, fbCreateBusiness } from '../firebase';
/* *
 * Hojas de Estilo y Constantes
 * */ 
class CreateUserContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',
            business_name:'',
            buttonEnabled:false,
            authed: false
        };
    }
    authUser() {
        doCreateUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
            console.log(res);
            this.setState({authed:true});
            var business = {};
            business.email = this.state.email;
            business.business_name = this.state.business_name;
            fbCreateBusiness(business);
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
    changeBusinessName(e, value) {
        e.preventDefault();
        this.setState({business_name : value});
        this.checkEnabledButton();
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
                floatingLabelText="Nombre de Empresa" 
                onChange={this.changeBusinessName.bind(this)}
                value={this.state.business_name}
            />
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
                label="Crear"
                backgroundColor={"#f16334"}
                labelColor={"white"}
                onClick={this.authUser.bind(this)}
                fullWidth={true}
                disabled={!this.state.buttonEnabled}
            />

            </section>
        );
    }
}

export default CreateUserContainer;