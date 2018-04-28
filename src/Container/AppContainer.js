import React, { Component } from 'react';

import HeaderContainer from './AppContainer__/HeaderContainer';
import MainContainer from './AppContainer__/MainContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class AppContainer extends Component {
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