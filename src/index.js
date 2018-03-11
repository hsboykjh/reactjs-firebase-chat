import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import registerServiceWorker from './registerServiceWorker';

const config = {
    apiKey: "******************************",
    authDomain: "******************************",
    databaseURL: "******************************",
    projectId: "******************************",
    storageBucket: "******************************",
    messagingSenderId: "******************************"
};

firebase.initializeApp(config);

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
