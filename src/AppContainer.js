// AppContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
/* *
 * Código de librerías internas
 * */ 
import MainContainer from './MainContainer';
import LoadingContanier from './Commons/LoadingContainer';

class AppContainer extends Component {
    handleLoad() {
        setTimeout(function() {
            var element = document.getElementsByClassName('loader');
            element[0].style.display = 'none';
            var elementRoot = document.getElementById('root');
            elementRoot.style.display = 'block';
        }
        , 1000);
    }

    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
    }

    render() {
        return(
            <main>
                <MuiThemeProvider>    
                <LoadingContanier />
                    <MainContainer />
                </MuiThemeProvider>
            </main>
        );
    }
}

export default AppContainer;