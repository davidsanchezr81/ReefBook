import React, { Component, Fragment, useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Slider from './components/Slider';
import Content from './components/Content';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import Tank1 from './images/Tank1.jpg';
import Tank2 from './images/Tank2.jpg';
import Tank3 from './images/Tank3.jpg';
import Tank4 from './images/Tank4.jpg';
import NotFoundPage from './pages/404';
import Core from './components/Core';

class App extends Component{
  render() {
// function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Core}/>
        <Route exact path="/hola" component={Navbar}/>
        <Route exact path="/404" component={NotFoundPage}/>
        <Redirect to="/404"/>  
    </Switch>
    </Router> 
  );
}
}


export default App;

