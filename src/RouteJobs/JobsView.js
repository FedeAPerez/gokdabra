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
                <main className="chat-container">
                <article className="article">
                    <h3 className="new-exp-text-aclara">
                        Jorgelina Gómez <span>Experta en RR.HH</span>
                    </h3>
                    <div className="text-chat-arq">
                    <h2 className="new-exp-text">
                        Fede, antes que nada me gustó tu aplicación.
                        Pero me gustaría que hagamos incapíe sobre las aclaraciones que hace nuestro líder técnico.
                        ¡Buen trabajo!
                    </h2>

                </div>
                </article>

                <article className="article">
                    <h3 className="new-exp-text-aclara">
                        José Gómez <span>Arquitecto en sistemas</span>
                    </h3>
                    <div className="text-chat-arq">
                    <h2 className="new-exp-text">
                        ¡Buenas tardes! Me gustaría más detalle acerca de tus conocimientos en ReactJS y Redux.
                        ¿Podrías comentarnos un poco de tu experiencia?
                    </h2>

                </div>
                </article>

                <article className="article-user">
                    <div className="text-chat-arq user">
                        <h2 className="new-exp-text">
                            Sí, les agrego esas aclaraciones en el documento.<span className="actionable">Ver documento</span>
                        </h2>
                    </div>
                </article>
                </main>

            </div>
        );
    }
}


class JobsViewEN extends Component {
    render () {
        return (
            <div>
            <div className="new-exp-header">
                <h2 className="new-exp-title">
                    My Applications - Federico Pérez
                </h2>
            </div>
            <main className="chat-container">
            <article className="article">
                <h3 className="new-exp-text-aclara">
                    Jorgelina Gómez <span>IT Recruiter</span>
                </h3>
                <div className="text-chat-arq">
                <h2 className="new-exp-text">
                    Fede, first of all I liked your application.
                    But I would like you to emphasize the clarifications that our technical leader makes.
                    Good job!
                </h2>

            </div>
            </article>

            <article className="article">
                <h3 className="new-exp-text-aclara">
                    José Gómez <span>Technical leader</span>
                </h3>
                <div className="text-chat-arq">
                <h2 className="new-exp-text">
                    Good afternoon! I would like to have more details about your knowledge in ReactJS and Redux.
                    Could you tell us a little more about your experience?
                </h2>

            </div>
            </article>

            <article className="article-user">
                <div className="text-chat-arq user">
                    <h2 className="new-exp-text">
                        Sure, I'll add them in the file.<span className="actionable">See document</span>
                    </h2>
                </div>
            </article>
            </main>

        </div>
        );
    }
}
export default JobsView;

export {
    JobsView,
    JobsViewEN
}