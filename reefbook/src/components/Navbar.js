import React from 'react';
import Logo from "../images/logo.svg";
import Sticky from './styles/Navbar.css'

const Navbar = ({ }) => {
    return (      
      <div className="sticky-inner">  
      <div className="header">
         <a href="#default" className="logo">Reefbook</a>               
          <div className="navbar-right">
           <a className="active" href="#home">Home</a>
           <a href="#contact">Contact</a>
           <a href="#about">About</a>
         </div> 
         </div>      
      </div>
    )};
    export default Navbar;
