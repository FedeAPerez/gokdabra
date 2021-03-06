// MessageHandlerTestContainer.js
/*
 Código librerías de externos
 */
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

/*
 Código Propio y librerías desarrolladas por KDABRA
 */
import MessageSubmitButton from '../../Component/MessageSubmitButton';
const __MESSAGE_HINT = "Escribí un mensaje...";
const __MESSAGE_HANDLER_CONTAINER_CLASS = "message-handler-container";
const __MESSAGE_DIV_CLASS = "message-div";

class MessageHandlerTestContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value : ''
        }
    }
    
    handleSubmit(e) {
        e.preventDefault();
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
            setTimeout(function() {
                this['scroll_to_hanlder'].scrollIntoView( false, {
                    behavior: 'smooth'
                });
            }.bind(this), 1000);
        }
    }

    render() {
        const inputStyle = {
            width: '80%',
            margin: '0em auto',
            display: 'inline-block',
            marginRight: '0em',
            marginLeft: '1em',
            backgroundColor: 'white',
            borderRadius: '1em'
        }

        return(
            <section 
            className= { __MESSAGE_HANDLER_CONTAINER_CLASS }>
                <form onSubmit={this.handleSubmit.bind(this)}>
                <div 
                    className= { __MESSAGE_DIV_CLASS }
                >
                    <TextField 
                        hintText= {__MESSAGE_HINT}
                        style= {inputStyle}
                        onChange={ this.handleChange }
                        value={this.state.value}
                        onFocus={ this.scrollToHandler.bind(this) }
                        /> 
                    <MessageSubmitButton 
                        onClick={this.handleSubmit.bind(this)}/>

                </div>
                </form>
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

export default MessageHandlerTestContainer;