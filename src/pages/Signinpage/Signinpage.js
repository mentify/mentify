import React from "react";
import LogInMan from "../../assets/loginman.png";
import './signinpage.css';

export const Signinpage = () => {
	return (
	<div className="limiter">
		<div className= "login100-pic">
			<img src={LogInMan} alt="man-laptop"/>
		</div>
		<div className="container-login100">
			<div className="wrap-login100">
				<form className="login100-form">
					<span className="login100-form-title">
						Member Login
					</span>

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
					
					<div className="container-login100-form-btn">
						<button className="login100-form-btn">
							Login
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
