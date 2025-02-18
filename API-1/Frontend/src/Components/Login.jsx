import axios from 'axios';
import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'
export default function Login() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate = useNavigate()

  const handleAdd = async(event) => {
    event.preventDefault();
    const response = await axios.post('http://localhost:1008/login',{email,password})
    if(response.data.token){
      Cookies.set("token", response.data.token);
      navigate("/Index");
    }
  };

  return (
    <>
      <center> <br /><br />
        <h1>Login</h1> <br />
        <br />
        <br />
        <form onSubmit={handleAdd}>
          <input type="text" placeholder="Enter Email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} required /> <br />
          <br />
          <input type="text" placeholder="Enter Password" name='password' value={password} onChange={(e)=>setPassword(e.target.value)} required /> <br />
          <br />
          <button id="bt1" type="submit">
            Login
          </button>
        </form> <br />
        <p className="p1">You've First time visit, click <Link to={"/"}>Register</Link></p>
      </center>
    </>
  )
}