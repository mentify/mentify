import React from "react";
import Logo from "../../assets/Mentify-Logo.png";
import Hello from "../../assets/Hello.png";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

export const Landingpage = () => {
  const Landingpage = styled.div`
    height: 90vh;
    box-sizing: border-box;
    margin: 0;
    & .page1 {
      display: flex;
      justify-content: space-around;
      padding-left: 6em;
      padding-right: 6em;
    }
    & .description {
      width: 80%;
      margin-top: 1em;
      margin-right: 0;
      font-family: "Rubik", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 1.8rem;
      line-height: 29px;
    }
    & .helloImage {
      width: 30%;
      height: auto;
    }
    & .logo {
      margin-top: 1em;
    }
    & .ExamTitles {
      font-family: "Noto Sans JP", sans-serif;
      font-style: normal;
      font-weight: bold;
      color: #64fcd9;
      font-size: 3rem;
      margin-top: 0.5em;
    }
  `;
  return (
    <Landingpage className="Landingpage">
      <div className="page1">
        <div className="intro">
          <img src={Logo} alt="app-logo" className="logo" />
          <div className="description">
            Book ONE-TO-ONE sessions with the brightest minds of India and get
            to know how they cracked
          </div>
          <div className="ExamTitles">
            <Typewriter
              options={{
                strings: ["IIT-JEE", "OLYMPIADS", "BITSAT", "PLACEMENTS"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <img src={Hello} alt="Welcome" className="helloImage" />
      </div>
    </Landingpage>
  );
};
