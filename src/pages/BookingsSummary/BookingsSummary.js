import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import firebase from "../../firebase.config.js";
import { Booking } from "../../components/Booking/Booking";
import { LoadingIcon } from "../../components/LoadingIcon/LoadingIcon";
import noBookings from "../../assets/noBooking.svg";

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
	& .container1{
		display:flex;
		flex-direction:column;
		background: #b5f7e7;
		box-shadow: 2px 2px 4px 4px grey;	
		padding:2em 10em;
		justify-content:center;
		text-align:center;
		border:0.1em solid black;
	}
	& .heading{
		font-size:2.4rem;
		font-family: 'Proza Libre', sans-serif;
		text-decoration: underline;
	}
	& .bookings{
		display:flex;
		flex-direction:column;
		gap:3em;
	}
	& .noBookings{
		width:40em;	
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
		<div className="newBooking"></div>
			<div className="container1">
				<div className="heading">
					Booking Summary
				</div>

				{bookingsOfCurrentUser?
					bookingsOfCurrentUser.length>0?
						<div className="bookings">
							{bookingsOfCurrentUser.map(bkng=>
								<Booking 
									name={bkng.mentorName}
									college={bkng.mentorCollege} 
									branch={bkng.mentorBranch} 
									photoURL={bkng.mentorPhotoURL} 
									date={bkng.bookedDate.seconds} 
									slot={bkng.bookedSlot}
									bookedOn={bkng.bookedOn.seconds}
								/>)
							}
						</div>
					:<img className="noBookings" src={noBookings} />
				:<LoadingIcon/>}
				{console.log(bookingsOfCurrentUser)}
			</div>
			
		</BookingsPage>
	);
};

const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(BookingsSummary);
