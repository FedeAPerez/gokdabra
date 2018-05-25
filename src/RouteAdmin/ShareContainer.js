// ShareContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
/* *
 * Código de librerías internas
 * */ 

/* *
 * Hojas de Estilo y Constantes
 * */ 
import './ShareContainer.css';

class ShareContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            copied:false
        }
    }

    render() {

        return(
            <main className="admin-share-container">
                <h2>
                Compartí tu link y logros en KDABRA.
                </h2>
                <CopyToClipboard 
                text={ "http://mi.gokdabra.com/" + this.props.businessObject.business_name.toLowerCase() }
                onCopy={() => this.setState({copied: true})}>
                <div 
                    className="admin-share-link"
                >
                { "http://mi.gokdabra.com/" + this.props.businessObject.business_name.toLowerCase() }
                <img 
                    src={'/content/images/ShareButtonWhite.svg'}
                />
                {   this.state.copied && 
                    <span className="admin-share-link-clicked">
                        Copiado
                    </span>
                }
                </div>
                </CopyToClipboard>
            </main>
        );
        
    }
}

export default ShareContainer;