// Messages.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */ 

/* *
 * Hojas de Estilo y Constantes
 * */ 
class Messages extends Component {
    render() {
        return(
            <div>
                {
                    this.props.messages.map((elem, index) => {
                        return (
                            <div key={"messages_" + index}>
                                { elem.message + " por " + elem.sender}
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default Messages;