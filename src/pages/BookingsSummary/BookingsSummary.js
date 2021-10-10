import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import firebase from "../../firebase.config.js";

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
    background: #b5f7e7;
  }
`;

const BookingsSummary = ({ currentUser }) => {
  const [bookingsOfCurrentUser, setBookingsOfCurrentUser] = useState(null);

  useEffect(() => {
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

  return (
    <BookingsPage>
      <div className="bookings"></div>
    </BookingsPage>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(BookingsSummary);
