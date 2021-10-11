import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import firebase from "../../firebase.config.js";
import { Booking } from "../../components/Booking/Booking";
import { LoadingIcon } from "../../components/LoadingIcon/LoadingIcon";
import noBookings from "../../assets/noBooking.svg";
import { Footer } from "../../components/Footer/Footer.js";

const BookingsPage = styled.div`
  & {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2em;
    min-height: 80vh;
  }
  & .bookings {
    padding: 1.5em;
    height: fit-content;

  }
  & .container1 {
    display: flex;
    flex-direction: column;
    background:#ffffff;
    justify-content: center;
    text-align: center;
    border-radius:1em;
  }
  & .heading {
    font-size: 2.4rem;
    font-family: "Proza Libre", sans-serif;
    text-align:center;
  }
  & .bookings {
    display: flex;
    flex-direction: column;
    gap: 3em;
  }
  & .noBookings {
    width: 40em;
  }
  & .icon1{
    margin-right:0.3em;
  }
  @media (max-width: 768px) {
    .noBookings{
      width:22em
    }
  }
  @media (max-width: 768px) {
    .noBookings{
      width:22em
    }
  }
`;

const REACT_APP_GAPI = window.gapi;
const mentorEmailId = "adhvaithkul@gmail.com";

const BookingsSummary = ({ currentUser }) => {
  const [bookingsOfCurrentUser, setBookingsOfCurrentUser] = useState(null);

  useEffect(() => {
    if (currentUser) {
      firebase
        .firestore()
        .collection("bookings")
        .onSnapshot((ref) => {
          setBookingsOfCurrentUser(
            ref.docs
              .filter((doc) => doc.data().studentEmail === currentUser.email)
              .map((doc) => doc.data())
          );
        });
      firebase
        .firestore()
        .collection("currentBooking")
        .doc(currentUser.email)
        .get()
        .then((doc) => {
          console.log(doc.data());
          const selectedSlot = doc.data().bookedSlot;
          const dateInSec = doc.data().bookedDate.seconds;
          var dateInJS = new Date(dateInSec * 1000);
          const date = new Date(dateInJS);
          console.log(date);
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

            REACT_APP_GAPI.client.load("calendar", "v3", () =>
              console.log("loaded")
            );
            REACT_APP_GAPI.auth2
              .getAuthInstance()
              .signIn()
              .then(() => {
                var event = {
                  sendUpdates: "all",
                  sendInvites: true,
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
                      { method: "email", minutes: 10 },

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
                  alert("Your session has been booked. Press OK to continue.");
                });
              });
          });
        });
    }
  }, []);

  console.log(bookingsOfCurrentUser);

  return (
    <>
      <BookingsPage>
        <div className="newBooking"></div>



          {bookingsOfCurrentUser ? (
            bookingsOfCurrentUser.length > 0 ? (
              <div>
              <div className="heading"><i class="fa fa-calendar icon1"></i>    Booking Summary</div>
              <div className="bookings">
                {bookingsOfCurrentUser.map((bkng) => (
                  <Booking
                    name={bkng.mentorName}
                    college={bkng.mentorCollege}
                    branch={bkng.mentorBranch}
                    photoURL={bkng.mentorPhotoURL}
                    date={bkng.bookedDate.seconds}
                    slot={bkng.bookedSlot}
                    bookedOn={bkng.bookedOn.seconds}
                  />
                ))}
              </div></div>
            ) : (<div>
            <div className="heading">No Sessions found</div>
              <img className="noBookings" src={noBookings} />
              </div>
            )
          ) : (
            <LoadingIcon />
          )}

      </BookingsPage>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(BookingsSummary);
