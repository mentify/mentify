import React from "react";
import Logo from "../../assets/Mentify-Logo.png";
import Hello from "../../assets/Hello.png";
import topwave from "../../assets/TopWave.png";
import bottomwave from "../../assets/BottomWave.png";
import RoundImage from "../../assets/RoundImage.png";
import search from "../../assets/search.png";
import user from "../../assets/user-add.png";
import laptop from "../../assets/laptop.png";
import arrow from "../../assets/Arrow.png";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

export const Landingpage = () => {
	const Landingpage = styled.div`
		& {
			display: flex;
			flex-direction: column;
			height: 100%;
			box-sizing: border-box;
			margin: 0;
		}
		& .page1 {
			display: flex;
			justify-content: space-around;
			padding-left: 6em;
			padding-right: 6em;
		}
		& .description {
			width: 80%;
			margin-top: 1em;
			margin-right: 0;
			font-family: "Rubik", sans-serif;
			font-style: normal;
			font-weight: 500;
			font-size: 1.8rem;
			line-height: 1em;
		}
		& .helloImage {
			width: 35vw;
			height: auto;
		}
		& .logo {
			margin-top: 1em;
		}
		& .wave {
			width: 100%;
		}
		& .ExamTitles {
			font-family: "Noto Sans JP", sans-serif;
			font-style: normal;
			font-weight: bold;
			color: #64fcd9;
			font-size: 3rem;
			margin-top: 0.5em;
		}
		& .page2 {
			position: relative;
			top: -8vh;
			display: flex;
			flex-direction: column;
		}

		& .details {
			padding: 3em;
			background-size: cover;
			height: fit-content;
			display: flex;
			flex-direction: column;
			justify-content: center;
			background: #b5f7e7;
			margin: 0;
		}
		& .details-heading {
			font-family: Roboto;
			font-style: normal;
			font-weight: bold;
			font-size: 3rem;
			line-height: 1em;
			margin-bottom: 0.5em;
		}
		& .details-description {
			font-family: Rhodium Libre;
			font-style: normal;
			font-weight: normal;
			font-size: 2rem;
			line-height: 1.5em;
			margin-bottom: 0.75em;
		}
		& .imageHolder {
			display: flex;
			justify-content: center;
			position: relative;
			top: -40vh;
		}
		& .procedure {
			justify-self: flex-start;
			display: flex;
			flex-direction: column;
			padding-left: 3em;
			padding-right: 3em;
		}
		& .procedureHeading {
			font-family: Roboto;
			font-style: normal;
			font-weight: bold;
			font-size: 3rem;
			text-align: left;
			margin-bottom: 2rem;
		}
		& .steps {
			margin-top: 0;
			display: flex;
			justify-content: space-around;
			align-items: center;
			text-align: center;
			gap: 2em;
		}
		& .step {
			width: 20%;
		}
		& .step img {
			width: 3rem;
			height: auto;
		}
		& .stepHeading {
			font-family: Roboto;
			font-style: normal;
			font-weight: 500;
			font-size: 2rem;
			line-height: 1em;
			text-align: center;
			margin-bottom: 1em;
		}
		& .stepContent {
			font-family: Roboto;
			font-style: normal;
			font-weight: 500;
			font-size: 1.5rem;
			line-height: 1.25em;
			text-align: center;
		}
		& .arrow {
			width: 15%;
			height: 2rem;
		}
		@media (max-width: 1055px) {
			& .page1 {
				display: flex;
				flex-direction: column;
				padding-left: 3em;
				padding-right: 3em;
			}
			& .steps {
				flex-direction: column;
			}
			& .step {
				width: 50%;
			}

			& .arrow {
				width: 17%;
				height: 0.7rem;
				transform: rotate(90deg);
				transition-duration: 0.5s;
				margin: 2em;
			}
			& .imageHolder {
				top: -20vh;
			}

			& .procedureHeading {
				text-align: center;
			}

			& .details-description {
				font-size: 1.75rem;
				line-height: 1.5em;
			}
		}
		@media (max-width: 600px) {
			& .page1 {
				display: flex;
				flex-direction: column;
				padding-left: 3em;
				padding-right: 3em;
			}
			& .helloImage {
				width: 50vw;
				height: auto;
			}
			& .imageHolder {
				top: -20vh;
			}
		}
	`;
	return (
		<Landingpage className="Landingpage">
			<div className="page1">
				<div className="intro">
					<img src={Logo} alt="app-logo" className="logo" />
					<div className="description">
						Book ONE-TO-ONE sessions with the brightest minds of India and get
						to know how they cracked
					</div>
					<div className="ExamTitles">
						<Typewriter
							options={{
								strings: ["IIT-JEE", "OLYMPIADS", "BITSAT", "PLACEMENTS"],
								autoStart: true,
								loop: true,
							}}
						/>
					</div>
				</div>
				<img src={Hello} alt="Welcome" className="helloImage" />
			</div>
			<div className="page2">
				<img src={topwave} alt="top" className="wave" />
				<div className="details">
					<div className="details-heading">Why Mentify ?</div>
					<div className="details-description">
						Choosing a college right after 12th isnt an easy task , We help you
						connect with students in those colleges you looking out for
					</div>
					<div className="details-description">
						How to build my resume , Publish research papers ? We help you
						connect with students who have walked the path you wish to walk
					</div>
					<div className="details-description">
						Getting internship in while in college isnt an easy task , We help
						you connect with students interning in various top firms you wish to
						intern for
					</div>
				</div>
				<img src={bottomwave} alt="bottom" className="wave" />
			</div>
			<div className="imageHolder">
				<img src={RoundImage} alt="settings with lady" />
			</div>
			<div className="procedure">
				<div className="procedureHeading">How do we work ?</div>
				<div className="steps">
					<div className="step">
						<img src={search} alt="searchingg" />
						<div className="stepHeading">Select a mentor</div>
						<div className="stepContent">
							Select a mentor based on the college / company you are looking for
						</div>
					</div>
					<img src={arrow} alt="arrow" className="arrow" />
					<div className="step">
						<img src={laptop} alt="laptop" />
						<div className="stepHeading">Book a Session</div>
						<div className="stepContent">
							Book a slot for a session with your mentor
						</div>
					</div>
					<img src={arrow} alt="arrow" className="arrow" />
					<div className="step">
						<img src={user} alt="user" />
						<div className="stepHeading">1-1 Mentoring Session</div>
						<div className="stepContent">
							Get a meeting invite on your email for a mentoring session with
							your mentor and clarify all your queries.
						</div>
					</div>
				</div>
			</div>
		</Landingpage>
	);
};
