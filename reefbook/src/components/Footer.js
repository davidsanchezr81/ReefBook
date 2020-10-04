import React, {Component} from 'react'
import './styles/Footer.css';

class Footer extends Component{
   render() {
      return (
         <div className="footer">
         <a href="#default" className="logo"></a>
         <div className="footer-center">
           <a href="#instagram" className="fa fa-instagram"></a>
           <a href="#twitter" className="fa fa-twitter"></a>
           <a href="#facebook" className="fa fa-facebook"></a>
         </div>
       </div>
      );
   }
}

export default Footer;