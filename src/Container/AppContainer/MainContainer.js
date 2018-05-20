// MainContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom'
/* *
 * Código de librerías internas
 * */  
import HomeView from './Home/HomeViewB';
import ErrorView from './Error/ErrorView';
import BusinessContainer from './Main/BusinessContainer';
import LogInView from './LogIn/LogInView';
import TestView from './Test/TestView';

class MainContainer extends Component {

    render() {
        return (
            <Switch className="section-switch">
                <Route exact path="/" component={HomeView} />
                <Route exact path="/index.html" component={HomeView} />
                <Route path="/404" component={ErrorView} />
                <Route path="/login" component={LogInView} />
                <Route exact path="/dexter" render={(props) =>( <TestView id={"dexter"} />)} />
                <Route path="/:business" component={BusinessContainer} />
            </Switch>
        );
    }
}

export default MainContainer;
