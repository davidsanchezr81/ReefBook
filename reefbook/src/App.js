import React, { Component } from 'react';
import Header from './components/Header'
import Slider from './components/Slider';
// import logo from './logo.svg';
// import './App.css';


const images = [
    'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
    'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
    'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80'
  ]
  
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
                {/* <Header
                    name="David"
                />
                <div><Content /></div> */}
                <div><Slider  slides={images} /></div>
            </div>
        );
    }
}


export default App;

