// MainContainer.js
/*
 Código librerías de externos
 */
import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom'

/*
 Código Propio y librerías desarrolladas por KDABRA
 */
import HomeView from './MainContainer__/HomeViewB';
import TestView from './MainContainer__/TestView';
import BusinessContainer from './MainContainer__/BusinessContainer';
import ErrorContainer from './MainContainer__/ErrorContainer';
import LoginContainer from './MainContainer__/LoginContainer';

class MainContainer extends Component {

    render() {
        var dexterProps = {
            id:"dexter"
        }

        var pruneProps = {
            id:"prune"
        };
        return (
            <Switch className="section-switch">
                <Route path="/login" component={LoginContainer} />
                <Route path="/404" component={ErrorContainer} />
                <Route path="/dexter" render={(props) =>( <TestView id={"dexter"} />)} />
                
                <Route path="/prune" render={(props) =>( <TestView id={"prune"} />)} />
                <Route exact path="/" component={HomeView} />
                <Route exact path="/index.html" component={HomeView} />
                <Route path="/:business" component={BusinessContainer} />
            </Switch>
        );
    }
}

export default MainContainer;
