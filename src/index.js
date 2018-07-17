import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import AppContainer from './AppContainer';
import registerServiceWorker from './registerServiceWorker';
import './Styles/Basic.css';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-122467127-1', {
    debug: true,
    titleCase: false,
});

ReactDom.render((
    <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();
