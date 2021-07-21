import React from "react";
import LogInWoman from "../../assets/loginwoman.png";
import './registerpage.css';

export const Registerpage = () => {
    return (
    <div className="limiter">
        <div className= "login100-pic">
            <img src={LogInWoman} alt="man-laptop"/>
        </div>
        <div className="container-login100">
            <div className="wrap-login100">
                <form className="login100-form">
                    <span className="login100-form-title">
                        Register 
                    </span>
                    <div className="wrap-input100 ">
                        <input className="input100" type="text" name="name" placeholder="Name"/>
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                        </span>
                    </div>


                    <div className="wrap-input100 ">
                        <input className="input100" type="text" name="email" placeholder="Email"/>
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                        </span>
                    </div>

                    <div className="wrap-input100">
                        <input className="input100" type="password" name="pass" placeholder="Password"/>
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                        </span>
                    </div>

                      <div className="wrap-input100">
                        <input className="input100" type="date" name="dob" placeholder="Date of Birth"/>
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                        </span>
                    </div>

                    <div className="container-login100-form-btn">
                        <button className="login100-form-btn">
                            Register
                        </button>
                    </div>

                    <div className="text-center p-t-12 ">
                        <span className="txt1">
                            Forgot    
                        </span>
                        <br/>
                        <a className="txt2" href="#">
                            Username / Password?
                        </a>
                    </div>

                    <div className="text-center p-t-50">
                        <a className="txt2" href="#">
                            Create your Account
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};
