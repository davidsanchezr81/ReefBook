import React, { useState } from 'react';



function BecomeAReefer(){

  const[usernameReg, setUsernameReg] = useState("");
  const[emailReg, setEmailReg] = useState(""); 
  const[passwordReg, setPasswordReg] = useState(""); 

  const register = () => {
    fetch("http://localhost4000/api/register")
    .then(res => res.text())
    .then(res => this.setState({ 
      name: usernameReg,
      email: emailReg,
      password: passwordReg, 
    }))
    .catch(err => err);   
  }

  return (
    <div>
        <h1>Become a Reefer</h1>
        {/* <h2>{this.state.apiResponse}</h2> */}
        <div className="registration">
        <label>Username</label>
        <input type="text" onChange={(e) => {setUsernameReg(e.target.value);}} /> 
        <label>Email</label>
        <input type="text" onChange={(e) => {setEmailReg(e.target.value);}} /> 
        <label>Password</label>
        <input type="text" onChange={(e) => {setPasswordReg(e.target.value);}} />
        <button onClick={register} >Register</button>
        </div>
    </div>
    );
  
    
  }

  

export default BecomeAReefer;

