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
import { doCreateUserWithEmailAndPassword, fbCreateBusiness, fbCreateUser } from '../firebase';
import CheckBox from '../ComponentsLibrary/CheckBox';

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
            user_name : '',
            buttonEnabled:false,
            isBusiness : false
        };
    }
    authUser() {
        doCreateUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
            console.log(res);
            if(this.state.isBusiness) {

                var business = {};
                business.email = this.state.email;
                business.business_name = this.state.business_name;
                fbCreateBusiness(business);
                
                this.setState({authedBusiness:true});
            }
            else {
                var user = {};
                user.email = this.state.email;
                user.user_name = this.state.user_name;
                fbCreateUser(user);
                
                this.setState({authedUser:true});
            }

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
        if(this.state.authedBusiness) {
            return <Redirect to={ '/admin/' + this.state.business_name } />;
        }
        if(this.state.authedUser) {
            return <Redirect to={ '/user_admin/' + this.state.user_name.toLowerCase() } />;
        }
        return (
            <section>
                <img src={"/kdabra-icon-512.png"} className="kdabra-logo" />

                <CheckBox  onClick={this.handleBusinessChange.bind(this)} checked={this.state.isBusiness} >
                    Tengo una empresa!
                </CheckBox>
            {
                this.state.isBusiness &&
                
                <TextField
                    style= { styledTextField }
                    floatingLabelStyle= { styledFloated }
                    underlineFocusStyle = { styledFocusUnderline }
                    floatingLabelText="Nombre de Empresa" 
                    onChange={this.changeBusinessName.bind(this)}
                    value={this.state.business_name}
                />
            }

            {
                !this.state.isBusiness &&
                
                <TextField
                    style= { styledTextField }
                    floatingLabelStyle= { styledFloated }
                    underlineFocusStyle = { styledFocusUnderline }
                    floatingLabelText="Nombre de Usuario" 
                    onChange={this.changeUserName.bind(this)}
                    value={this.state.user_name}
                />
            }
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
            <RaisedButton 
                style= { styledButton }
                label="Crear"
                backgroundColor={"#f16334"}
                labelColor={"#fff"}
                onClick={this.authUser.bind(this)}
                fullWidth={true}
                disabled={!this.state.buttonEnabled}
            />

            </section>
        );
    }
}

export default CreateUserContainer;