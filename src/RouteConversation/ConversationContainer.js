import React, { Component } from 'react';
import { connect } from 'react-redux';

import ConversationHeaderContainer from './ConversationHeaderContainer';
import ConversationMessagesContainer from './ConversationMessagesContainer';

import { BusinessAPI } from  '../API';
import { selectBusiness } from '../redux/actions/actions';
class ConversationContainer extends Component {
    constructor(props) {
        super(props);
        
        const businessPojo = BusinessAPI.getBusinessByName(props.match.params.business);
        const { dispatch } = this.props;
        dispatch(selectBusiness(businessPojo));
    }

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
                <ConversationMessagesContainer 
                />
                
            </main>
        );
    }
}

function mapStateToProps(state) {
    const { business } = state.business;
    return { business : business };
}

export default connect(mapStateToProps)(ConversationContainer);