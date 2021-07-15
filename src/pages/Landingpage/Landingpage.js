import React from "react";
import Logo from "../../assets/Mentify-Logo.png";
import Hello from "../../assets/Hello.png";
import wave from "../../assets/wave.png";
import RoundImage from "../../assets/RoundImage.png";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

export const Landingpage = () => {
  const Landingpage = styled.div`
    & {
      height: 85vh;
      box-sizing: border-box;
      margin: 0;
    }
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
      line-height: 1em;
    }
    & .helloImage {
      width: 30vw;
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
    & .details {
      padding-left: 3em;
      padding-right: 3em;
      background-size: cover;
      height: 155vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      top: -8vh;
    }
    & .details-heading {
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 42px;
    }
    & .details-description {
      font-family: Rhodium Libre;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 41px;
    }
    & .imageHolder {
      display: flex;
      justify-content: center;
      position: relative;
      top: -40vh;
    }
    @media only screen and (max-width: 600px) {
      & .page1 {
        display: flex;
        flex-direction: column;
        padding-left: 3em;
        padding-right: 3em;
      }
      & .helloImage {
        width: 50vw;
        height: auto;
      }
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
      <div className="details" style={{ backgroundImage: `url(${wave})` }}>
        <div className="details-heading">Why Mentify ?</div>
        <div className="details-description">
          Choosing a college right after 12th isnt an easy task , We help you
          connect with students in those colleges you looking out for
        </div>
        <div className="details-description">
          How to build my resume , Publish research papers ? We help you connect
          with students who have walked the path you wish to walk
        </div>
        <div className="details-description">
          Getting internship in while in college isnt an easy task , We help you
          connect with students interning in various top firms you wish to
          intern for
        </div>
      </div>
      <div className="imageHolder">
        <img src={RoundImage} alt="settings with lady" />
      </div>
    </Landingpage>
  );
};
