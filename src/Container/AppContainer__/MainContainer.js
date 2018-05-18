// MainContainer.js
/*
 Código librerías de externos
 */
import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom'

/*
 Código Propio y librerías desarrolladas por KDABRA
 */
import HomeView from './HomeView/HomeViewB';
import ErrorView from './ErrorView/ErrorView';
import TestView from './MainContainer/TestView';
import BusinessContainer from './MainContainer/BusinessContainer';
import LogInView from './MainContainer/LogInView';

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
