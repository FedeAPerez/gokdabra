import React, { Component } from 'react';
import ConversationHeader from './ConversationHeader';

class ConversationHeaderContainer extends Component {
    render() {
        if(this.props.isBack) {
            const left = {};
            left.image_link = "/content/images/actions/back.svg";
            left.link = "/";
        }
        
        return(
            <ConversationHeader 
                business= { this.props.business } 
                isBack= { this.props.isBack }
                left= { this.props.left } 
                right= { this.props.right }
                rightAction= { this.props.rightAction }
            />
        );
    }
}

export default ConversationHeaderContainer;