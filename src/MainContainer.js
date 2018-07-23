// MainContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
/* *
 * Código de librerías internas
 * */
import LogInView from './RouteLogIn/LogInView';
import SingUpView from './RouteLogIn/SingUpView';
import AdminBusinessView from './RouteAdmin/AdminBusinessView';
import OnboardingView from './RouteOnboarding/OnboardingView';
import ConversationContainer from './RouteConversation/ConversationContainer';
import ComponentsLibraryView from './ComponentsLibrary/ComponentsLibraryView';

const fakeAuth = () => {
    const cachedUser = JSON.parse(localStorage.getItem("userSession"));
    if(cachedUser) {
        return true;
    }
    return false;
}
  
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      fakeAuth() === true
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )

class MainContainer extends Component {
    render() {
        return (
            <Switch className="section-switch">
                <Route exact path="/index.html" component={LogInView}/>
                <Route exact path="/" component={LogInView}/>
                <Route exact path="/componentslibrary" component={ComponentsLibraryView} />
                <Route exact path="/onboarding" component={OnboardingView} />
                <Route exact path="/login" component={LogInView} />
                <Route exact path="/signup" component={SingUpView} />
                <PrivateRoute path="/admin/:user" component={AdminBusinessView} />
                <PrivateRoute path="/:user" component={ConversationContainer} />
            </Switch>
        );
    }
}

export default connect()(MainContainer);
