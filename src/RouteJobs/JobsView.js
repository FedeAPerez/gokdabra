// BlankFile.js
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
import './new_exp.css'
class JobsView extends Component {
    render() {
        console.log("mensaje");
        return (
            <div>
                <div className="new-exp-header">
                    <h2 className="new-exp-title">
                        Mis Aplicaciones - Federico Pérez
                    </h2>
                </div>
                <div className="text-chat-arq">
                    <h2 className="new-exp-text">
                        Fede, antes que nada me gustó tu aplicación.
                        Pero me gustaría que hagamos incapíe sobre las aclaraciones que hace nuestro líder técnico.
                        ¡Buen trabajo!
                    </h2>
                    <h3 className="new-exp-text-aclara">
                        Jorgelina Gómez <span>Experta en RR.HH.</span>
                    </h3>
                </div>

                <div className="text-chat-arq">
                    <h2 className="new-exp-text">
                        ¡Buenas tardes! Me gustaría más detalle acerca de tus conocimientos en ReactJS y Redux.
                        ¿Podrías comentarnos un poco de tu experiencia?
                    </h2>
                    <h3 className="new-exp-text-aclara">
                        José Gómez <span>Arquitecto en sistemas.</span>
                    </h3>
                </div>

                <div className="text-chat-arq user">
                    <h2 className="new-exp-text">
                        Sí, les agrego esas aclaraciones en el documento.<span className="emoji">&#x1F4C2;</span>
                    </h2>
                    <h3 className="new-exp-text-aclara">
                        Federico Pérez
                    </h3>
                </div>


            </div>
        );
    }
}

export default JobsView;