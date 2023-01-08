import React from 'react';
import ReactDOM from 'react-dom';
import "antd/dist/antd.css";
// import './index.css';
import './index2.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // <React.Fragment>
  //   <h1>Hello World</h1>
  //   <h2>Sub toto heading</h2>
  // </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
