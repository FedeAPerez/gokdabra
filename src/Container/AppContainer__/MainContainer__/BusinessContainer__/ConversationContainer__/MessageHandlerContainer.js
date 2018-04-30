// MessageHandlerContainer.js
/*
 Código librerías de externos
 */
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

/*
 Código Propio y librerías desarrolladas por KDABRA
 */
import InputSenderComponent from '../../../../../Component/input-sender-component';
import MenuContainer from './MenuContainer';
const __MESSAGE_HINT = "Escribí un mensaje...";

const __MESSAGE_DIV_CLASS = "message-div";

class MessageHandlerContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value : ''
        }
    }
    
    handleSubmit() {
        if(this.props.onAnswerSubmit) {
            this.props.onAnswerSubmit("text_input", this.state.value);
            this.state.value = '';
            this.setState(this.state);
        }
    }

    handleSubmitMenuItem(value, showMessage) {
        if(this.props.onAnswerSubmit) {
            this.props.onAnswerSubmit(value, showMessage);
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
    scrollToHandler() {
        if(this['scroll_to_hanlder']) {
            this['scroll_to_hanlder'].scrollIntoView( true, {
                behavior: 'smooth'
            });
        }
    }

    render() {
        const inputStyle = {
            width: '95%',
            margin: '0em auto',
            display: 'block'
        }

        return(
            <section>
            <div 
                className= { __MESSAGE_DIV_CLASS }
                >
                <MenuContainer 
                    submitMessageMenuItem = { this.handleSubmitMenuItem.bind(this) }
                />
                <TextField 
                    hintText= {__MESSAGE_HINT}
                    style= {inputStyle}
                    onChange={ this.handleChange }
                    value={this.state.value}
                    onFocus={ this.scrollToHandler.bind(this) }
                    /> 
                <InputSenderComponent 
                    onClick={this.handleSubmit.bind(this)}/>

            </div>
            <div
                    className="focus-div"
                    ref = {(ref) => {
                    this['scroll_to_hanlder'] = ref
                    }}
                >
                </div>
                </section>
        );
    }
}

export default MessageHandlerContainer;