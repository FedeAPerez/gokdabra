// ConversationMessagesContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { connect } from 'react-redux';
/* *
 * Código de librerías internas
 * */ 
import MessageContainer from './MessageContainer';
import { getMessagesOnboarding } from '../redux/actions/actions';
/* *
 * Hojas de Estilo y Constantes
 * */ 
class ConversationMessagesContainer extends Component {

    constructor(props) {
        super(props);
        
        // Si el usuario no tuvo onboarding hasta el momento
        const { dispatch } = this.props;
        dispatch(getMessagesOnboarding());
    }

    componentDidMount() {

    }

    render() {
        console.log(this.props.messages);
        return(
            <section>
                {
                    (this.props.messages || []).length > 0 &&
                    this.props.messages.map(
                        (element, index) => {
                            console.log(element);
                            return (
                                <MessageContainer 
                                    message={ element } 
                                    key={"conversation-messages" + index} 
                                />
                            );
                        }
                    )
                }
            </section>
        );
    }
}

function mapStateToProps(state) {
    const { messages } = state.conversations;
    return { messages : messages };
}

export default connect(mapStateToProps)(ConversationMessagesContainer);