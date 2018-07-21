import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducers';
import './main.scss';
import './test.css';
import './favicon.ico';
import App from './components/App';

const store = createStore(reducer);

const root = document.querySelector('#app');
ReactDOM.render(<App store={store} />, root);
