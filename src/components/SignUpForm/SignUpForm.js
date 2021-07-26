import React from "react";
import styled from "styled-components";
import googleLogo from "../../assets/googlelogo.svg";

const SignInFormStyled = styled.div`
	& a {
		font-family: "Poppins", sans-serif;
		font-weight: 400;
		font-size: 1rem;
		line-height: 1.7;
		color: #666666;
		margin: 0px;
		transition: all 0.4s;
	}

	& a:focus {
		outline: none !important;
	}

	& a:hover {
		text-decoration: none;
		color: #57b846;
	}

	& p {
		font-family: "Poppins", sans-serif;
		font-weight: 400;
		font-size: 1rem;
		line-height: 1.7;
		color: #666666;
		margin: 0px;
	}

	& input {
		outline: none;
		border: none;
	}

	& input::-webkit-input-placeholder {
		color: #999999;
	}
	& input:-moz-placeholder {
		color: #999999;
	}
	& input::-moz-placeholder {
		color: #999999;
	}
	& input:-ms-input-placeholder {
		color: #999999;
	}

	& button {
		outline: none !important;
		border: none;
		background: transparent;
	}

	& button:hover {
		cursor: pointer;
	}

	& iframe {
		border: none !important;
	}

	& .txt1 {
		font-family: "Poppins", sans-serif;
		font-weight: 400;
		font-size: 1rem;
		line-height: 1.5;
		color: #999999;
	}

	& .txt2 {
		font-family: "Poppins", sans-serif;
		font-weight: 400;
		font-size: 1rem;
		line-height: 1.5;
		color: #666666;
	}

	& {
		width: 30%;
		height: 90vh;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
		background: white;
	}

	& .wrap-login100 {
		width: 95%;
		border: 2px solid black;
		background: white;
		border-radius: 10px;
		overflow: hidden;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		padding: 3em 2em 3em 2em;
	}

	& .p-t-12 {
		padding-top: 1em;
	}
	& .p-t-35 {
		padding-top: 35px;
	}

	& .login100-form {
		width: 90%;
	}

	& .text-center {
		text-align: center;
	}

	& .login100-form-title {
		font-family: ABeeZee;
		font-size: 2rem;
		color: black;
		line-height: 1.2;
		text-align: center;
		width: 100%;
		display: block;
		padding-bottom: 54px;
	}

	& .wrap-input100 {
		position: relative;
		width: 100%;
		z-index: 1;
		margin-bottom: 10px;
	}

	& .input100 {
		font-family: "Poppins", sans-serif;
		font-weight: 500;
		font-size: 0.8rem;
		line-height: 1.5;
		color: #666666;
		display: block;
		width: 100%;
		background: #e6e6e6;
		height: 50px;
		border-radius: 25px;
		padding: 0 4em 0 4em;
	}

	& .focus-input100 {
		display: block;
		position: absolute;
		border-radius: 25px;
		bottom: 0;
		left: 0;
		z-index: -1;
		width: 100%;
		height: 100%;
		box-shadow: 0px 0px 0px 0px;
		color: rgba(87, 184, 70, 0.8);
	}

	& .input100:focus + .focus-input100 {
		animation: anim-shadow 0.5s ease-in-out forwards;
	}

	& .symbol-input100 {
		font-size: 15px;
		display: flex;
		align-items: center;
		position: absolute;
		border-radius: 25px;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		padding-left: 35px;
		pointer-events: none;
		color: #666666;
		transition: all 0.4s;
	}

	@-webkit-keyframes anim-shadow {
		to {
			box-shadow: 0px 0px 70px 25px;
			opacity: 0;
		}
	}

	@keyframes anim-shadow {
		to {
			box-shadow: 0px 0px 70px 25px;
			opacity: 0;
		}
	}

	& .input100:focus + & .focus-input100 + & .symbol-input100 {
		color: #57b846;
		padding-left: 28px;
	}

	& .container-login100-form-btn {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		padding-top: 20px;
	}

	& .login100-form-btn {
		font-family: "Montserrat", sans-serif;
		font-size: 15px;
		line-height: 1.5;
		color: black;
		text-transform: uppercase;
		width: 100%;
		height: 50px;
		border-radius: 25px;
		background: #B5F7E7;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 25px;
		transition: all 0.4s;
	}

	& .login100-form-btn:hover {
		background: #FFB61D;
	}

	& .google-btn {
		width: auto;
		margin-top:0.6em;
		height: 42px;
		background-color: white;
		border-radius: 25px;
		box-shadow: 0 3px 4px 0 rgba(0,0,0,.25);
	& .google-icon-wrapper {
		position: absolute;
		margin-top: 1px;
		margin-left: 1px;
		width: 40px;
		height: 40px;
		border-radius: 25px;
		background-color: white;
	}
	& .google-icon {
		position: absolute;
		margin-top: 11px;
		margin-left: 11px;
		width: 18px;
		height: 18px;
	}
	& .btn-text {
		padding-top:0.6em;
		text-align:center;
		margin: 11px 11px 0 0;
		color: #4285f4;
		font-size: 14px;
		letter-spacing: 0.2px;
		font-family: "Roboto";
	}

	&:hover {
		box-shadow: 0 0 6px #4285f4;
	}

	&:active {
		background: #1669F2;
}
}
	@media (max-width: 1290px) {
		& {
			width: 35%;
		}
	}

	@media (max-width: 1290px) {
		& {
			width: 35%;
		}
	}

	@media (max-width: 992px) {
		.login100-pic {
			width: 45%;
		}
		& {
			width: 40%;
		}
	}

	@media (max-width: 768px) {
		.login100-pic {
			display: none;
		}

		& {
			width: 55vw;
		}

		.login100-form {
			width: 100%;
		}
	}

	@media (max-width: 576px) {
		& {
			width: 80vw;
		}
	}
	
`;

export const SignInForm = ({ heading }) => {
	return (
		<SignInFormStyled className="container-login100">
			<div className="wrap-login100">
				<form className="login100-form">
					<span className="login100-form-title"><b><i>{heading}</i></b></span>
					{ heading=== 'Sign Up'?
					<div>
						<div className="wrap-input100 ">
							<input
								className="input100"
								type="text"
								name="name"
								placeholder="Name"
							/>
							<span className="focus-input100"></span>
							<span className="symbol-input100"></span>
						</div>

						<div className="wrap-input100 ">
							<input
								className="input100"
								type="tel"
								name="phone_no"
								placeholder="Mobile Number"
								maxlength="10"
							/>
							<span className="focus-input100"></span>
							<span className="symbol-input100"></span>
						</div>
					</div>
					:
					<div>
					</div>
					}

					<div className="wrap-input100 ">
						<input
							className="input100"
							type="text"
							name="email"
							placeholder="Email"
						/>
						<span className="focus-input100"></span>
						<span className="symbol-input100"></span>
					</div>

					<div className="wrap-input100">
						<input
							className="input100"
							type="password"
							name="pass"
							placeholder="Password"
						/>
						<span className="focus-input100"></span>
						<span className="symbol-input100"></span>
					</div>
					<div className="text-center p-t-12 ">
						<input type="checkbox" id="tnc" name="tnc" value="agree"/>	
							<label for="tnc"> 
							<span className="txt1"> I agree to terms and conditions
							</span>
							</label>
				
						</div>
					<div className="container-login100-form-btn">
						<button className="login100-form-btn"><b>{heading}</b></button>
					</div>

					<div class="google-btn">
						<div class="google-icon-wrapper">
								<img class="google-icon" src={googleLogo}/>
						</div>
						{heading==="Sign In"?
							<div>
								<p class="btn-text"><b>Sign in with google</b></p>
							</div>
							:<div>
								<p class="btn-text"><b>Sign up with google</b></p>
							</div>
						}
					</div>

					{ heading==="Sign In"?
						<div>
							<div className="text-center p-t-12 ">
								<span className="txt1">Forgot</span>
								<br />
								<a className="txt2" href="#">
									Username / Password?
								</a>
							</div>

							<div className="text-center p-t-35">
								<a className="txt2" href="#">
									Create your Account
								</a>
							</div>
						</div>
					:
					<div className="text-center p-t-35">
						<a className="txt2" href="#">
								Already a user? Sign in
						</a>
					</div>
					}
					
				</form>
			</div>
		</SignInFormStyled>
	);
};
