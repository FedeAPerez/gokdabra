// ShareContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { connect } from 'react-redux';
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

    renderImage() {
        return(
            <img 
                src={'/content/images/ShareButtonWhite.svg'}
            />
        );
    }

    renderCopied() {
        return(
            <span className="admin-share-link-clicked">
                Copiado
            </span>

        );
    }


    render() {

        return(
            <main className="admin-share-container">
                {
                    this.props.user.isBusiness &&
                    <h2>
                    1 - Copia tu link.<br />
                    2 - Subilo a las redes.<br />
                    3 - Que tus clientes se conviertan en tus fans usando KDABRA.
                    </h2>
                }
                {
                    !this.props.user.isBusiness &&
                    <h2>
                    1 - Copia tu link.<br />
                    2 - Compartilo para que negocios te envíen información.<br />
                    </h2>
                }
                <CopyToClipboard 
                text={ "http://mi.gokdabra.com/" + this.props.user.user_name.toLowerCase() }
                onCopy={() => this.setState({copied: true})}>
                <div 
                    className="admin-share-link"
                >
                { "http://mi.gokdabra.com/" + this.props.user.user_name.toLowerCase() }
                {
                    this.renderImage()
                }
                {  
                    this.state.copied &&
                    this.renderCopied()
                }
                </div>
                </CopyToClipboard>

                <h2>
                1 - Abrí la imagen.<br />
                2 - Subila a las redes.<br />
                3 - Comparti el logro de ser más innovador en la forma de comunicarte.
                </h2>
                <div className="admin-share-link-no-active">
                <a className="admin-share-image" target="_blank" href={"/content/images/badges/KdabraFirstBadge.png"}>
                Guardar logro como imagen
                </a>
                {
                    this.renderImage()
                }
                </div>
            </main>
        );
        
    }
}
function mapStateToProps(state) {
    const { user } = state;
    return { user };
}
export default connect(mapStateToProps)(ShareContainer);