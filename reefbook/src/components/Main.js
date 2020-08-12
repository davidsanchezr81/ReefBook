import React from 'react'
import leatherCoral from '../images/leathercoral.jpg'
import reef1 from '../images/reef1.jpg'
import './styles/Main.css';

class Main extends React.Component {
    render() {
        return (
            <div className="main  Main-Card"connected>
                <div>
                    <div>
                        <div className="col-6">
                            {/* <img src={leatherCoral} className="img"/> */}
                            <h1>Alleluya</h1>
                        </div>
                        <div>
                            <h1>Leather coral</h1>
                        </div>
                    </div>
                </div>
            </div>
            )
    }
}


export default Main;