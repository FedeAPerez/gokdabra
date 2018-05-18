// AppContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
/* *
 * Código de librerías internas
 * */ 
import MainContainer from './AppContainer__/MainContainer';

class AppContainer extends Component {
    constructor(props) {
        super(props);
    }

    handleLoad() {
        setTimeout(function() {
            var element = document.getElementsByClassName('loader');
            element[0].style.display = 'none';
            var elementRoot = document.getElementById('root');
            elementRoot.style.display = 'block';
        }.bind(this)
        , 1000);
    }

    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
    }

    render() {
        return(
            <main>
                <MuiThemeProvider>
                    <MainContainer />
                </MuiThemeProvider>
            </main>
        );
    }
}

export default AppContainer;