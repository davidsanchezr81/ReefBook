import React, { useState } from 'react';
import Axios from 'axios';

function BecomeAReefer(){

  const[usernameReg, setUsernameReg] = useState("");
  const[emailReg, setEmailReg] = useState(""); 
  const[passwordReg, setPasswordReg] = useState(""); 
  
  const register = () => {
    Axios.post("http://localhost:4000/api/user/register", {
      name: usernameReg,
      email: emailReg,
      password: passwordReg, 
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
        <h1>Become a Reefer</h1>
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

