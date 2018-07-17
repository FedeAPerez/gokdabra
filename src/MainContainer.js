// MainContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
/* *
 * Código de librerías internas
 * */
import LogInView from './RouteLogIn/LogInView';
import SingUpView from './RouteLogIn/SingUpView';
import AdminBusinessView from './RouteAdmin/AdminBusinessView';
import OnboardingView from './RouteOnboarding/OnboardingView';
import ConversationContainer from './RouteConversation/ConversationContainer';
import ComponentsLibraryView from './ComponentsLibrary/ComponentsLibraryView';
import UserAdminView from './UserAdminRoute/UserAdminView';

class MainContainer extends Component {

    render() {
        return (
            <Switch className="section-switch">
                <Route exact path="/" component={LogInView} />
                <Route exact path="/componentslibrary" component={ComponentsLibraryView} />
                <Route exact path="/onboarding" component={OnboardingView} />
                <Route exac path="/login" component={LogInView} />
                <Route exac path="/signup" component={SingUpView} />
                <Route path="/user_admin/" component={UserAdminView} />
                <Route path="/admin/:user" component={AdminBusinessView} />
                <Route path="/:user" component={ConversationContainer} />
            </Switch>
        );
    }
}

export default MainContainer;
