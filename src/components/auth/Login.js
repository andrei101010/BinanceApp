import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import { loginAction } from "../../store/actions/authAction";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-container">
      <h1>Please sign in by entering details below</h1>
      <input
        type="text"
        placeholder="Enter Email"
        className={"select-box" + (email === "" ? " invalid" : "")}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter Password"
        className={"select-box" + (password === "" ? " invalid" : "")}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="login-btn"
        onClick={() => {
          if (email !== "" && password !== "")
            dispatch(loginAction({ email, password }));
        }}
      >
        Login
      </button>
      <div className="auth-etc">
        <NavLink to="forgot-password">Forgot Password?</NavLink>
        <NavLink to="/register" className="register-btn">
          New user?
        </NavLink>
      </div>
    </div>
  );
};

export default Login;
