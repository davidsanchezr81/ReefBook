import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Slider from './components/Slider';
import Tank1 from './images/Tank1.jpg';
import Tank2 from './images/Tank2.jpg';
import Tank3 from './images/Tank3.jpg';
import Tank4 from './images/Tank4.jpg';
// import './App.css';


const images = [Tank1,Tank2,Tank3,Tank4]

  
 class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }
    // ------ Service connection ------
    // callReefBookServices() {
    //     fetch("http://localhost:9000/ReefBookServices")
    //         .then(res => res.text())
    //         .then(res => this.setState({ apiResponse: res }))
    //         .then(err => err);
    // }

    // componentWillMount() {
    //     this.callReefBookServices();
    // }
    render() {
        return (
            
            <div>               
               <div >
                <Header />
            </div>
                <div><Slider  slides={images} /></div>
                <div >
                <Footer />
            </div>                
            </div>
        );
    }
}


export default App;

