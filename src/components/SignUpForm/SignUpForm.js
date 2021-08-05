import React, { useState } from "react";
import styled from "styled-components";
import googleLogo from "../../assets/googlelogo.svg";
import firebase from "../../firebase.config.js";
import { Link } from "react-router-dom";

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
    padding: 2em 2em 2em 2em;
    box-shadow: 10px 10px 5px grey;
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
    font-family: roboto;
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
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
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
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
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

  & .input100:focus + .focus-input100 + .symbol-input100 {
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
    width: 100%;
    height: 42px;
    border-radius: 25px;
    background: #b5f7e7;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 25px;
    transition: all 0.4s;
  }

  & .login100-form-btn:hover {
    background: #ffb61d;
  }

  & .orline {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #000;
    line-height: 0.1em;
    margin: 10px 0 20px;
  }

  & .orline span {
    background: #fff;
    padding: 0 10px;
  }
  & .google-btn {
    cursor: pointer;
    width: auto;
    margin-top: 0.6em;
    height: 42px;
    background-color: white;
    border-radius: 25px;
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
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
      padding-top: 0.6em;
      text-align: center;
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
      background: #1669f2;
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
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isTermsAgreed, setIsTermsAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onGoogleSignUp = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        const userData = {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          phone: user.phoneNumber,
        };
        firebase.firestore().collection("users").add(userData);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const onForgotPassword = () => {
    if (!email) {
      alert("Please enter an email address.");
      return;
    }
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        alert("A password reset link has been sent to your email address.");
      })
      .catch((e) => alert(e.message));
  };

  const onSubmitClick = (e) => {
    e.preventDefault();

    if (heading === "Sign Up") {
      if (!isTermsAgreed) {
        alert("Please accept our terms and conditions to continue.");
        return;
      }
      if (!name.length || !mobile.length || !email.length || !password.length) {
        alert("Please fill all the required details");
        return;
      }
      setIsLoading(true);
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          setIsLoading(false);
          var user = userCredential.user;
          const userData = {
            uid: user.uid,
            displayName: name,
            email: user.email,
            phone: mobile,
          };
          setEmail("");
          setName("");
          setPassword("");
          setMobile("");
          firebase.firestore().collection("users").add(userData);
        })
        .catch((error) => {
          setIsLoading(false);
          setEmail("");
          setName("");
          setPassword("");
          setMobile("");
          alert(error.message);
        });
    } else if (heading === "Sign In") {
      if (!email.length || !password.length) {
        alert("Please enter email/password");
        return;
      }
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  return (
    <SignInFormStyled className="container-login100">
      <div className="wrap-login100">
        <form className="login100-form">
          <span className="login100-form-title">
            {heading === "Sign In" ? (
              <div>
                <b>Welcome Back!</b>
              </div>
            ) : (
              <div>
                <b>Welcome</b>
              </div>
            )}
          </span>
          {heading === "Sign Up" ? (
            <div>
              <div className="wrap-input100 ">
                <input
                  className="input100"
                  type="text"
                  name="name"
                  placeholder="  Name*"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i class="fa fa-user" aria-hidden="true"></i>
                </span>
              </div>

              <div className="wrap-input100 ">
                <input
                  className="input100"
                  type="tel"
                  name="phone_no"
                  placeholder="  Mobile Number*"
                  maxLength="10"
                  onChange={(e) => setMobile(e.target.value)}
                  value={mobile}
                  required
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i class="fa fa-phone-square" aria-hidden="true"></i>
                </span>
              </div>
            </div>
          ) : (
            <div></div>
          )}

          <div className="wrap-input100 ">
            <input
              className="input100"
              type="text"
              name="email"
              placeholder="  Email*"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <span className="focus-input100"></span>
            <span className="symbol-input100">
              <i class="fa fa-envelope fa-1x" aria-hidden="true"></i>
            </span>
          </div>

          <div className="wrap-input100">
            <input
              className="input100"
              type="password"
              name="pass"
              placeholder="  Password*"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <span className="focus-input100"></span>
            <span className="symbol-input100">
              <i class="fa fa-key" aria-hidden="true"></i>
            </span>
          </div>

          {heading === "Sign Up" ? (
            <div className="text-center p-t-12 ">
              <input
                type="checkbox"
                id="tnc"
                name="tnc"
                value="agree"
                onClick={() => setIsTermsAgreed(!isTermsAgreed)}
              />
              <label for="tnc">
                <span className="txt1"> I agree to terms and conditions</span>
              </label>
            </div>
          ) : (
            <div></div>
          )}
          <div className="container-login100-form-btn">
            <button
              className="login100-form-btn"
              onClick={onSubmitClick}
              disabled={isLoading}
            >
              <b>{heading}</b>
            </button>
          </div>
          <div className=" orline text-center p-t-12 ">
            <span>OR</span>
          </div>
          <div class="google-btn" onClick={onGoogleSignUp}>
            <div class="google-icon-wrapper">
              <img class="google-icon" src={googleLogo} alt="google" />
            </div>
            {heading === "Sign In" ? (
              <div>
                <p class="btn-text">
                  <b>Sign in with google</b>
                </p>
              </div>
            ) : (
              <div>
                <p class="btn-text">
                  <b>Sign up with google</b>
                </p>
              </div>
            )}
          </div>

          {heading === "Sign In" ? (
            <div>
              <div className="text-center p-t-12 ">
                <span className="txt1">Forgot</span>
                <br />
                <a
                  className="txt2"
                  onClick={onForgotPassword}
                  style={{ cursor: "pointer" }}
                >
                  Username / Password?
                </a>
              </div>

              <div className="text-center p-t-35">
                <Link className="txt2" to="/register">
                  Create your Account
                </Link>
              </div>
            </div>
          ) : (
            <div className="text-center p-t-35">
              <Link className="link" to="/signin">
                Already a user? Sign in
              </Link>
            </div>
          )}
        </form>
      </div>
    </SignInFormStyled>
  );
};
