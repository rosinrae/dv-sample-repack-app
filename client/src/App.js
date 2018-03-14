import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, Switch} from 'react-router-dom';
import About from './components/About.js';
import Home from './components/Home.js';
import Err404 from './components/Err404.js';
import NavBar from './components/NavBar';


const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route component={Err404} />
    </Switch>
  </div>
)

export default App;
