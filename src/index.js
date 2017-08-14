import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Docs from './docs/docs';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/highlight.js/styles/ocean.css';
import './index.css';

ReactDOM.render( < Docs / > , document.getElementById('root'));
registerServiceWorker();