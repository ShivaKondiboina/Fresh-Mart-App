import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getUser, setCurrentUser } from "./store";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = getUser(email, password);

    if (user) {
      setCurrentUser(user);
      navigate("/profile");
    } else {
      alert("Invalid Email or Password!");
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?{" "}
        <Link to="/register" className="link-btn">Register Here</Link>
      </p>
    </div>
  );
};

export default Login;