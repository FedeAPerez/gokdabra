import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppContainer from './Container/AppContainer';
import './Styles/Basic.css';
import './Styles/BusinessHeader.css';
import './Styles/Messages.css';
import './Styles/Left.css';
import './Styles/LeftTituloLinea.css';
import './Styles/Right.css';
import './Styles/Menu.css';

ReactDom.render((
    <BrowserRouter>
        <AppContainer />
    </BrowserRouter>
), document.getElementById('root'));