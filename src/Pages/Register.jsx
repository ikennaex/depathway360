import React, { useState } from "react";
import axios from "axios";
import {baseUrl} from "../baseUrl"

const Register = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  async function register(e) {
    e.preventDefault()
    
    try {

      await axios.post(`${baseUrl}/register`, {
        username,
        password 
      })

      alert("Registration successful")
    } catch (e) {
      alert ("Registration failed")
    }


  }

  return (
    <div>
      <div className="authform-div">
        <p className="loginform-txt">Register</p>
        <form className="auth-form" onSubmit={register}>
          <input
            value={username}
            placeholder="username"
            className="auth-input"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            value={password}
            placeholder="password"
            className="auth-input"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
