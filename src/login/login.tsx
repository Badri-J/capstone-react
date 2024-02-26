import React, { useState } from "react";
import axios from "axios";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  
  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:2000/login", {
        username,
        password,
      });
      if (response && response.data) {
        setMessage(response.data.message);
        navigate("/homepage");
      } else {
        setMessage("Invalid response from server");
      }
    } catch (error: any) {
      if (error.response && error.response.data) {
        setMessage(error.response.data.message);
      } else {
        setMessage("An error occurred while processing your request");
      }
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-container">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="button-container">
        <button onClick={handleLogin}>Login</button>
      </div>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Login;
