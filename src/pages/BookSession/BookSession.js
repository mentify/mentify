import React from "react";
import styled from "styled-components";
import { Footer } from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import Amal from "../../assets/Amal.png";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { differenceInCalendarDays } from 'date-fns';

const BookSessionStyled = styled.div`
    & {
        display: flex;
        flex-direction: column;
        height: fit-content;
        box-sizing: border-box;
        margin: 0;
        padding:0;
        justify-content:center;
    }  
    & .toppart{
        margin-left:5em;
        margin-right:5em;
        margin-top:3em;
        align-self:center;
        text-align:center;
        width:fit-content;
        gap:3em;
        border: 0.1em solid black;
        display:flex;
        justify-content:center;
        flex-wrap:wrap;
        padding:2em 4em 2em 4em;
    }
    & .dp img{
        width:13em;
        height:13em;
        border-radius:8em;
    }
    & .desc{
        font-size:1.5rem;
        font-family:Roboto;
        font-weight:600;
        display:flex;
        text-align:center;
        flex-direction:column;
    }
    & .desc *{
        margin-bottom:1em; 
    }
    & .name{
        font-size:2rem;
    }
    & .yellow{
        background-color:#FBD341;
        border-radius:1.5em;
        padding:0.5em;
        margin-right:0.5em;
    }
    & .price{
        margin-top:0.5em;
        text-align:center;
        line-height:1.5em;
    }
    & .book{
        text-align:center;
        display:flex;
        justify-self:center;
        align-self:center;
    }
    & .book button{
        width:12em;
        height:3em;
        border-radius:1em;
        background-color:#FBD341;
        border:none;
        font-family:Roboto;
        font-size:1.2rem;
        font-weight:800;
        padding: 0px;
        border: 0px;
        cursor: pointer;  
        border: 0.1em solid black;
    }
    & .middlepart{
        display:flex;
        flex-wrap:wrap;
        margin:3em;
        gap:3em;
        justify-content:center;
    }
    & .testscores{
        width:fit-content;
        height:fit-content;
        border:0.1em solid black;
        display:flex;
        flex-direction:column;
    }
    & .ts{
        align-self:center;
        font-family:Roboto;
        font-size:1.7rem;
        font-weight:800;
        margin-top:1em;
        text-decoration:underline;
    }
    & .scores{
        align-self:center;
        gap:2em;
        margin:1em;
        font-size:1.3rem;
        font-weight:600;
        font-family:Roboto;
    }

    & .yellow1{
        color:#FFB61D;
        float:right;
    }
    & .test{
        align-self:left;
        margin-right:3em;
    }
    & .scores1{
        text-align:left;
        gap:3em;
    }
    & .calendar{
        width:30em;
        height:fit-content;
        border:0.1em solid black; 
        background-color:#F8F8FF;
        display:flex;
        padding:1em;
        font-size:1em;
        font-weight:800;
        justify-content:center;
        align-items:center;
    }
    & .bottompart{
        display:flex;
        gap:3em;
        flex-wrap:wrap;
        margin-bottom:3em;
        justify-content:center;
    }
    & .collegeadmits{
        padding-right:1em;
        padding-left:1em;
        padding-bottom:1em;
        margin-left:2em;
        margin-right:2em;
        width:fit-content;
        text-align:center;
        height:fit-content;
        border:0.1em solid black;
    }
    & .collegeadmitsheading{
        font-family:Roboto;
        font-size:1.7rem;
        font-weight:600;
        text-decoration:underline;
        margin:1em; 
    }
    & .colleges{
        font-size:1.4rem;
        font-family:Roboto;
        font-weight:600;
        margin-right:1em;
        margin-left:1em;

    }
    & .bookbtn{
        align-self:center; 
    }
    & .bookbtn button{
        width:12em;
        height:3em;
        border-radius:0.7em;
        background-color:#FBD341;
        font-size:1.5rem;
        font-family: 'Source Sans Pro', sans-serif;
        font-style: normal;
        font-weight: bold;
        cursor: pointer;  
        border: 0.1em solid black;
    }
    & .timeslot{
        height:20em;
        width:fit-content;
        border:0.1em solid black; 
        display:flex;
        padding:1em;    
        flex-direction:column;
    }

    & .timeslotbtn{
        height:4em;
        margin-bottom:1em;
        border-radius:0.7em;
        border: 0.1em solid black

    }
    `;

    export class BookSession extends React.Component {
        preferredDays = [2,4,6];
        preferredTimes=[7,8,15,16,22,23]
        mentorEmailId="adhvaithkul@gmail.com"
        preferredSlots = new Map([[2, [7,9,17,18]], [4 ,[15,16]] ,[6,[22,23]]]);

        gapi=window.gapi
        CLIENT_ID="487444471330-c1io6lpljdgh3sq5rrs2qurp80v2bjn2.apps.googleusercontent.com"
        API_KEY="AIzaSyAYLG6TgLw2GSp4r83gc8Dey4ADEagOYF4"
        DISCOVERY_DOCS=["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
        SCOPES = "https://www.googleapis.com/auth/calendar"
        
        constructor() {
            super()
            this.state = {
                date:'',
                slots:""
            }
        }

        onchange=(date)=>{
            this.setState({date:date })
            /*this.state.slots.length=0
            let a=date.getDay()
            for(let [key,value] of this.preferredSlots){
                if(key===a){
                    this.state.slots.push(value)
                }
            }*/
            let a=date.getDay()
            let b=this.preferredSlots.get(a)
            this.setState({slots:b})
        }

        isSameDay=(a, b)=> {
          return b.getDay()=== a;
        }

        tileDisabled=({ date, view })=> {
          if (view === 'month') {
            for(let key of this.preferredSlots.keys()){
                if(this.isSameDay(key,date)){
                    return(false)
                }
            }
            return(true)
          }
        }

        createEvent=()=>{
            this.gapi.load('client:auth2', () => {
                this.gapi.client.init({
                    apiKey:this.API_KEY,
                    clientId:this.CLIENT_ID,
                    discoveryDocs:this.DISCOVERY_DOCS,
                    scope:this.SCOPES
                })
                this.gapi.client.load('calendar','v3',()=>console.log("loaded"))
                this.gapi.auth2.getAuthInstance().signIn()
                .then(()=>{
                    var event = {
                              'summary': 'Mentorship',
                              'description': 'Really great refreshments',
                              'start': {
                                'dateTime': '2021-09-24T09:00:00-07:00',
                                'timeZone': 'America/Los_Angeles'
                              },
                              'end': {
                                'dateTime': '2021-09-24T17:00:00-07:00',
                                'timeZone': 'India/Kolkata'
                              },
                              'recurrence': [
                                'RRULE:FREQ=DAILY;COUNT=2'
                              ],
                              'attendees': [
                                {'email': this.mentorEmailId},
                              ],
                              'reminders': {
                                'useDefault': false,
                                'overrides': [
                                  {'method': 'email', 'minutes': 24 * 60},
                                  {'method': 'popup', 'minutes': 10}
                                ]
                              }
                            }
                        var request = this.gapi.client.calendar.events.insert({
                                  'calendarId': 'primary',
                                  'resource': event,
                                })

                                request.execute(event => {
                                  console.log(event)
                                  window.open(event.htmlLink)
                                })
                })  
            })
        }


        render(){return (
                <BookSessionStyled className="BookSessionStyled">
                    <div className="toppart">
                        <div className="dp"><img src={Amal}/></div>
                        <div className="desc">
                            <div className="name">Adhvaith Kuldeep</div>
                            <div className="college">BITS Pilani </div>
                            <div className="branch">Mechanical Engineering</div>
                            <div className="price" > <span className="yellow"> ₹ 350 </span> for a 30 min session</div>
                        </div>  
                        <div className="book">
                            <button>Book a Session</button>
                        </div>  
                    </div>   
                    <div className="middlepart">
                        <div className="testscores">
                            <div className="ts">Test Scores</div>
                            <div className="scores1">
                                <div className="scores"><span className="test">JEE Mains</span><span className="yellow1">95.34</span></div>
                                <div className="scores"><span className="test">JEE Advance</span><span className="yellow1">20,000</span></div>
                                <div className="scores"><span className="test">BITSAT</span><span className="yellow1">277</span></div>
                            </div>
                        </div>
                        <div className="collegeadmits">
                            <div className="collegeadmitsheading">College Admits</div>
                            <div className="colleges">IIT BHU , BITS GOA , VIT ,SRM, MIT</div>
                        </div>
                    </div>
                    <div className="bottompart">
                        <div className="calendar">
                            <Calendar
                                onChange={this.onchange}
                                value={this.state.date}
                                tileDisabled={this.tileDisabled}
                                onClickDay={this.onClickDay}
                            />
                        </div>
                        {}
                        <div className="timeslot">
                            {this.state.date?<div>Check Availability of Time Slot</div>:null}
                            
                            
                            <div className="bookbtn">
                                <button onClick={this.createEvent}>{this.state.date?<p>Book Session</p>:<p> Book Session</p>}</button>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </BookSessionStyled>
            
        );
    }
};