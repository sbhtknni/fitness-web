import logo from './logo.svg';
import './assets/App.css';
import Header from './components/Header.js';
import React, { Component, useState } from 'react';
import { BrowserRouter , Router, Link, Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
      <div>
          <h1>hiifi</h1>
          <Link to="/">  </Link>
          <Link to="/blogPage"> <blogPage/> </Link>
        </div>
        <Routes>
          <Route path="/" exact>
          <homePage/>
          </Route>
          
          <Route path="/blogPage">
            <blogPage />
          </Route>
          
        </Routes>
      </Router>
      
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/Apppppp.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Header />
        <homePage />
        <blogPage />
        <h1>fdsgs</h1>
        <blogPage></blogPage>
      </header>
    </div>
  );
}

export default App;
