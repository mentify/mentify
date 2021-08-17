import React from "react";
import styled from "styled-components";
import love from "../../assets/heart.png";

const StyledFooter = styled.div`
  & {
    display: flex;
    flex-direction: column;
    margin-top: auto;
    background: #b5f7e7;
    padding: 3em;
    width: 100%;
    box-sizing: border-box;
  }
  ul {
    list-style-type: none;
  }
  input {
    height: 2em;
    width: 10vw;
    margin-right: 1em;
  }
  button {
    cursor: pointer;
    outline: none;
    border: 1px solid gray;
  }
  img {
    height: 2em;
  }
  & .footerTop {
    display: flex;
    gap: 2em;
  }
  & .newsLetter {
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
  }
  hr {
    margin-top: 1em;
    margin-bottom: 1em;
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
          <p>Subscribe to our newsletter</p>
          <div className="newsEmail">
            <input type="text" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <hr />
      <p className="made">
        Made with lots of <img src={love} alt="lovee" /> in kerala
      </p>
    </StyledFooter>
  );
};
