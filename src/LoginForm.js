import React from "react";
import "./LoginForm.css";

const LoginForm = () => {
  return (
    <div className="login-form">
      <div className="input-group">
        <label className="input-label" htmlFor="email">
          Email
        </label>
        <input className="input-field" type="email" id="email" />
      </div>
      <div className="input-group">
        <label className="input-label" htmlFor="password">
          Password
        </label>
        <input className="input-field" type="password" id="password" />
      </div>
      <button className="submit-button">Sign in</button>
    </div>
  );
};

export default LoginForm;
