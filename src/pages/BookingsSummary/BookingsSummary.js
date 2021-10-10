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

const BookingsSummary = ({ currentUser }) => {
  const [bookingsOfCurrentUser, setBookingsOfCurrentUser] = useState(null);

  useEffect(() => {
    if (currentUser)
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
