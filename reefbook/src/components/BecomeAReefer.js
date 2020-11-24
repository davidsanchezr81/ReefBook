import React, { useState } from 'react';

function BecomeAReefer(){

  const[usernameReg, setUsernameReg] = useState("");
  const[passwordReg, setPasswordReg] = useState(""); 

  return (
    <div>
        <h1>Become a Reefer</h1>
        {/* <h2>{this.state.apiResponse}</h2> */}
        <div className="registration">
        <label>Username</label>
        <input type="text" onChange={(e) => {setUsernameReg(e.target.value);}} /> 
        <label>Password</label>
        <input type="text" onChange={(e) => {setPasswordReg(e.target.value);}} />
        <button>Register</button>
        </div>
    </div>
    );
  
    
  }

  

export default BecomeAReefer;

