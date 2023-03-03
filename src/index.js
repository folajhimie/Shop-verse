import React from 'react';
import ReactDOM from 'react-dom';
// import {createRoot} from 'react-dom/client';
// import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextProvider } from './contexts/contextProvider';
// import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root"),

);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
