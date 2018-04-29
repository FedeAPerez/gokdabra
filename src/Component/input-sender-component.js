// input-sender-component.js
/*
Código librerías de externos
*/
import React, { Component } from 'react';
const __SUBMIT_SVG_ROUTE = "/content/images/kdabra-submit.svg";
const __SUBMIT_BUTTON_CLASS = "message-submit-button";

class InputSenderComponent extends Component {
    constructor(props) {
        super(props);
    }
   render() {
       
       return(
           <span className= { __SUBMIT_BUTTON_CLASS }>
               <img 
                    src= { __SUBMIT_SVG_ROUTE }
                    onClick= {this.props.onClick}
                />
            </span>
       );
   }
}

export default InputSenderComponent;