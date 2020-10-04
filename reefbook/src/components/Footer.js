import React, {Component} from 'react'
import './styles/Footer.css';

class Footer extends Component{
   render() {
      return (
         <div className="footer">
         <div className="footer-center">
            <div style={{"padding-right":"150px"}}><a href="#instagram" className="fa fa-instagram" ></a></div>
            <div><a href="#twitter" className="fa fa-twitter"></a></div>
            <div style={{"padding-left":"150px"}}><a href="#facebook" className="fa fa-facebook" style={{}}></a></div>       
         </div>
       </div>
      );
   }
}

export default Footer;