import React from "react";
import styled from "styled-components";
import procedure2 from "../../assets/procedure2.png";
import p2 from "../../assets/procedure2_bg.png";

const Procedure2styled = styled.div`
  & {
    height: fit-content;
    width: 55vw;
    box-sizing: border-box;
    background: url(${p2}) no-repeat fixed center;
    background-size: cover;
    border-radius: 1em;
    margin-bottom: 2em;
    padding: 1em;
    padding-top: 2em;
    padding-bottom: 2em;
    display: grid;
    grid-template-columns: 4fr 1fr 4fr;
    transition-duration: 0.5s;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(1, 0, 1, 1);
    animation-duration: 2s;
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
  & .middlepart {
    display: flex;
    flex-direction: column;
    justify-content: center;
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

  & .second {
    background: #e9fffa;
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
  @media (max-width: 700px) {
    & {
      grid-template-columns: 1.5fr 4fr;
    }
    & .procedureImage {
      display: none;
    }
    & .procedureFeatures {
      display: none;
    }
    & .procedureDescription {
      text-align: right;
    }
  }
  @keyframes popBackground {
    0% {
      background-size: 0% 100%;
    }
    50% {
      background-size: 50% 100%;
    }
    100% {
      background-size: 100% 100%;
    }
  }
`;

export const Procedure2 = ({ isVisible }) => {
  return (
    <Procedure2styled
      className="procedure1 second"
      style={isVisible ? { animationName: "popBackground" } : null}
    >
      <div className="procedureImage">
        <img src={procedure2} alt="proc" />
      </div>
      <div className="middlepart">
        <div className="procedure1number" style={{ color: "#3DD598" }}>
          2
        </div>
      </div>
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
    </Procedure2styled>
  );
};

export default Procedure2;
