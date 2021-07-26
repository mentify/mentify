import React from "react";
import LogInMan from "../../assets/loginman.png";
import { SignInForm } from "../../components/SignUpForm/SignUpForm";
import "./signinpage.css";
import Tilt from 'react-tilt'

export const Signinpage = () => {
	return (
		<div className="limiter">
			<Tilt className="Tilt">
		 		<div className="login100-pic">
					<div className="Tilt-inner"> <img src={LogInMan} alt="man-laptop" /> </div>
		 		</div>
		 	</Tilt>
	 		<SignInForm heading={"Sign In"} />
		</div>
	);
};
