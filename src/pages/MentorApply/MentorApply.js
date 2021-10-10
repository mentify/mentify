import React from "react";
import styled from "styled-components";
import { Footer } from "../../components/Footer/Footer";
import MentorApplyImg from "../../assets/MentorApply.svg";
import { Link } from "react-router-dom";
import "../../fonts/Abhaya_Libre/AbhayaLibre-Regular.ttf";

const MentorApplyStyled = styled.div`
  & {
    display: flex;
    flex-direction: column;
    height: fit-content;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    justify-content: center;
  }
  & .toppart {
    justify-content: center;
  }
  & .line1 {
    margin: 1em;
    text-align: center;
    font-size: 3rem;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    line-height: 1em;
    margin-bottom: 0.5em;
  }
  & .line2 {
    color: #979797;
    font-family: ABeeZee;
    font-style: normal;
    font-weight: normal;
    font-size: 2rem;
    line-height: 1em;
    align-items: center;
    text-align: center;
  }

  & .yellow {
    color: #ffb61d;
  }

  & .btn {
    text-align: center;
    margin-top: 2em;
    margin-bottom: 0;
  }
  & .btn button {
    width: 8em;
    height: 2em;
    border: none;
    border-radius: 0.5em;
    background-color: #fbd341;
    font-family: "Source Sans Pro", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 1.2rem;
    line-height: 1em;
    cursor: pointer;
  }
  & .image {
    text-align: center;
    margin-top: 0;
  }
  & .bottompart {
    text-align: center;
    margin-top: 2em;
  }
  & .line3 {
    font-family: "Abhaya Libre", serif;
    font-style: normal;
    font-weight: 600;
    margin-right: 0.5em;
    margin-left: 0.5em;
    font-size: 4rem;
    line-height: 1em;
  }
  & .btn2 {
    margin: 4em;
  }
  & .btn2 button {
    width: 12em;
    height: 3em;
    border-radius: 1em;
    font-family: "Source Sans Pro", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 1.4rem;
    text-align: center;
    background-color: #fbd341;
    border: none;
    padding: 0;
    cursor: pointer;
  }
  & .img {
    max-width: 100%;
  }
`;

export const MentorApply = () => {
  return (
    <MentorApplyStyled className="MentorApplyStyled">
      <div className="toppart">
        <div className="line1">
          Mentor <span className="yellow">students</span> and earn upto ₹20,000
          per month
        </div>
        <div className="line2">Every student has some experience to share</div>
        <div className="btn">
          <Link to="/mentorform">
            <button>Apply Now</button>
          </Link>
        </div>
      </div>
      <div className="image">
        <img src={MentorApplyImg} alt="mentor-img" className="img" />
      </div>
      <div className="bottompart">
        <div className="line3">Ready to join us as mentors ?</div>
        <div className="btn2">
          <Link to="/mentorform">
            <button>Apply as a mentor</button>
          </Link>
        </div>
      </div>
      <Footer />
    </MentorApplyStyled>
  );
};
