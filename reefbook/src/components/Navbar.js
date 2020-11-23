import React from 'react';
import Logo from "../images/logo.svg";
import Sticky from './styles/Navbar.css';

const Navbar = ({ }) => {
    return (      
      <div className="sticky-inner">  
      <div className="header">
         <a href="#default" className="logo">Reefbook</a>               
          <div className="navbar-right">
           <a className="active" href="/Home">Home</a>
           <a href="/BecomeAReefer">Become a Reefer</a>
           <a href="/ReefHub">Reef Hub</a>
         </div> 
         </div>      
      </div>
    )};
    export default Navbar;
