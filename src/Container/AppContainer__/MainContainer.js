// MainContainer.js
/*
 Código librerías de externos
 */
import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom'

/*
 Código Propio y librerías desarrolladas por KDABRA
 */
import HomeContainer from './MainContainer__/HomeContainer';
import BusinessContainer from './MainContainer__/BusinessContainer';
import ErrorContainer from './MainContainer__/ErrorContainer';

class MainContainer extends Component {
    render() {
        return (
            <Switch>
                <Route path='/404' component={ErrorContainer} />
                <Route exact path='/' component={HomeContainer} />
                <Route path='/:business' component={BusinessContainer} />
            </Switch>
        );
    }
}

export default MainContainer;
