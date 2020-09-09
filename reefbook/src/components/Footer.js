import React, {Component} from 'react'
import './styles/Footer.css';

class Footer extends Component{
   render() {
      return (
         <div className="footer">
         <a href="#default" className="logo">Logo</a>
         <div className="footer-right">
           <a className="active" href="#instagram">Instagram</a>
           <a href="#twitter">Twitter</a>
           <a href="#facebook">Facebook</a>
         </div>
       </div>
      );
   }
}

export default Footer;