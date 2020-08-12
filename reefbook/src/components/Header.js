import React from 'react'
import './styles/Header.css';

class Header extends React.Component {
   render() {
      return (
         <div className="header">
           <div className="header title">
            <h1>Reefbook</h1>
            </div>
            {/* <p> {this.props.name} </p> */}
            <button type="button" class="button1">About us</button>
            <div >
               <div class="menu">
                  <ul class="nav">
                     <li id="nav-products"><a href="#">Products</a></li>
                     <li id="nav-contact"><a href="#">Contact</a></li>
                     <li id="nav-about"><a href="#">About</a></li>
                  </ul>
                  <div class="logo">

                  </div>
               </div>
            </div>
         </div>


      );
   }
}

export default Header;