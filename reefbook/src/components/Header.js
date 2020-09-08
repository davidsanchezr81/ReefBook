import React, {Component} from 'react'
import './styles/Header.css';

class Header extends Component{
   render() {
      return (
         <div className="header">
         <a href="#default" className="logo">Logo</a>
         <div className="header-right">
           <a className="active" href="#home">Home</a>
           <a href="#contact">Contact</a>
           <a href="#about">About</a>
         </div>
       </div>
      );
   }
}

export default Header;