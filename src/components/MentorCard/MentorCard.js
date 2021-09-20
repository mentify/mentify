import React from "react";
import styled from "styled-components";
import MentorCardMockPic from "../../assets/mentorcard-mockpic.svg";
import RatingStar from "../../assets/rating-star.svg";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import { Link } from "react-router-dom";

const MentorCardStyled = styled.div`
  & {
    margin-top: 2em;
    gap: 5em;
  }
  &. card {
    border: 0px white;
  }

  & .box {
    width: fit-content;
    min-width: 15em;
    height: 40vh;
    border: 0.1em white solid;
    box-shadow: 1px 1px 1px 1px grey;
    border-radius: 0.5em;
  }
  & .dp {
    margin-left: 3em;
    margin-right: 3em;
    height: 8em;
  }

  & .name {
    margin-top: 1em;
    font-size: 1.2rem;
    font-family: Roboto;
    font-weight: bold;
  }
  & .rating {
    margin-top: 1em;
    display: flex;
  }
  & .college {
    margin-top: 0.8em;
    color: #96a7af;
    font-family: Roboto;
  }

  & .booksession button {
    width: 100%;
    height: 3em;
    font-family: Roboto;
    font-size: 1.2rem;
    margin-top: 4em;
    border-radius: 3em;
    background-color: #b5f7e7;
  }
  & .ratingno {
    margin-left: 0.5em;
  }
`;

export const MentorCard = ({ name, college }) => {
  return (
    <MentorCardStyled className="MentorCardStyled">
      <Flippy flipOnHover={true} className="card">
        <FrontSide>
          <div>
            <img src={MentorCardMockPic} alt="mentor-dp" className="dp" />
            <div className="name">{name}</div>
            <div className="college">{college}</div>
          </div>
        </FrontSide>
        <BackSide>
          <Link to="/booksession">
            <div className="booksession">
              <button>Book a session!</button>{" "}
            </div>
          </Link>
        </BackSide>
      </Flippy>
    </MentorCardStyled>
  );
};
