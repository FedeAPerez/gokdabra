import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, history } from './redux/store';
import AppContainer from './AppContainer';
import registerServiceWorker from './registerServiceWorker';
import './Styles/Basic.css';

ReactDom.render((
    <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();
