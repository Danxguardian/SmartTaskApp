import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/css/styles.css'

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
  }
 

const target = document.getElementById('app');
ReactDOM.render(<App />, target);

