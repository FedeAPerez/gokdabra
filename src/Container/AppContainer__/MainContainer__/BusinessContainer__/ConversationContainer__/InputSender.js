/*
Código librerías de externos
*/
import React, { Component } from 'react';

class InputSender extends Component {
    constructor(props) {
        super(props);
    }
   render() {
       
       return(
           <span className="message-submit-button">
               <img src="/content/images/kdabra-submit.svg"
                    onClick = {this.props.onClick}
                    />
            </span>
       );
   }
}

export default InputSender;