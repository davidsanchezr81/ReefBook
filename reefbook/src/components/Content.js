import React from 'react'
import './styles/Content.css';
import BackgroundPhoto from '../images/reef1.jpg'

class Content extends React.Component {
    render() {
       return (
          <div className="content">
             {/* <h1>Content</h1> */}
             <div className="backgound-photo">
                <img src={BackgroundPhoto}/>
             </div>
          </div>
       );
    }
 }

 export default Content;