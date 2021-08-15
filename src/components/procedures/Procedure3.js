import React from "react";
import styled from "styled-components";
import procedure3 from "../../assets/procedure3.png";
import p3 from "../../assets/procedure3_bg.png";

const Procedure3styled = styled.div`
  & {
    height: fit-content;
    width: 55vw;
    box-sizing: border-box;
    background: url(${p3}) no-repeat fixed center;
    background-size: cover;
    border-radius: 1em;
    margin-bottom: 2em;
    padding: 1em;
    padding-top: 2em;
    padding-bottom: 2em;
    display: grid;
    grid-template-columns: 4fr 1fr 4fr;
    transition-duration: 0.5s;
    position: relative;
    top: -70vh;
    transition-duration: 0.5s;
    transition-timing-function: ease-in;
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

  & .third {
    background: #fffae7;
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

export const Procedure3 = ({ isVisible }) => {
  return (
    <Procedure3styled
      className="procedure1 third"
      style={isVisible ? { animationName: "popBackground" } : null}
    >
      <div
        className="procedureDescription descProc1"
        style={{ justifyContent: "center" }}
      >
        <div className="procedure1heading">
          Get an invite on your email for your session
        </div>
        <div className="procedure1content">
          Get your meet link on your email, join the meet and discuss all your
          queries with your mentor
        </div>
      </div>
      <div className="middlepart numProc1">
        <div className="procedure1number">3</div>
      </div>
      <div className="procedureImage">
        <img src={procedure3} alt="proc" />
      </div>
    </Procedure3styled>
  );
};

export default Procedure3;
