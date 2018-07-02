// UserContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { TextField, FlatButton  } from 'material-ui';
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
            password:''
        };
    }
    authUser() {
        doSignInWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
            console.log(res);
          })
          .catch(error => {
            console.log(error);
          });
    } 
    changeUserName(e, value) {
        e.preventDefault();
        this.setState({email : value});
    }
    changePassword(e, value) {
        e.preventDefault();
        this.setState({password : value});
    }
    render() {
        const styledTextField = {
            margin: '0rem auto',
            display: 'block'
        };
        const styledButton = {
            margin: '0rem auto',
            display: 'block',
            backgroundColor: '#f16334',
            color: "white"
        }
        const styledFocusUnderline = {
            borderColor: "#f16334"
        }
        const styledFloated = {
            color: "black"
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
            <FlatButton
                style= { styledButton }
                label="Ingresar"
                onClick={this.authUser.bind(this)}
            />
            <p><span className="secondary-label">¿No estás registrado?</span> <span className="primary-label">Crea una cuenta.</span>
                </p>
                <p>
                    <span className="secondary-label">(Próximamente)</span>
                    </p>
            </section>
        );
    }
}

export default UserContainer;