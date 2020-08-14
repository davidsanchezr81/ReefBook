import React from 'react'
import './styles/Header.css';

class Header extends React.Component {
   render() {
      return (
         <div className="header">
         <a href="#default" className="logo">Company Logo</a>
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