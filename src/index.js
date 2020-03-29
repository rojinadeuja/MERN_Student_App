import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'; //Import <BrowserRouter> object

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render( //Tie the App component with the help of the BrowserRouter object
  <BrowserRouter> 
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
