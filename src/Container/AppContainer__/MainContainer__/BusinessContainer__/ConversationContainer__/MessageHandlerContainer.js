/*
 Código librerías de externos
 */
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class MessageHandlerContainer extends Component {

    render() {
        const inputStyle = {
            width: '95%',
            margin: '0em auto',
            display: 'block'
        }

        return(
            <TextField 
                hintText="Escribí un mensaje..."
                style= {inputStyle}
                />
        );
    }
}

export default MessageHandlerContainer;