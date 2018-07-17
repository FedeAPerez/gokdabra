import React, { Component } from 'react';
import { connect } from 'react-redux';

import ConversationHeaderContainer from './ConversationHeaderContainer';
import ConversationMessagesContainer from './ConversationMessagesContainer';

import { visitUser } from '../redux/actions/actions';
import { fbGetUser  } from '../firebase';

class ConversationContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userOb : null
        };

        const userPogo = fbGetUser(props.match.params.user);
        userPogo.then(
            (snapshot) => { 
                const {dispatch} = this.props;
                dispatch(visitUser(snapshot.val()));
                this.setState({ userOb : snapshot.val() });
        })
        .catch((err) => {
            console.log(err);
        });
    }

    render() {
        if(this.props.visitedUser) {

            const left = {};
            left.image_link = "/content/images/HomeButton.svg";
            left.link = "/";
    
            const right = {};
            right.image_link = "/content/images/actions/info.svg";
            right.link = "/info/" + this.props.visitedUser.user_name.toLowerCase();
    
            return(
                <main>
                    <ConversationHeaderContainer 
                        user= { this.props.visitedUser }
                        left= { left }
                        right= { right }
                    />
                    <ConversationMessagesContainer 
                        isBusiness={ this.props.visitedUser.isBusiness }
                    />
                    
                </main>
            );
        }
        else
            return null;
    }
}

function mapStateToProps(state) {
    const { visitedUser } = state.visitedUser;
    return { visitedUser };
}

export default connect(mapStateToProps)(ConversationContainer);