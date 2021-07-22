import React from "react";
import LogInMan from "../../assets/loginman.png";
import { SignInForm } from "../../components/SignUpForm/SignUpForm";
import "./signinpage.css";

export const Signinpage = () => {
  return (
    <div className="limiter">
      <div className="login100-pic">
        <img src={LogInMan} alt="man-laptop" />
      </div>
      <SignInForm heading={"USER LOGIN"} />
    </div>
  );
};
