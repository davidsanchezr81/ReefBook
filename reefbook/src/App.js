import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {apiResponse: "" };
}

callReefBookServices() { 
  fetch("http://localhost:9000/ReefBookServices")
  .then(res => res.text())
  .then(res => this.setState({ apiResponse: res }))
  .then(err => err);
}

componentWillMount(){
  this.callReefBookServices();
}

render() {
  return (
    <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">{this.state.apiResponse}</p>
            </div>
  );
}
}


export default App;
