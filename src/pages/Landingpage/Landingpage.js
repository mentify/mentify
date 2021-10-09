import React from "react";
import Logo from "../../assets/Mentify-Logo.png";
import Hello from "../../assets/Hello.png";
import topwave from "../../assets/TopWave.png";
import bottomwave from "../../assets/BottomWave.svg";
import RoundImage from "../../assets/RoundImage.png";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import college1 from "../../assets/college1.png";
import college2 from "../../assets/college2.png";
import college3 from "../../assets/college3.png";
import college4 from "../../assets/college4.png";
import college5 from "../../assets/college5.png";
import college6 from "../../assets/college6.png";
import college7 from "../../assets/college7.png";
import { Footer } from "../../components/Footer/Footer";
import Procedure1 from "../../components/procedures/Procedure1";
import Procedure2 from "../../components/procedures/Procedure2";
import Procedure3 from "../../components/procedures/Procedure3";
import TrackVisibility from "react-on-screen";

const Landingpagestyled = styled.div`
	& {
		display: flex;
		flex-direction: column;
		height: fit-content;
		box-sizing: border-box;
		margin: 0;
	}
	& .page1 {
		display: flex;
		justify-content: space-around;
		padding-left: 3em;
		padding-right: 3em;
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
		top: -12vh;
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
		font-style: normal;
		font-weight: normal;
		font-size: 2rem;
		line-height: 1.5em;
		margin-bottom: 0.75em;
	}
	& .details-description1 {
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
		margin-top:2em;
	}
	& .procedures {
		position: relative;
		top: -22vh;
		justify-self: flex-start;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top:-5em;
		gap: 2rem;
	}
	& .procedureHeading {
		font-family: Roboto;
		font-style: normal;
		font-weight: bold;
		font-size: 3rem;
		text-align: center;
		margin-top: 0.5em;
	}

	& .arrowImg {
		z-index: 2;
		position: relative;
		top: -18vh;
	}

	& .colleges {
		transition-duration: 0.5s;
		margin-bottom: 15vh;
	}

	& .collegeListHeading {
		text-align: center;
		font-size: 3rem;
		margin-bottom: 1em;
		margin-top:-2em;
	}

	& .collegeList {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 7em;
	}

	& .collegeImage {
		transition-duration: 0.3s;
		cursor: pointer;
	}

	& .collegeImage:hover {
		transform: scale(1.05);
	}
	& .iitmadras{
		width:17em;
		height:auto;
	}
	& .iitpatna{
		width:17em;
		height:auto;
	}
	@media (max-width: 1055px) {
		& .page1 {
			display: flex;
			flex-direction: column;
			padding-left: 3em;
			padding-right: 3em;
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
	@media (max-width: 700px) {
		& .procedureHeading {
			margin-top: 2em;
			font-size: 2.7rem;
		}
		& .arrowImg {
			top: -18vh;
			left: -20vw;
			height: 15rem;
		}

		& .page2 {
			top: -8vh;
		}
	}
	@media (max-width: 600px) {
		& .page1 {
			display: flex;
			flex-direction: column;
			padding-left: 3em;
			padding-right: 3em;
		}
		& .page2 {
			top: -8vh;
		}
		& .helloImage {
			width: 50vw;
			height: auto;
		}
		& .imageHolder {
			top: -20vh;
		}
	}
	@media (max-width: 768px) {
		.helloImage{
			display:none;
		}
		.ExamTitles{
			margin-bottom:2em;
		}
		.imageHolder{
			margin-top:7em;
			margin-bottom:5em;
			display:none;
		}
		.colleges{
			margin-top:-7em;
		}
		.details-heading{
			font-size:2.5rem;
			margin-bottom:1em;

		}
		.details-description{
			font-size:1.3rem;
			margin-bottom:1.5em;
		}
		.collegeListHeading{
			margin-top:0em;
			font-size:2.3rem;
		}
		.procedureHeading{
			margin-top:6em;
		}
	}
	@media (max-width: 1024px) {
		.helloImage{
			display:none;
		}
		.ExamTitles{
			margin-bottom:2em;
		}
		.imageHolder{
			margin-top:7em;
			margin-bottom:5em;
			display:none;
		}
		.colleges{
			margin-top:-7em;
		}
		.details-heading{
			font-size:2.5rem;
			margin-bottom:1em;

		}
		.details-description{
			font-size:1.3rem;
			margin-bottom:1.5em;
		}
		.collegeListHeading{
			margin-top:0em;
		}
		.procedureHeading{
			margin-top:6em;
		}
	}
`;

export const Landingpage = () => {
	return (
		<Landingpagestyled className="Landingpage">
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
						Choosing a college right after the 12th isn't an easy task. We help you connect with students in those colleges you are looking out for.

					</div>
					<div className="details-description">
						How to build my resume, Publish research papers? We help you connect with students who have walked the path you wish to walk.

					</div>
					<div className="details-description">
						
	Getting an internship while in college isn't an easy task. We help you connect with students interning in various top firms you wish to intern for

					</div>
				</div>
				<img src={bottomwave} alt="bottom" className="wave" />
			</div>
			<div className="imageHolder">
				<img src={RoundImage} alt="settings with lady" />
			</div>
			<div className="procedures">
				<div className="procedureHeading">How do we work ?</div>
				<TrackVisibility>
					<Procedure1 />
				</TrackVisibility>
				<TrackVisibility>
					<Procedure2 />
				</TrackVisibility>
				<TrackVisibility>
					<Procedure3 />
				</TrackVisibility>
			</div>
			<div className="colleges">
				<div className="collegeListHeading">Our Mentors Come From</div>
				<div className="collegeList">
					<img src={college5} alt="collegeimg" className="collegeImage" />
					<img src={college2} alt="collegeimg" className="collegeImage" />
					<img src={college7} alt="collegeimg" className="collegeImage" />
					<img src={college1} alt="collegeimg" className="collegeImage" />
					<img src={college3} alt="collegeimg" className="collegeImage" />
					<img src={college4} alt="collegeimg" className="iitmadras collegeImage" />
					<img src={college6} alt="collegeimg" className="iitpatna collegeImage" />
				</div>
			</div>
			<Footer />
		</Landingpagestyled>
	);
};
