// ConversationsList.js
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

class BusinessList extends Component {
  render() {
      return (
        <ul>
            {
                this.props.businessList.map((element, index) => {
                    return (
                        <li key={index}>{element.contact_mail}</li>
                    );
                })
            }

        </ul>
      );
  }
}

export default BusinessList;