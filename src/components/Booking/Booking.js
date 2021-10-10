import React, { useState, useEffect } from "react";
import styled from "styled-components";
import firebase from "../../firebase.config.js";

const BookingStyled = styled.div`
  & {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  & .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #ffffff;
    border-radius: 2em;
    border: 0.1em solid black;
    width: fit-content;
    align-items: center;
    padding: 4em;
    box-shadow: 2px 2px 4px 4px grey;
  }
  & .main {
    margin-top: -1em;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 5em;
    margin-bottom: 2em;
  }
  & .photo img {
    width: 12em;
    height: 12em;
    align-items: center;
    box-shadow: 2px 2px 4px 4px grey;
    border: 0.1em solid black;
  }
  & .details {
    display: flex;
    flex-direction: column;
    font-family: "Proza Libre", sans-serif;
    gap: 0.2em;
    font-size: 1.5rem;
    align-items: center;
    text-align: left;
    font-weight: 500;
  }
  & .checkCalendar {
    font-size: 1.3rem;
    font-style: italic;
    font-weight: 600;
    margin-top: 1em;
    margin-bottom: -1em;
  }
`;

const dayToDayName = {
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thu",
  5: "Fri",
  6: "Sat",
  7: "Sun",
  0: "",
};

export const Booking = ({
  name,
  college,
  branch,
  photoURL,
  date,
  slot,
  bookedOn,
}) => {
  const makeDate = (seconds1) => {
    var dateInJS = new Date(seconds1 * 1000);
    return dateInJS.toDateString();
  };

  return (
    <BookingStyled>
      <div className="container">
        <div className="main">
          <div className="photo">
            <img src={photoURL} alt="mentor-dp" />
          </div>
          <div className="details">
            <div> {name} </div>
            <div> {college} </div>
            <div> {branch} </div>
            <div>
              <b> Booked Date: </b> {makeDate(date)}
            </div>
            <div>
              <b> Booked Time Slot: </b>
              {slot - Math.floor(slot) == 0 ? (
                <p>
                  {slot}:00 to {slot}:30
                </p>
              ) : (
                <p>
                  {Math.floor(slot)}:30 to {Math.floor(slot) + 1}:00
                </p>
              )}
            </div>
            <div>
              <b> Booked On: </b>
              {makeDate(bookedOn)}
            </div>
          </div>
        </div>
        <div className="checkCalendar">
          Check your Google Calender for Meeting Link
        </div>
      </div>
    </BookingStyled>
  );
};
