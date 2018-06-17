import React, { Component } from 'react';
import ConversationHeaderContainer from './ConversationHeaderContainer';
import ConversationMessagesContainer from './ConversationMessagesContainer';

class ConversationContainer extends Component {
    render() {
        return(
            <main>
                <ConversationHeaderContainer />
                <ConversationMessagesContainer />
            </main>
        );
    }
}

export default ConversationContainer;