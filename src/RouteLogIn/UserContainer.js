// UserContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { TextField, FlatButton  } from 'material-ui';
/* *
 * Código de librerías internas
 * */ 

/* *
 * Hojas de Estilo y Constantes
 * */ 
class UserContainer extends Component {
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
            color: "#f16334"
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
                floatingLabelText="Nombre de Usuario" 
            />
            <TextField
                style= { styledTextField }
                floatingLabelStyle= { styledFloated }
                underlineFocusStyle = { styledFocusUnderline }
                floatingLabelText="Contraseña" 
                type="password"
            />
            <FlatButton
                style= { styledButton }
                label="Ingresar"
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