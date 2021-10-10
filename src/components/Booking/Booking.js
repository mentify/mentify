import React, { useState, useEffect } from "react";
import styled from "styled-components";

const BookingStyled = styled.div`
    & {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    & .container{
        display:flex;
        flex-direction:column;
        justify-content: center;
        background:#ffffff;
        border-radius:2em;
        border:0.1em solid black;
        width:fit-content;
        align-items:center;
        padding:4em;
        box-shadow: 2px 2px 4px 4px grey;
    }
    & .main{
        margin-top:-1em;
        display:flex;
        flex-wrap:wrap;
        align-items:center;
        justify-content:center;
        gap:5em;
        margin-bottom:2em;
    }
    & .photo img{
        width:12em;
        height:12em;
        align-items:center;
        box-shadow: 2px 2px 4px 4px grey;
        border:0.1em solid black;
    }
    & .details{
        display:flex;
        flex-direction:column;
        font-family: 'Proza Libre', sans-serif;
        gap:0.2em;
        font-size:1.5rem;
        align-items:center;
        text-align:left;
        font-weight:500;
    }
    & .checkCalendar{
        font-size:1.3rem;
        font-style: italic;
        font-weight:600;
        margin-top:1em;
        margin-bottom:-1em;
    }
    `;

    export const Booking = ({ name, college, branch, photoURL,date,slot,bookedOn }) => {
        const [bookedDate, setBookedDate] = useState("");
        const [bookedOnDate, setBookedOnDate] = useState("");

        const makeDate=(seconds1)=>{
            var d1 = new Date(seconds1);
            console.log(seconds1)
            let a1=d1.getDate() + '/' + (d1.getMonth()+1) + '/' + d1.getFullYear();
            return a1 
        }

        return(
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
                            <div> {makeDate(date)} </div>
                            <div>{ `Booked on: ${makeDate(bookedOn)}`}</div>
                            <div> {slot - Math.floor(slot) == 0 ?<p>{slot}:00 to {slot}:30</p>:<p>{Math.floor(slot)}:30 to {Math.floor(slot) + 1}:00</p>}</div>
                        </div>
                    </div>
                    <div className="checkCalendar">
                        Check your Google Calender for Meeting Link
                    </div>
                </div>
            </BookingStyled>
        )
    }