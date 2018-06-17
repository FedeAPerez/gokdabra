import React, { Component } from 'react';
import { connect } from 'react-redux';

import ConversationHeaderContainer from './ConversationHeaderContainer';
import ConversationMessagesContainer from './ConversationMessagesContainer';

class ConversationContainer extends Component {
    render() {
        const left = {};
        left.image_link = "/content/images/HomeButton.svg";
        left.link = "/";

        const right = {};
        right.image_link = "/content/images/actions/info.svg";
        right.link = "/info/" + this.props.business.business_name.toLowerCase();

        return(
            <main>
                <ConversationHeaderContainer 
                    business= { this.props.business }
                    left= { left }
                    right= { right }
                />
                <ConversationMessagesContainer />
            </main>
        );
    }
}

function mapStateToProps(state) {
    const { business } = state.business;
    return { business : business };
}

export default connect(mapStateToProps)(ConversationContainer);