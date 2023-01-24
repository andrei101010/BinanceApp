// import basics
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

// import action
import { registerAction } from "../../store/actions/authAction";

// Signup Page
const SignUp = () => {
  // dispatch for redux
  const dispatch = useDispatch();

  // define states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tel, setTel] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // clear inputs
    setEmail("");
    setPassword("");
    setTel("");
    setUsername("");
  };

  return (
    <div className="signup-container">
      <h1>Sign up</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          className="select-box"
          placeholder="Enter Email"
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="select-box"
          placeholder="Enter Username"
          type="text"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="select-box"
          placeholder="Enter Telephone"
          type="tel"
          value={tel}
          required
          onChange={(e) => setTel(e.target.value)}
        />
        <input
          className="select-box"
          placeholder="Enter Password"
          type="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="signup-btn">Sign Up</button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
