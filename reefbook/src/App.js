import React, { Component } from 'react';
import Main from './components/Main'
import Header from './components/Header'
import Content from './components/Content'
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callReefBookServices() {
        fetch("http://localhost:9000/ReefBookServices")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .then(err => err);
    }

    componentWillMount() {
        this.callReefBookServices();
    }
    render() {
        return (
            
            <div>
                <Header
                    name="David"
                />,
                <div><Content /></div>
            </div>
        );
    }
}


export default App;

