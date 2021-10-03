import React from "react";
import styled from "styled-components";
import MentorCardMockPic from "../../assets/mentorcard-mockpic.svg";
import RatingStar from "../../assets/rating-star.svg";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import { Link } from "react-router-dom";

const MentorCardStyled = styled.div`
	& {
		margin-top: 2em;
		gap: 5em;
	}
	&. card {
		border: 0px white;
		border: 2px solid black;
	}

	& .box {
		width: fit-content;
		min-width: 10em;
		height: 40vh;
		border: 0.1em white solid;
		box-shadow: 1px 1px 1px 1px grey;
		border-radius: 0.5em;
	}
	& .dp {
		width:8em;
		height:8em;
		border-radius:10em;
		position:relative;
		top:-5em;
		left:-3em;	
		margin-bottom:-4em;
		margin-right:5em;

	}

	& .dp img{
	}
	& .name {
		margin-top: 0.7em;
		font-size: 1.5rem;
		font-family: Roboto;
		font-weight: bold;
		font-family: "Proza Libre", sans-serif;
		margin-left:-2em;
	}
	& .college {
		margin-top: 0.2em;
		color: #96a7af;
		font-size:1.2rem;
		font-family: Roboto;
		margin-left:-2em;
		font-family: "Proza Libre", sans-serif;	
	}

	& .booksession button {
		width: 100%;
		height: 3em;
		font-family: Roboto;
		font-size: 1.2rem;
		margin-top: 4em;
		border-radius: 3em;
		background-color: #b5f7e7;
	}
	& .greentop{
		background-color:#B5F7E7;
		height:4em;
		margin:-0.75em;
		padding-right:1em;
		padding-bottom:0.5em;
		font-size:1.4rem;
		font-weight:600;
		font-family:Roboto;
		text-align: bottom;
		display: flex;
		text-align:right;
		flex-direction: column-reverse;
	}
`;

export const MentorCard = ({ name, college, id, photoURL }) => {
	return (
		<MentorCardStyled className="MentorCardStyled">
			<Flippy flipOnHover={true} className="card">
				<FrontSide>
					<div>
						<div className="greentop">
							<div>mentify.in</div>
						</div>
						<div	className="mainpart">
							<img src={photoURL} alt="mentor-dp" className="dp" />
							<div className="name">{name}</div>
							<div className="college">{college}</div>
						</div>
					</div>
				</FrontSide>
				<BackSide>
					<Link to={`/booksession/${id}`}>
						<div className="booksession">
							<button>Book a session!</button>
						</div>
					</Link>
				</BackSide>
			</Flippy>
		</MentorCardStyled>
	);
};
