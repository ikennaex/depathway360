import React, { useState } from "react";
import "./login.css";
import { baseUrl } from "../baseUrl";
import axios from "axios"
import { Navigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [redirect, setRedirect] = useState(false)

  async function handleLogin(e) {
    e.preventDefault();

    try {
      await axios.post(`${baseUrl}/login`, {
        username,
        password
      }, {withCredentials: true})

      alert("Login Sucessful")
      setRedirect(true)
    } catch (err) {
      console.log(err)
      alert("Login Failed")
    }
  }

  if (redirect) {
    return (
      <Navigate to = {'/admin'} />
    )
  }
  return (
    <div>
      <div className="authform-div">
        <p className="loginform-txt">Login to your account</p>
        <form className="auth-form" action="" onSubmit={handleLogin}>
          <input
            placeholder="username"
            className="auth-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="password"
            className="auth-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
