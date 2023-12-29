import React, { useState } from "react";
import "./Auth.css";
import AboutAuth from "./AboutAuth";
import { signup, login } from "../../actions/auth";
import icon from "../../assets/icon.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Auth = () => {
  const [isSignUp, setIsSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSwitch = () => {
    setIsSignup(!isSignUp);
  };
  const paraCss = {
    color: "#666767",
    fontSize: "13px",
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email && !password) {
      alert("Enter ur email and password!");
    }

    if (isSignUp) {
      if (!name) {
        alert("Please enter your name to continue...");
      }
      dispatch(signup({ name, email, password }, navigate));
    } else {
      dispatch(login({ email, password }, navigate));
    }
    // console.log({ name, email, password });
  };
  return (
    <section className="auth-section">
      {isSignUp && <AboutAuth />}
      <div className="auth-container-2">
        {!isSignUp && (
          <img src={icon} alt="stack-overflow" className="login-logo" />
        )}
        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <label htmlFor="name">
              <h1>Display name</h1>
              <input
                type="text"
                name="name"
                id="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
          )}
          <label htmlFor="email">
            <h4>Email</h4>
            <input
              type="email"
              name="name"
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label htmlFor="password">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>Password</h4>
              {!isSignUp && (
                <p style={{ color: "#007ac6", fontSize: "13px" }}>
                  Forgot Password?
                </p>
              )}
            </div>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => {
                SetPassword(e.target.value);
              }}
            />
            {isSignUp && (
              <p style={{ color: paraCss.color, fontSize: paraCss.fontSize }}>
                Password contains at least 8 characters
              </p>
            )}
          </label>
          {isSignUp && (
            <label htmlFor="check" className=" check-ctn">
              <input type="checkbox" id="check" />
              <p style={{ color: paraCss.color, fontSize: paraCss.fontSize }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
                Adipisci blanditiis et eos obcaecati, similique laboriosam ut.{" "}
                <br />
                Officiis dolorum doloremque aliquam eligendi consequuntur.
              </p>
            </label>
          )}
          <button type="submit" className="auth-btn ">
            {isSignUp ? "Sign up" : "Log in"}
          </button>
          {isSignUp && (
            <p style={{ color: paraCss.color, fontSize: paraCss.fontSize }}>
              By Clicking "Sign up",you agree to our{" "}
              <span style={{ color: "#007ac6" }}>
                terms of <br /> service
              </span>{" "}
              ,<span style={{ color: "#007ac6" }}>privacy policy</span> and{" "}
              <span style={{ color: "#007ac6" }}>cookies policy</span>
            </p>
          )}
        </form>
        <p>
          {isSignUp ? "already have an account ?" : "Don't have an account?"}
          <button
            type="button"
            className=" handle-switch-btn"
            onClick={handleSwitch}
          >
            {isSignUp ? "Log in " : "Sign up"}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Auth;
