import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom'


import HomeContainer from './MainContainer__/HomeContainer';
import BusinessContainer from './MainContainer__/BusinessContainer';

class MainContainer extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={HomeContainer} />
                <Route path='/:business' component={BusinessContainer} />
            </Switch>
        );
    }
}

export default MainContainer;
