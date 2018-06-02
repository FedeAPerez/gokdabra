import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppContainer from './AppContainer';
import registerServiceWorker from './registerServiceWorker';
import './Styles/Basic.css';

ReactDom.render((
    <BrowserRouter>
        <AppContainer />
    </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();
