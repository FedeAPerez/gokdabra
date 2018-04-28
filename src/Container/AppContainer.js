import React, { Component } from 'react';

import HeaderContainer from './AppContainer__/HeaderContainer';
import MainContainer from './AppContainer__/MainContainer';

class AppContainer extends Component {
    render() {
        return(
            <main>
                <HeaderContainer />
                <section>
                    <MainContainer />
                </section>
            </main>
        );
    }
}

export default AppContainer;