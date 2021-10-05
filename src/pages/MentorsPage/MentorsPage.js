import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../../assets/Mentify-Logo.png";
import MentorTrophy from "../../assets/mentor-trophy.svg";
import Typewriter from "typewriter-effect";
import { MentorCard } from "../../components/MentorCard/MentorCard";
import { Footer } from "../../components/Footer/Footer";
import firebase from "../../firebase.config.js";
import { LoadingIcon } from "../../components/LoadingIcon/LoadingIcon";

const MentorsPageStyled = styled.div`
	& {
		display: flex;
		flex-direction: column;
		height: fit-content;
		box-sizing: border-box;
		margin: 0;
		padding:0;
	}
	& .toppart{
		display: flex;
		justify-content:flex-start;
		padding-left: 3em;
		padding-right: 3em; 
	}
	& .logo{
		margin-top:1em;
	}
	& .content1{
		font-family: Roboto;
		font-style: normal;
		font-weight: 500;
		letter-spacing: 0em;
		text-align: left;
		width: 60%;
		margin-top: 1em;
		margin-right: 0;
		font-size: 2.5rem;
		display:flex;
		flex-wrap:wrap;
		line-height: 1em;	
	}
	& .newline{
		flex: 0 0 100%;
	}
	& .space{
		margin-right:0.2em;
	}

	& .yellow{
		color: #FFB61D;
	}
	& .yellowt{
		color: #FFB61D;
	}
	& .green{
		color: #3DD598;
		font-weight: 700;
	}
	& .content2{
		font-family: Roboto;
		font-style: normal;
		font-weight: 500;
		letter-spacing: 0em;
		text-align: left;
		width: 60%;
		margin-top: 2em;
		margin-right: 0;
		font-size: 1.7rem;
		line-height: 1.2em;	
	}
	& .mentortrophy{
		margin-top:5em;
		width: 35%;
		margin-right:1em;
		height:auto:
	}
	& .mainpart{
		margin-top:3em;	
		display: flex;
		justify-content: space-around;
		padding-left: 3em;
		padding-right: 3em; 
		justify-content:left;
		display: flex;
		flex-direction: column;
	}

	& .heading{
		padding-top:1em;
		font-family: Roboto;
		font-size: 2rem;
		font-style: normal;
		font-weight: 700;
		line-height: 1em;
		letter-spacing: 0em;
		text-align: left;	
	}

	& .desc{
		font-family: Roboto;
		font-style: normal;
		font-weight: normal;
		font-size: 2rem;
		line-height: 1em;
		color: #7C868B;
		text-align:left;
		margin-top:1em;
	}
	& .search{
		margin-top:1.5em;
		width:50%;
		margin-bottom:4em;

	}
	& .search input{
		text-align:left;
		width:60%;
		font-size: 1.3rem;
		height:1em;
		padding:1em;
		border: 0.1em black solid;
	}
	& .mentorcards{
		margin-bottom:8em;
		display:flex;
		justify-content:center;
		gap:4em;
		flex-wrap:wrap;
	}

	@media (max-width: 992px) {
	  .mentortrophy {
	    width: 45%;
	  }
	  .content1{
	  	width:80vw;
	  }
	  .content2{
	  	width:80vw;
	  }
	  .yellow2{
	  	position:absolute;
	  }
	  .search input{
	  	width:12em;
	  }
	  .content1{
	  	font-size:1.7rem;
	  }
	  .content2{
	  	font-size:1.5rem;
	  }
	  .heading{
	  	font-size:1.5rem;
	  }
	  .desc{
	  	font-size:1.5rem;
	  }
	 
	 
	}

	@media (max-width: 768px) {
	  .mentortrophy {
	    display: none;
	  }
	  .content1{
	  	width:80vw;
	  }
	  .content2{
	  	width:80vw;
	  }
	  .yellow2{
	  	position:absolute;
	  }
	  .content1{
	  	font-size:1.7rem;
	  }
	  .content2{
	  	font-size:1.5rem;
	  }
	  .heading{
	  	font-size:1.5rem;
	  }
	  .desc{
	  	font-size:1.5rem;
	  }
	}

	

	`;

export const MentorsPage = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("mentors")
      .onSnapshot((snap) => {
        let currentMentors = [];
        snap.docs.forEach((mentor) => currentMentors.push(mentor.data()));
        setMentors(currentMentors);
      });
  }, []);

  return (
    <MentorsPageStyled className="MentorsPageStyled">
      <div className="toppart">
        <div className="intro">
          <img src={Logo} alt="app-logo" className="logo" />
          <div className="content1">
            <div className="space">All the best </div>
            <div className="yellowt">
              <Typewriter
                options={{
                  strings: [" Students,", " Mentors,"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <div className="newline">all in one place.</div>
          </div>
          <div className="content2">
            Mentors on <span className="green">mentify</span> will help you
            achieve your most ambititous goals.{" "}
            <p className="yellow">Come on, let’s smash them together!</p>
          </div>
        </div>
        <img src={MentorTrophy} alt="mentor-trophy" className="mentortrophy" />
      </div>
      <div className="mainpart">
        <div className="heading">Explore mentors</div>
        <div className="desc">There are over 100+ mentors on mentify!</div>
        <div className="search">
          <input type="search" placeholder="Search anything ...." />
        </div>
        <div className="mentorcards">
          {mentors.length > 0 ? (
            mentors.map((mentor) => {
              return (
                <MentorCard
                  name={mentor.name}
                  college={mentor.college}
                  id={mentor.id}
                  photoURL={mentor.photoURL}
                />
              );
            })
          ) : (
            <LoadingIcon />
          )}
        </div>
      </div>
      <Footer />
    </MentorsPageStyled>
  );
};
