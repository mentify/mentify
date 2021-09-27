import React from "react";
import styled from "styled-components";
import love from "../../assets/heart.png";

const StyledFooter = styled.div`
  & {
    display: flex;
    flex-direction: column;
    margin-top: auto;
    background: #b5f7e7;
    padding-left: 3em;
    padding-right:3em;
    padding-top:0.7em;
    width: 100%;
    box-sizing: border-box;
  }
  ul {
    list-style-type: none;
  }
  li{
    margin:0.5em;
  }
  input {
    height: 2.3em;
    width: 12vw;
    margin-right: 1em;
    font-family: ABeeZee;
    text-align: center;
    font-size: 1rem;
    font-style: italic;
    font-weight: 600;
  }
  button {
     cursor: pointer;
    outline: none;
    border: 1px solid gray;
    border-radius: 0.75em;
    padding: 0.5em;
    background-color: #FBD341;
    font-weight: bold;
    
  }
  img {
    height: 2em;
  }
  & .footerTop {
    display: flex;
    gap: 2em;
  }
  & .newsLetter {
    margin-top:2em;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    align-items: center;
  }

  & .newsEmail {
    display: flex;
    margin-top: 1em;
  }
  & .made {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
    font-style: italic;
    font-size:1.3em;
    font-weight: 500;
    margin-bottom:0.7em;

  }
  hr {
    margin-top: 1em;
    margin-bottom: 1.5em;
  }
  & .sub{
    font-weight:500;
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <div className="footerTop">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Mentors</li>
          <li>Cohorts</li>
        </ul>
        <ul>
          <li>Sign Up</li>
          <li>Sign In</li>
          <li>Become a mentor</li>
          <li>Contact Us</li>
        </ul>
        <div className="newsLetter">
          <p className="sub">Subscribe to our newsletter</p>
          <div className="newsEmail">
            <input type="text" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <hr />
      <p className="made">
        Made with lots of <img src={love} alt="lovee" /> in Kerala
      </p>
    </StyledFooter>
  );
};
