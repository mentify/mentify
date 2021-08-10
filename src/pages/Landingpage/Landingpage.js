import React from "react";
import Logo from "../../assets/Mentify-Logo.png";
import Hello from "../../assets/Hello.png";
import topwave from "../../assets/TopWave.png";
import bottomwave from "../../assets/BottomWave.png";
import RoundImage from "../../assets/RoundImage.png";
import search from "../../assets/search.png";
import user from "../../assets/user-add.png";
import laptop from "../../assets/laptop.png";
import arrow from "../../assets/Arrow.png";
import consulting from "../../assets/consulting.png";
import marketing from "../../assets/marketing.png";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import procedure2 from "../../assets/procedure2.png";
import procedure3 from "../../assets/procedure3.png";

const Landingpagestyled = styled.div`
  & {
    display: flex;
    flex-direction: column;
    height: fit-content;
    box-sizing: border-box;
    margin: 0;
  }
  & .page1 {
    display: flex;
    justify-content: space-around;
    padding-left: 3em;
    padding-right: 3em;
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
    width: 35vw;
    height: auto;
  }
  & .logo {
    margin-top: 1em;
  }
  & .wave {
    width: 100%;
  }
  & .ExamTitles {
    font-family: "Noto Sans JP", sans-serif;
    font-style: normal;
    font-weight: bold;
    color: #64fcd9;
    font-size: 3rem;
    margin-top: 0.5em;
  }
  & .page2 {
    position: relative;
    top: -8vh;
    display: flex;
    flex-direction: column;
  }

  & .details {
    padding: 3em;
    background-size: cover;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #b5f7e7;
    margin: 0;
  }
  & .details-heading {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 3rem;
    line-height: 1em;
    margin-bottom: 0.5em;
  }
  & .details-description {
    font-family: Rhodium Libre;
    font-style: normal;
    font-weight: normal;
    font-size: 2rem;
    line-height: 1.5em;
    margin-bottom: 0.75em;
  }
  & .imageHolder {
    display: flex;
    justify-content: center;
    position: relative;
    top: -40vh;
  }
  & .procedures {
    position: relative;
    top: -15vh;
    justify-self: flex-start;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  & .procedureHeading {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 3rem;
    text-align: center;
    margin-bottom: 2rem;
  }
  & .procedure1 {
    height: fit-content;
    width: 55vw;
    box-sizing: border-box;
    background: #eeeeed;
    border-radius: 1em;
    margin-bottom: 2em;
    padding: 1em;
    padding-top: 2em;
    padding-bottom: 2em;
    display: grid;
    grid-template-columns: 4fr 1fr 4fr;
  }
  & .procedureDescription {
    display: flex;
    flex-direction: column;
  }
  & .procedure1heading {
    font-size: 2rem;
    line-height: 2rem;
  }
  & .procedure1content {
    margin-top: 2em;
  }
  & .procedure1number {
    font-size: 2rem;
    color: #ffb61d;
    height: 3rem;
    width: 3rem;
    text-align: center;
    background: white;
    border-radius: 10em;
    align-self: center;
    margin-left: auto;
    margin-right: auto;
  }
  & .procedureFeatures {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    justify-content: center;
  }
  & .procedure1feature {
    display: flex;
    align-items: center;
    gap: 1em;
    padding: 0.75em;
    background: #fff6d4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 1em;
    width: fit-content;
    margin-bottom: 1em;
    align-self: flex-end;
    position: relative;
    right: -3rem;
  }
  & .secondDescription {
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  & .procedureImage {
    display: flex;
    align-items: center;
  }

  & .procedureImage img {
    width: 100%;
  }

  @media (max-width: 1055px) {
    & .page1 {
      display: flex;
      flex-direction: column;
      padding-left: 3em;
      padding-right: 3em;
    }
    & .steps {
      flex-direction: column;
    }
    & .step {
      width: 50%;
    }

    & .arrow {
      width: 17%;
      height: 0.7rem;
      transform: rotate(90deg);
      transition-duration: 0.5s;
      margin: 2em;
    }
    & .imageHolder {
      top: -20vh;
    }

    & .procedureHeading {
      text-align: center;
    }

    & .details-description {
      font-size: 1.75rem;
      line-height: 1.5em;
    }
  }
  @media (max-width: 600px) {
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
    & .imageHolder {
      top: -20vh;
    }
  }
`;

export const Landingpage = () => {
  return (
    <Landingpagestyled className="Landingpage">
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
      <div className="page2">
        <img src={topwave} alt="top" className="wave" />
        <div className="details">
          <div className="details-heading">Why Mentify ?</div>
          <div className="details-description">
            Choosing a college right after 12th isnt an easy task , We help you
            connect with students in those colleges you looking out for
          </div>
          <div className="details-description">
            How to build my resume , Publish research papers ? We help you
            connect with students who have walked the path you wish to walk
          </div>
          <div className="details-description">
            Getting internship in while in college isnt an easy task , We help
            you connect with students interning in various top firms you wish to
            intern for
          </div>
        </div>
        <img src={bottomwave} alt="bottom" className="wave" />
      </div>
      <div className="imageHolder">
        <img src={RoundImage} alt="settings with lady" />
      </div>
      <div className="procedures">
        <div className="procedureHeading">How do we work ?</div>
        <div className="procedure1">
          <div className="procedureDescription">
            <div className="procedure1heading">
              You select a mentor or cohort of your choice
            </div>
            <div className="procedure1content">
              Select your mentor or cohort based on your requirements If you are
              unable to find a mentor please fill the form and we will get back
              to you
            </div>
          </div>
          <div className="procedure1number">1</div>
          <div className="procedureFeatures">
            <div className="procedure1feature">
              <img src={consulting} alt="consultingimg" />
              <div>
                <p>Mentors</p>
                <p>Get started now >></p>
              </div>
            </div>
            <div className="procedure1feature">
              <img src={marketing} alt="mktingimg" />
              <div>
                <p>Cohorts</p>
                <p>Get started now >></p>
              </div>
            </div>
          </div>
        </div>
        <div className="procedure1" style={{ background: "#E9FFFA" }}>
          <div className="procedureImage">
            <img src={procedure2} />
          </div>
          <div className="procedure1number">2</div>
          <div className="procedureDescription secondDescription">
            <div className="procedure1heading secondHeading">
              Book a session with your desired mentor
            </div>
            <div className="procedure1content">
              Book a 1-1 session with your mentor and schedule a meet
              <br />
              Join a cohort based on your interest
            </div>
          </div>
        </div>
        <div className="procedure1" style={{ background: "#FFFAE7" }}>
          <div
            className="procedureDescription"
            style={{ justifyContent: "center" }}
          >
            <div className="procedure1heading">
              Get an invite on your email for your session
            </div>
            <div className="procedure1content">
              Get your meet link on your email, join the meet and discuss all
              your queries with your mentor
            </div>
          </div>
          <div className="procedure1number">3</div>
          <div className="procedureImage">
            <img src={procedure3} />
          </div>
        </div>
      </div>
    </Landingpagestyled>
  );
};
