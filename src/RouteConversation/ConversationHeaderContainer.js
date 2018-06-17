import React, { Component } from 'react';
import { connect } from 'react-redux';
import ConversationHeader from './ConversationHeader';

class ConversationHeaderContainer extends Component {
    render() {
        return(
            <ConversationHeader business={ this.props.business } />
        );
    }
}

function mapStateToProps(state) {
    const { business } = state.business;
    return { business : business };
}

export default connect(mapStateToProps)(ConversationHeaderContainer);