import React from "react";
import styled from "styled-components";
import { Footer } from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import Amal from "../../assets/Amal.png";

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
        height:14em;
        border:0.1em solid black; 
        background-color:#F8F8FF;
        display:flex;
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
    `;

    export const BookSession =()=> {
            return (
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
                        <div className="calendar">
                            BOOK A SESSIONNNN (yet to do) btw should i scale up the size of everything to fit the screen better?  
                        </div>
                    </div>
                    <div className="bottompart">
                        <div className="collegeadmits">
                            <div className="collegeadmitsheading">College Admits</div>
                            <div className="colleges">IIT BHU , BITS GOA , VIT ,SRM, MIT</div>
                        </div>
                        <div className="bookbtn">
                            <button>Book a Session!</button>
                        </div>
                    </div>
                    <Footer/>
                </BookSessionStyled>
            
        );
};