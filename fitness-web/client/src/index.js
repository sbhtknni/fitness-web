import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
 // root is the element in the index.html file
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />   
);

reportWebVitals();
