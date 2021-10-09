import React from "react";
import styled from "styled-components";
import consulting from "../../assets/consulting.png";
import marketing from "../../assets/marketing.png";
import p1 from "../../assets/procedure1_bg.png";
import { Link } from "react-router-dom"; 

const Procedure1styled = styled.div`
  & {
    height: fit-content;
    width: 55vw;
    box-sizing: border-box;
    background: url(${p1}) no-repeat fixed center;
    background-size: cover;
    border-radius: 1em;
    margin-bottom: 2em;
    padding: 1em;
    padding-top: 3em;
    padding-bottom: 3em;
    display: grid;
    grid-template-columns: 4fr 1fr 4fr;
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
  @media (max-width: 700px) {
    & {
      grid-template-columns: 1.5fr 4fr;
    }

    & .procedureFeatures {
      display: none;
    }
    & .procedureDescription {
      text-align: right;
    }

    & .numProc1 {
      order: 1;
    }

    & .descProc1 {
      order: 2;
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

const Procedure1 = ({ isVisible }) => {
  return (
    <Procedure1styled
      style={isVisible ? { animationName: "popBackground" } : null}
    >
      <div className="procedureDescription descProc1">
        <div className="procedure1heading">
          You select a mentor or cohort of your choice
        </div>
        <div className="procedure1content">
          Select your mentor or cohort based on your requirements If you are
          unable to find a mentor please write to us and we will get back to
          you
        </div>
      </div>
      <div className="middlepart numProc1">
        <div className="procedure1number ">1</div>
      </div>

      <div className="procedureFeatures">
        <div className="procedure1feature">
          <img src={consulting} alt="consultingimg" />
          <div>
          <Link to="/mentors" style={{textDecoration:"none", color:"black"}}>
            <p>Mentors</p>
            <p>Get started now {`>>`}</p>
          </Link>
          </div>
        </div>
        <div className="procedure1feature">
          <img src={marketing} alt="mktingimg" />
          <div>
            <p>Cohorts</p>
            <p>Get started now {`>>`}</p>
          </div>
        </div>
      </div>
    </Procedure1styled>
  );
};

export default Procedure1;
