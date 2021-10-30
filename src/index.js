import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {createStore, compose, applyMiddleware} from 'redux'
// set up store, add thunk, add chrome dev tools
import {reducer} from './redux/reducer'
// got to build this
import {Provider} from 'react-redux'
// get redux
import thunk from 'redux-thunk'
// get ability to make async actions for redux
import {BrowserRouter as Router} from 'react-router-dom'
// gives me router

const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
