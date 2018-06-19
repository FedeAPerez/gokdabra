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
                {
                    this.props.left &&
                    <Link 
                    className= { "conversation-header-left" }
                    to={ this.props.left.link }
                    >
                        <span>
                            <img src={ this.props.left.image_link } />
                        </span>
                    </Link>
                }

                {
                    this.props.isBack &&
                    <Link 
                        className= { "conversation-header-left" }
                        to={"/" + this.props.business.business_name.toLowerCase() + "/messages/send" }
                    >
                        <span>
                            <img src={ "/content/images/actions/back.svg" } />
                        </span>
                    </Link>
                }

                {
                    this.props.business &&
                    <h2
                        className= { "conversation-header-text" }
                    >
                        { this.props.business.business_name.toUpperCase() }
                    </h2>
                }

                {
                    this.props.right &&
                    <Link
                        className= { "conversation-header-right" }
                        to={ this.props.right.link }
                    >
                        <span
                            className= { "conversation-header-right" }
                        >
                            <img src={ this.props.right.image_link } />
                        </span>
                    </Link>
                }
                {
                    this.props.rightAction && 
                    <span
                            className= { "conversation-header-right" }
                            onClick= { this.props.rightAction.onClick.bind(this) }
                    >
                            <img src={ this.props.rightAction.image_link } />
                    </span>
                }
            </section>
        );
    }
}

export default ConversationHeader;