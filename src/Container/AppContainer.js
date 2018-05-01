// AppContainer.js
/*
 Código librerías de externos
 */
import React, { Component } from 'react';

/*
 Código Propio y librerías desarrolladas por KDABRA
 */
//import HeaderContainer from './AppContainer__/HeaderContainer';
import MainContainer from './AppContainer__/MainContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
                {/*<HeaderContainer />*/}
                <section>
                    <MuiThemeProvider>
                        <MainContainer />
                    </MuiThemeProvider>
                </section>
            </main>
        );
    }
}

export default AppContainer;