// UserContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { TextField   } from 'material-ui';
import Button from '../ComponentsLibrary/Button';
import { fbGetUserByEmail } from '../firebase';
import {
    Redirect, Link
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
            email: '',
            password: '',
            buttonEnabled : false,
            doneAuthed : false,
            user_name : ''
        };
    }
    authUser() {
        doSignInWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {

            const userPojo = fbGetUserByEmail(this.state.email);
            userPojo.then(
                (snapshot) => { 
                    this.setState({doneAuthed : true, user_name : Object.keys(snapshot.val())[0]});
            })
            .catch((err) => {
                console.log("error in login");
                console.log(err);
            });
          })
          .catch(error => {
            console.log(error);
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
        const styledFocusUnderline = {
            borderColor: "#f16334"
        }
        const styledFloated = {
            color: "black"
        }
        if(this.state.doneAuthed) {
            return <Redirect to={ '/admin/' + this.state.user_name } />;
        }
        else {
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
                <Button
                    onClick={this.authUser.bind(this)}
                    primary
                    disabled={!this.state.buttonEnabled}
                >
                    Ingresar
                </Button>
                <p>
                <span className="secondary-label">¿No estás registrado?</span>
                <Link to="/signup"> <span className="primary-label">Create una cuenta.</span></Link>
                </p>
                </section>
            );

        }
    }
}

export default UserContainer;