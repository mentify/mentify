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
import { connect } from "react-redux";

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
		padding-bottom: 0.5em;
		text-align: right;
		background-color: #b5f7e7;
		font-family: Roboto;
		text-align: bottom;
		display: flex;
		flex-direction: column-reverse;
		font-size: 1.3rem;
		font-weight: 600;
		border-bottom: 2px solid black;
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
		box-shadow: 5px 5px #888888;
		border: 0.1em solid black;
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
		width: 23em;
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
		width: 23em;
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
		border-bottom: 2px solid black;
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
		width: 23em;
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
		.innermainbox {
			display: flex;
			flex-direction: column;
			justify-content: center;
			text-align: center;
		}
		.dp {
			margin-left: -2em;
		}
		.desc {
			text-align: center;
			width: 12em;
			margin-right: 1em;
			margin-left: 1em;
		}

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
		.react-calendar__tile {
		font-size: 1rem;
		}
		.name{
			font-size:1.5rem;
		}
		.college{
			font-size:1.2rem;
		}
		.branch{
			font-size:1.2rem;
		}
		.price{
			font-size:1rem
		}


		.
	}

	@media (max-width: 768px) {
		.innermainbox {
			display: flex;
			flex-direction: column;
			justify-content: center;
			text-align: center;
		}
		.dp {
			margin-left: -2em;
		}
		.desc {
			text-align: center;
			width: 12em;
			margin-right: 1em;
			margin-left: 1em;
		}

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
			.react-calendar__tile {
		font-size: 1rem;
		}
		.name{
			font-size:1.5rem;
		}
		.college{
			font-size:1.2rem;
		}
		.branch{
			font-size:1.2rem;
		}
		.price{
			font-size:1rem
		}
		.scores{
			font-size:1rem;
			gap:0em;
		}
		.scores1{
			margin-right:1em;
			margin-left:1em;
		}
		.ts{
			font-size:1.3rem;
		}

		.testscores{
			width:70vw;
			margin-left:auto;
			margin-right:auto;
		}
		.name{
			margin-top:-1.5em;
		}
		.dp img{
			width:15em;
			height:auto;
		}
		.collegeadmitsheading{
			font-size:1.3rem;
		}
		.collegeadmits{
			width:80vw;
		}
		.colleges{
			font-size:1.1rem;
		}
		.react-calendar__navigation__label__labelText{
			font-size:1.3rem;
		}
		.slotheading{
			font-size:1.3rem;
		}
		
		.slotbtn{
			width:10em;
			font-size:1rem;
		}
		.bookbtn button{
			width:10em;
			font-size:1.3rem;
		}
	}
`;

//DATABASE STUFF
const mentorEmailId = "adhvaithkul@gmail.com";
/*const preferredSlots1 = new Map([
	[1, [7, 7.5, 8, 8.5]],
	[2, [15, 15.5, 16]],
	[3, [15, 15.5, 16]],
	[4, [15, 15.5, 16]],
	[5, [15, 15.5, 16]],
	[7, [15, 15.5, 16]],
	[6, [22, 22.5, 23, 23.5]],
]);
const bookedSlots = [];*/

const Date1 = new Date(2021, 11, 1);
const Date2 = new Date();

//API CREDS
const REACT_APP_GAPI = window.gapi;

const BookSession = ({ currentUser }) => {
  const { mentorId } = useParams();
  const [date, setDate] = useState("");
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [preferredSlots, setPreferredSlots] = useState("");
  const [bookedSlots, setBookedSlots] = useState("");
  const [slotsToBeDisplayed, setSlotsToBeDisplayed] = useState([]);
  const [mentorData, setMentorData] = useState(null);

  useEffect(() => {
    var bytes = AES.decrypt(mentorId, "mentify");
    var mentorEmail = JSON.parse(bytes.toString(enc.Utf8));

    firebase
      .firestore()
      .collection("mentors")
      .doc(mentorEmail)
      .get()
      .then((doc) => {
        setMentorData(doc.data());
        setBookedSlots(doc.data().bookedSlots);
      });
  }, []);

  const onchange = (date) => {
    setDate(date);
    firebase
      .firestore()
      .collection("mentors")
      .doc(mentorData.email)
      .get()
      .then((doc) => {
        const a = date.getDay();
        const slotsPreffered = mentorData.preferredSlots[a];
        const slotsBooked = doc.data().bookedSlots[date];
        console.log(slotsBooked, slotsPreffered);
        if (slotsBooked) {
          let slotTaken = {};
          for (let i = 0; i < slotsBooked.length; i++) {
            slotTaken[slotsBooked[i]] = true;
          }
          for (let j = 0; j < slotsPreffered.length; j++) {
            if (slotTaken[slotsPreffered[j]]) {
              slotsPreffered.splice(j, 1);
              j--;
            }
          }
        }
        setSlotsToBeDisplayed(slotsPreffered);
      });

    /*slotsToBeDisplayed.forEach((svalue, sindex) => {
				bookedSlots.forEach((value, index) => {
				if ( value[0].getTime() === date.getTime() && bookedSlots[index][1] == svalue) {
					console.log("eee")
					setSlotsToBeDisplayed([...slotsToBeDisplayed.slice(0,sindex),...slotsToBeDisplayed.slice(sindex+1)])
				}
			});
		});*/

    /*slotsToBeDisplayed.forEach((value,index)=>bookedSlots.get(date)===value?slotsToBeDisplayed.splice(index,1):null)
     */
  };

  const tileDisabled = ({ date, view }) => {
    if (view === "month" && mentorData.preferredSlots) {
      for (let key in mentorData.preferredSlots) {
        if (key == date.getDay()) {
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
    if (!currentUser) {
      alert("Please log in or sign up to continue!");
      return;
    }

    REACT_APP_GAPI.load("client:auth2", () => {
      REACT_APP_GAPI.client.init({
        apiKey: process.env.REACT_APP_API_KEY_CALENDAR,
        clientId: process.env.REACT_APP_CLIENT_ID_CALENDAR,
        discoveryDocs: [process.env.REACT_APP_DISCOVERY_DOCS_CALENDAR],
        scope: process.env.REACT_APP_SCOPES_CALENDAR,
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
      REACT_APP_GAPI.client.load("calendar", "v3", () => console.log("loaded"));
      REACT_APP_GAPI.auth2
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
          var request = REACT_APP_GAPI.client.calendar.events.insert({
            calendarId: "primary",
            resource: event,
            conferenceDataVersion: 1,
          });
          request.execute((event) => {
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
          if (bookedSlots[date]) {
            bookedSlots[date] = [...bookedSlots[date], selectedSlot];
          } else bookedSlots[date] = [selectedSlot];
          setBookedSlots(bookedSlots);
          console.log(bookedSlots);
          firebase
            .firestore()
            .collection("mentors")
            .doc(mentorData.email)
            .update({ bookedSlots: bookedSlots })
            .then(() => console.log("updated"));
        });
    });
  };
  const mapGet = (mp, key) => {
    console.log("map get mpky", mentorData.bookedSlots.get(date));
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

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(BookSession);
