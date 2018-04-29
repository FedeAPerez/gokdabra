/*
 Código librerías de externos
 */
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import InputSender from './InputSender';

class MessageHandlerContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value : ''
        }
    }
    
    handleSubmit() {
        if(this.props.onAnswerSubmit) {
            this.props.onAnswerSubmit(this.state.value);
            this.state.value = '';
            this.setState(this.state);
        }
    }

    handleChange = (e) => {        
        e.preventDefault();
        this.setState(
            {
                value: e.target.value
            }
        );
	};

    render() {
        const inputStyle = {
            width: '95%',
            margin: '0em auto',
            display: 'block'
        }

        return(
            <div>
                <TextField 
                    hintText="Escribí un mensaje..."
                    style= {inputStyle}
                    onChange={ this.handleChange }
                    value={this.state.value}
                    /> 
                <InputSender 
                    onClick={this.handleSubmit.bind(this)}/>
            </div>
        );
    }
}

export default MessageHandlerContainer;