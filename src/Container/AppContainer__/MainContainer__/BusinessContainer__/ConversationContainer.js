/*
 Código librerías de externos
 */
import React, { Component } from 'react';

/*
 Código Propio y librerías desarrolladas por KDABRA
 */
import MessagesAPI from '../../../../API/MessagesAPI';
import MessageContainer from './ConversationContainer__/MessageContainer';
import MessageHandlerContainer from './ConversationContainer__/MessageHandlerContainer';

class ConversationContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'messageList' : [

			]
        }
    }
    getNextMessage() {
        var m = MessagesAPI.getMessage();
		this.state.messageList.push(m);
		this.setState(this.state);
	}
    
    
    componentDidMount() {
		this.getNextMessage();
    }

    render() {
        return (
            <section>
                <section className="messages-container">
                {
                    this.state.messageList.length && this.state.messageList.map(
                        (element, key) => {
                            return (<MessageContainer messageOb = {element} key={"msg-component-" + key} />)
                        }
                    )
                }
                </section>
                <section className="message-handler-container">
                    <MessageHandlerContainer />
                </section>
            </section>
        );
    }
}

export default ConversationContainer;
