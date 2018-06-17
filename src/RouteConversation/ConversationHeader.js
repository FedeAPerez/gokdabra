// ConversationHeader.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
/* *
 * Código de librerías internas
 * */ 

/* *
 * Hojas de Estilo y Constantes
 * */ 
import './ConversationHeader.css';

class ConversationHeader extends Component {
    render() {
        return(
            <section 
                    className= { "conversation-header-container" }
            >
                <Link 
                    className= { "conversation-header-left" }
                    to="/"
                >
                    <span>
                        <img src={ "/content/images/HomeButton.svg" } />
                    </span>
                </Link>
                <h2
                    className= { "conversation-header-text" }
                >
                    { this.props.business.business_name.toUpperCase() }
                </h2>
                <span
                    className= { "conversation-header-right" }
                >
                    <img src={ "/content/images/actions/info.svg" } />
                </span>
            </section>
        );
    }
}

export default ConversationHeader;