// MainContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
/* *
 * Código de librerías internas
 * */
import HomeView from './RouteHome/HomeViewB';
import ErrorView from './RouteError/ErrorView';
import BusinessContainer from './RouteMain/BusinessContainer';
import TestView from './RouteMain/TestView';
import LogInView from './RouteLogIn/LogInView';
import LogInCallbackView from './RouteLogIn/LogInCallbackView';
import AdminBusinessView from './RouteAdmin/AdminBusinessView';
import OnboardingView from './RouteOnboarding/OnboardingView';
import BusinessMessagesContainer from './RouteNewMessages/BusinessMessagesContainer';

class MainContainer extends Component {

    render() {
        return (
            <Switch className="section-switch">
                <Route exact path="/" component={HomeView} />
                <Route exact path="/onboarding" component={OnboardingView} />
                <Route exact path="/index.html" component={HomeView} />
                <Route path="/404" component={ErrorView} />
                <Route exac path="/login/callback" component={LogInCallbackView} />
                <Route exac path="/login" component={LogInView} />
                <Route exact path="/dexter" render={(props) =>( <TestView id={"dexter"} />)} />
                <Route path="/admin/:business" component={AdminBusinessView} />
                <Route path="/:business/messages" component={BusinessMessagesContainer} />
                <Route path="/:business" component={BusinessContainer} />
            </Switch>
        );
    }
}

export default MainContainer;
