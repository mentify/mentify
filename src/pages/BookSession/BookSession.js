import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Footer } from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import Amal from "../../assets/Amal.png";
import CalendarSelect from "../../assets/calendarSelect.svg";
import Calendar from "react-calendar";
import { AES, enc } from "crypto-js";
import firebase from "../../firebase.config.js";

import { differenceInCalendarDays } from "date-fns";
import { LoadingIcon } from "../../components/LoadingIcon/LoadingIcon";

const LoaderHolder = styled.div`
  & {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const BookSessionStyled = styled.div`
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
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2em;
    padding: 2em;
  }
  & .mainbox {
    width: 40em;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    box-shadow: 5px 5px #888888;
  }
  & .topgreen1 {
    height: 4em;
    padding-right: 1em;
    text-align: right;
    background-color: #b5f7e7;
    font-family: Roboto;
    text-align: bottom;
    display: flex;
    flex-direction: column-reverse;
    font-size: 1.3rem;
    font-weight: 600;
  }
  & .innermainbox {
    display: flex;
    flex-wrap: wrap;
  }
  &. secondarybox {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  & .dp img {
    width: 12em;
    height: 15em;
    margin-left: 2em;
    border-radius: 1em;
    position: relative;
    top: -2.5em;
    box-shadow: 3px 3px #888888;
  }
  & .desc {
    margin-top: 1em;
    font-size: 1.3rem;
    font-family: Roboto;
    font-weight: 600;
    display: flex;
    margin-right: 2em;
    text-align: center;
    flex-direction: column;
    margin-left: 3em;
  }
  & .desc * {
    margin-bottom: 1em;
  }
  & .name {
    font-size: 1.7rem;
  }
  & .yellow {
    background-color: #fbd341;
    border-radius: 1.5em;
    padding: 0.5em;
    margin-right: 0.5em;
  }
  & .price {
    margin-top: 0.5em;
    text-align: center;
    line-height: 1.5em;
  }

  & .testscores {
    width: 25em;
    height: fit-content;
    border: 0.1em solid black;
    display: flex;
    flex-direction: column;
    margin-bottom: 2em;
    ju-self: center;
    box-shadow: 5px 5px #888888;
  }
  & .ts {
    align-self: center;
    width: 100%;
    font-family: Roboto;
    font-size: 1.5rem;
    font-weight: 800;
    padding-top: 1em;
    text-decoration: underline;
    padding-bottom: 0.3em;
    text-align: center;
    border-bottom: 2px solid black;
    background-color: #b5f7e7;
  }
  & .scores {
    align-self: center;
    gap: 2em;
    margin: 1em;
    font-size: 1.3rem;
    font-weight: 600;
    font-family: Roboto;
  }

  & .yellow1 {
    color: #ffb61d;
    float: right;
  }
  & .test {
    align-self: left;
    margin-right: 3em;
  }
  & .scores1 {
    text-align: left;
    margin-left: 2em;
    margin-right: 1.5em;
  }
  & .calendar {
    width: 40em;
    height: fit-content;
    display: flex;
    font-size: 1em;
    font-weight: 800;
    border: 0.1em solid black;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 5px #888888;
  }
  & .bottompart {
    padding: 2em;
    display: flex;
    gap: 2em;
    flex-wrap: wrap;
    justify-content: center;
  }
  & .collegeadmits {
    width: 25em;
    text-align: center;
    height: fit-content;
    border: 0.1em solid black;
    box-shadow: 5px 5px #888888;
  }
  & .collegeadmitsheading {
    font-family: Roboto;
    padding-top: 0.7em;
    padding-bottom: 0.3em;
    width: 100%;
    margin-bottom: 0.7em;
    background-color: #b5f7e7;
    font-size: 1.5rem;
    font-weight: 600;
    text-decoration: underline;
  }
  & .colleges {
    font-size: 1.3rem;
    font-family: Roboto;
    font-weight: 600;
    margin-right: 1em;
    margin-left: 1em;
    margin-bottom: 1em;
  }
  & .bookbtn {
    align-self: center;
  }
  & .bookbtn button {
    width: 12em;
    height: 2.5em;

    background-color: #fbd341;
    font-size: 1.5rem;
    font-family: "Source Sans Pro", sans-serif;
    font-style: normal;
    font-weight: bold;
    cursor: pointer;
    border: 0.1em solid black;
  }
  & .timeslot {
    height: 29em;
    width: 25em;
    display: flex;
    padding: 1em;
    flex-direction: column;
    justify-content: center;
  }
  & .slotheading {
    font-size: 1.7rem;
    align-self: center;
    font-family: "Proza Libre", sans-serif;
    margin-bottom: 1em;
    font-weight: 600;
    text-align: center;
  }
  & .slotbuttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  & .slotbtn {
    padding: 0.5em;
    width: 14em;
    margin-bottom: 1em;
    border-radius: 1em;
    border: 0.1em solid black;
    background-color: #b5f7e7;
    font-family: Roboto;
    justify-self: center;
    text-align: center;
    align-self: center;
    font-size: 1.3rem;
    font-weight: bold;
    cursor: pointer;
  }
  & .slotbtn:focus {
    background-color: #fbd341;
    cursor: pointer;
  }
  & .slotbtn:hover {
    background-color: #fbd341;
  }
  & .calendarselect {
    width: 12em;
  }

  & .react-calendar {
    max-width: 40em;
    font-size: 1rem;
    background: white;
    font-family: "Proza Libre", sans-serif;
    line-height: 1.125em;
  }
  & .react-calendar--doubleView {
    width: 700px;
  }
  & .react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
    margin: -0.5em;
  }
  & .react-calendar--doubleView .react-calendar__viewContainer > * {
    width: 50%;
    margin: 0.5em;
  }
  .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  & .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
  }
  & .react-calendar button:enabled:hover {
    cursor: pointer;
  }
  & .react-calendar__navigation {
    height: 70px;
    margin-bottom: 0.5em;
  }
  & .react-calendar__navigation button {
    min-width: 44px;
    background: none;
  }
  & .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #b5f7e7;
  }
  & .react-calendar__navigation button[disabled] {
    background-color: #f0f0f0;
  }
  & .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-family: "Proza Libre", sans-serif;
    font-size: 1rem;
  }
  & .react-calendar__month-view__weekdays__weekday {
    padding: 0.5em;
  }
  & .react-calendar__month-view__weekNumbers {
    font-weight: bold;
  }
  & .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75em;
    padding: calc(0.75em / 0.75) calc(0.5em / 0.75);
  }
  & .react-calendar__month-view__days__day--weekend {
  }
  & .react-calendar__month-view__days__day--neighboringMonth {
    color: #757575;
  }
  & .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 1.6em 0.5em;
  }
  & .react-calendar__tile {
    max-width: 100%;
    text-align: center;
    font-family: "Proza Libre", sans-serif;
    padding: 1em 0.5em;
    background: none;
  }
  & .react-calendar__tile:disabled {
    background-color: #f0f0f0;
  }
  & .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: #b5f7e7;
  }
  & .react-calendar__tile--now {
    background: #b5f7e7;
  }
  & .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: #ffffa9;
  }
  & .react-calendar__tile--hasActive {
  }

  & .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #b5f7e7;
  }
  & .react-calendar__tile--active {
    background: #b5f7e7;
    color: black;
  }
  & .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #b5f7e7;
  }
  & .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #e6e6e6;
  }
  & .react-calendar__navigation__label__labelText {
    font-size: 2rem;
    font-family: "Proza Libre", sans-serif;
    font-weight: bold;
  }
  & .react-calendar__tile {
    font-size: 1.3rem;
  }
  @media (max-width: 992px) {
    .mentify {
      display: none;
    }
    .dp {
      text-align: center;
    }
    .dp img {
      text-align: center;
    }
    .mainbox {
      width: fit-content;
    }
  }

  @media (max-width: 768px) {
    .mentify {
      display: none;
    }
    .dp {
      text-align: center;
    }
    .dp img {
      text-align: center;
    }
    .mainbox {
      width: fit-content;
    }
  }
`;

//DATABASE STUFF
const mentorEmailId = "adhvaithkul@gmail.com";
const preferredSlots = new Map([
  [1, [7, 7.5, 8, 8.5]],
  [4, [15, 15.5, 16]],
  [6, [22, 22.5, 23, 23.5]],
]);
const bookedSlots = [];

const Date1 = new Date(2021, 11, 1);
const Date2 = new Date();

//API CREDS
const gapi = window.gapi;
const CLIENT_ID =
  "487444471330-c1io6lpljdgh3sq5rrs2qurp80v2bjn2.apps.googleusercontent.com";
const API_KEY = "AIzaSyAYLG6TgLw2GSp4r83gc8Dey4ADEagOYF4";
const DISCOVERY_DOCS = [
  "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
];
const SCOPES = "https://www.googleapis.com/auth/calendar";

export const BookSession = () => {
  const { mentorId } = useParams();
  const [date, setDate] = useState("");
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [slotsToBeDisplayed, setSlotsToBeDisplayed] = useState([]);
  const [mentorData, setMentorData] = useState(null);

  useEffect(() => {
    var bytes = AES.decrypt(mentorId, "mentify");
    var mentorEmail = JSON.parse(bytes.toString(enc.Utf8));
    console.log(mentorEmail);
    firebase
      .firestore()
      .collection("mentors")
      .doc(mentorEmail)
      .get()
      .then((doc) => setMentorData(doc.data()));
  }, []);

  console.log(mentorData);

  const onchange = (date) => {
    setDate(date);
    const a = date.getDay();
    const b = preferredSlots.get(a);
    setSlots(b);
    setSlotsToBeDisplayed(b);
    slotsToBeDisplayed.forEach((svalue, sindex) => {
      bookedSlots.forEach((value, index) => {
        if (value === date && bookedSlots[index + 1] === svalue) {
          slotsToBeDisplayed.splice(sindex, 1);
        }
      });
    });
    console.log(slots, "slots");
    console.log(slotsToBeDisplayed, "slots tbd");
    console.log(preferredSlots, "pref");
    /*slotsToBeDisplayed.forEach((value,index)=>bookedSlots.get(date)===value?slotsToBeDisplayed.splice(index,1):null)
     */
  };

  const isSameDay = (a, b) => {
    return b.getDay() === a;
  };

  const tileDisabled = ({ date, view }) => {
    if (view === "month") {
      for (let key of preferredSlots.keys()) {
        if (isSameDay(key, date)) {
          return false;
        }
      }
      return true;
    }
  };

  const selectSlot = (slot) => {
    setSelectedSlot(slot);
  };

  const createEvent = () => {
    gapi.load("client:auth2", () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      });
      let meetingmonth = date.getMonth() + 1;
      let meetingday = date.getDate();
      var meetinghr = 0;
      var meetingmin = 0;
      var meetinghr2 = 0;
      var meetingmin2 = 0;
      if (selectedSlot - Math.floor(selectedSlot) == 0) {
        meetinghr = selectedSlot;
        meetingmin = 0;
        meetingmin2 = 30;
        meetinghr2 = selectedSlot;
      } else {
        meetinghr = Math.floor(selectedSlot);
        meetingmin = 30;
        meetinghr2 = Math.floor(selectedSlot) + 1;
        meetingmin2 = 0;
      }
      gapi.client.load("calendar", "v3", () => console.log("loaded"));
      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(() => {
          var event = {
            sendUpdates: "all",
            sendNotifications: true,
            summary: "Mentify Session",
            description:
              "One on One mentorship with a mentor from your dream college.",
            start: {
              dateTime: `2021-${meetingmonth}-${meetingday}T${meetinghr}:${meetingmin}:00+05:30`,
              timeZone: "Asia/Kolkata",
            },
            end: {
              dateTime: `2021-${meetingmonth}-${meetingday}T${meetinghr2}:${meetingmin2}:00+05:30`,
              timeZone: "Asia/Kolkata",
            },
            attendees: [{ email: mentorEmailId }],
            conferenceData: {
              createRequest: {
                requestId: "test",
                conferenceSolutionKey: { type: "hangoutsMeet" },
              },
            },
            reminders: {
              useDefault: false,
              overrides: [
                { method: "email", minutes: 24 * 60 },
                { method: "email", minutes: 60 },
                { method: "popup", minutes: 10 },
                { method: "popup", minutes: 60 },
              ],
            },
          };
          var request = gapi.client.calendar.events.insert({
            calendarId: "primary",
            resource: event,
            conferenceDataVersion: 1,
          });
          request.execute((event) => {
            console.log(event);
            window.open(event.htmlLink);
          });
          /*console.log("map get", bookedSlots.get(date))
                        if(bookedSlots.get(date)){
                            console.log("pushing to the array")
                            bookedSlots.get(date).push(selectedSlot)
                        }
                        else{
                            console.log("creating new key-value pair")
                            bookedSlots.set(date,[selectedSlot])
                        }*/
          bookedSlots.push(date);
          bookedSlots.push(selectedSlot);
        });
    });
  };
  const mapGet = (mp, key) => {
    console.log("map get mpky", bookedSlots.get(date));
    return mp.get(key);
  };

  return (
    <BookSessionStyled className="BookSessionStyled">
      {mentorData ? (
        <>
          <div className="toppart">
            <div className="mainbox">
              <div className="topgreen1">
                <div className="mentify">mentify.in</div>
              </div>
              <div className="innermainbox">
                <div className="dp">
                  <img src={mentorData.photoURL} />
                </div>
                <div className="desc">
                  <div className="name">{mentorData.name}</div>
                  <div className="college">{mentorData.college} </div>
                  <div className="branch">{mentorData.branch}</div>
                  <div className="price">
                    <span className="yellow"> ₹ 350 </span> for a 30 min session
                  </div>
                </div>
              </div>
            </div>
            <div className="secondarybox">
              <div className="testscores">
                <div className="ts">Test Scores</div>
                <div className="scores1">
                  <div className="scores">
                    <span className="test">JEE Mains</span>
                    <span className="yellow1">
                      {mentorData.jeeMainsPercentile}
                    </span>
                  </div>
                  <div className="scores">
                    <span className="test">JEE Advance</span>
                    <span className="yellow1">
                      {mentorData.jeeAdvancedRank}
                    </span>
                  </div>
                  <div className="scores">
                    <span className="test">BITSAT</span>
                    <span className="yellow1">{mentorData.bitsatMarks}</span>
                  </div>
                </div>
              </div>
              <div className="collegeadmits">
                <div className="collegeadmitsheading">College Admits</div>
                <div className="colleges">{mentorData.collegeAdmits}</div>
              </div>
            </div>
          </div>

          <div className="bottompart">
            <div className="calendar">
              <Calendar
                onChange={onchange}
                value={date}
                tileDisabled={tileDisabled}
                maxDate={Date1}
                minDate={Date2}
              />
            </div>
            <div className="timeslot">
              <div>
                {date ? (
                  <div className="slotheading">Select a time slot </div>
                ) : (
                  <div className="slotheading">
                    {" "}
                    Select a day from the calendar
                  </div>
                )}
              </div>
              <div className="slotbuttons">
                {slotsToBeDisplayed.map((slot) =>
                  slot - Math.floor(slot) == 0 ? (
                    <button
                      className="slotbtn"
                      onClick={() => selectSlot(slot)}
                    >
                      {slot}:00 to {slot}:30
                    </button>
                  ) : (
                    <button
                      className="slotbtn"
                      onClick={() => selectSlot(slot)}
                    >
                      {Math.floor(slot)}:30 to {Math.floor(slot) + 1}:00
                    </button>
                  )
                )}
              </div>
              <div className="bookbtn">
                {date ? (
                  <button onClick={createEvent}>
                    <p>Book Session</p>
                  </button>
                ) : (
                  <img className="calendarselect" src={CalendarSelect} />
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <LoaderHolder>
          <LoadingIcon />
        </LoaderHolder>
      )}

      <Footer />
    </BookSessionStyled>
  );
};