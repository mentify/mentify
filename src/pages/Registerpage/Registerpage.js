import React from "react";
import LogInWoman from "../../assets/loginwoman.png";
import { SignInForm } from "../../components/SignUpForm/SignUpForm";
import ".././Signinpage/signinpage.css";

export const Registerpage = () => {
  return (
    <div className="limiter">
      <div className="login100-pic">
        <img src={LogInWoman} alt="woman-laptop" />
      </div>
      <SignInForm heading={"REGISTER"} />
    </div>
  );
};
