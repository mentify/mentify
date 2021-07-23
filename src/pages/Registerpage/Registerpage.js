import React from "react";
import LogInWoman from "../../assets/loginwoman.png";
import { SignInForm } from "../../components/SignUpForm/SignUpForm";
import ".././Signinpage/signinpage.css";
import Tilt from 'react-tilt'

export const Registerpage = () => {
	return (
		<div className="limiter">
			<Tilt className="Tilt">
		 		<div className="login100-pic">
					<div className="Tilt-inner"> <img src={LogInWoman} alt="man-laptop" /> </div>
		 		</div>
		 	</Tilt>
			<SignInForm heading={"Register"} />
			<div className="wrap-input100">
				<input
						className="input100"
						type="text"
						name="name"
						placeholder="Name"
					/>
				<span className="focus-input100"></span>
				<span className="symbol-input100"></span>
			</div>

		</div>
	);
};
