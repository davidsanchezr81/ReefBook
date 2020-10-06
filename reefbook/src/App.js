import React, {Component} from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import NotFoundPage from './pages/404';
import Core from './components/Core';
import Home from './components/Home';
import BecomeAReefer from './components/BecomeAReefer';
import ReefHub from './components/ReefHub';

class App extends Component{
  render() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Core}/>
        <Route exact path="/Home" component={Home}/>
        <Route exact path="/BecomeAReefer" component={BecomeAReefer}/>
        <Route exact path="/ReefHub" component={ReefHub}/>
        <Route exact path="/404" component={NotFoundPage}/>
        <Redirect to="/404"/>  
    </Switch>
    </Router> 
    );
  }
}

export default App;

