import React, { Component , useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import NotFoundPage from './pages/404';
import Core from './components/Core';
import Home from './components/Home';
import BecomeAReefer from './components/BecomeAReefer';
import ReefHub from './components/ReefHub';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { apiResponse: '' };
  }

  callAPI() {
    fetch("http://localhost:4000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err);
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {

    return (      
      <Router>
        <Switch>
      {/* <div><h1>Test</h1></div>
          <div><p>{this.state.apiResponse}</p></div> */}
          <Route exact path="/" component={Core} props={this.state}/> 
          <Route exact path="/" render={(props) => (<Core {...props} />)}/>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/BecomeAReefer" component={BecomeAReefer} />
          <Route exact path="/ReefHub" component={ReefHub} />
          <Route exact path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}

export default App;

