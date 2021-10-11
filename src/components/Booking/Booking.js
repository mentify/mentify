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
		box-shadow: 5px 5px #888888;
	}
	& .greentop{
		background:#A3FD84;
		width:40em;
		margin-left:-4em;
		margin-right:-4em;
		height:10em;
		margin-top:-4em;
		margin-right:-4em;
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
		font-weight: 500;
		margin-top: 1em;
		margin-bottom:1em;
		margin-left:1em;
		margin-right:1em;
		font-family: 'Lato', sans-serif;
		text-align:center;
	}
	& .mainbox {
		width: fit-content;
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
	& .dp img {
		width: 13em;
		height: 13em;
		border-radius: 1em;
		position: relative;
		top: -2.5em;
		box-shadow: 5px 5px #888888;
		border: 0.1em solid black;
		margin-left:3em;
		margin-right:3em;
	}

	& .desc {
		margin-top: 1em;
		font-size: 1.3rem;
		font-family: Roboto;
		font-weight: 500;
		display: flex;
		margin-right: 2em;
		text-align: center;
		flex-direction: column;
		justify-content:center;
		text-align:left;
		font-family: 'Lato', sans-serif;	
	}
	& .desc * {
		margin-bottom: 0.7em;
	}
	& .name {
		font-size: 1.7rem;
		margin-bottom:-0.1em;
	}
	& .college{
		margin-bottom:0em;
		font-weight:500;
		font-size:1.5rem;
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
	& .icon{
		margin-right:0.5em;
	}
	@media (max-width: 768px) {
		.mentify{
			display:none;
		}
		.desc{
			text-align:center;
			justify-content:center;
			margin-right:auto;
			margin-left:auto;
		}
		}
		.desc *{
			margin-right:0em;
			margin-left:0em;
			font-size:1.2rem;
		}
		.icon{
			margin-right:0.2em;
		}
	}
	@media (max-width: 992px) {
		.mentify{
			display:none;
		}
		.desc{
			text-align:center;
			justify-content:center;
			margin-right:auto;
			margin-left:auto;
		}
		.desc *{
			margin-right:0em;
			margin-left:0em;
			font-size:1.2rem;
		}
		.icon{
			margin-right:0.2em;
		}
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
		<div className="mainbox">
              <div className="topgreen1">
                <div className="mentify">mentify.in</div>
              </div>
              <div className="innermainbox">
                <div className="dp">
                  <img src={photoURL} />
                </div>
                <div className="desc">
                  <div className="name"><i class="fa fa-user icon" aria-hidden="true"></i>{name}</div>
                  <div className="college"><i class="fa fa-university icon" aria-hidden="true"></i>{college} </div>
                  <div>
							<b> Booked Date: </b> {makeDate(date)}
						</div>
						<div>
							<span> <b>Booked Time Slot: </b></span>
							{slot - Math.floor(slot) == 0 ? (
								<span>
									{slot}:00 to {slot}:30
								</span>
							) : (
								<span>
									{Math.floor(slot)}:30 to {Math.floor(slot) + 1}:00
								</span>
							)}
						</div>
						<div>
							<b> Booked On: </b>
							{makeDate(bookedOn)}
						</div>
                </div>
              </div>
              <div className="checkCalendar">
					Please check your registered mail for the Meeting Link
				</div>
            </div>
			{/*<div className="container">
				<div className="greentop">
				</div>
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
			</div>*/}
		</BookingStyled>
	);
};
