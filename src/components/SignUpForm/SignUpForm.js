import React from "react";
import styled from "styled-components";

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
		background: #b5f7e7;
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
		color: #fff;
		text-transform: uppercase;
		width: 100%;
		height: 50px;
		border-radius: 25px;
		background: #4290f5;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 25px;
		transition: all 0.4s;
	}

	& .login100-form-btn:hover {
		background: #333333;
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
					<span className="login100-form-title"><i>{heading}</i></span>

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

					<div className="container-login100-form-btn">
						<button className="login100-form-btn">Login</button>
					</div>

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
				</form>
			</div>
		</SignInFormStyled>
	);
};
