import React from "react";
import styled from "styled-components";
import love from "../../assets/heart.png";
import { Link } from "react-router-dom";

const StyledFooter = styled.div`
	& {
		display: flex;
		flex-direction: column;
		margin-top: auto;
		background: #b5f7e7;
		padding: 3em;
		width: 100%;
		box-sizing: border-box;
		font-family: 'Proza Libre', sans-serif;
	}
	ul {
		list-style-type: none;
	}
	li{
		margin-top:0.7em;
		margin-bottom:0.7em;
		font-size:1.1rem;
		font-weight:600;
		text-align:center;
	}
	input {
		height: 2em;
		width: 10vw;
		margin-right: 1em;
		padding:0.5em;
		border: 1px solid gray;
		font-family: 'Proza Libre', sans-serif;
		font-weight:600;
		font-style:italic;
	}
	button {
		cursor: pointer;
		outline: none;
		border: 1px solid gray;
		background-color:#FBD341;
		border-radius:0.5em;
		padding:0.3em;
	}
	img {
		height: 2em;
	}
	& .footerTop {
		display: flex;
		gap: 2em;
	}
	& .newsLetter {
		margin-top:2em;
		margin-right:3em;
		display: flex;
		text-align:center;
		flex-direction: column;
		margin-left: auto;
		align-items: center;
		font-weight:600;
		font-size:1.2rem;
	}
	& .newsEmail {
		display: flex;
		margin-top: 1em;
	}
	& .made {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5em;
		margin-bottom:-2.5em;
		font-weight:600;
	}
	& hr {
		margin-top: 1em;
		margin-bottom: 1em;
	}
	& .footerTop{
		margin-top:-1.5em;
	}
	& .link{
		text-decoration:none;
		color:black;
	}
	@media (max-width: 992px) {
	& ul{
			margin-left:-2em;
		}
		& li{
			font-size:0.6rem;
			width:10em;
		}
		& .newsLetter{
			font-size:0.7rem;
			margin-right:-1em;
			margin-top:1rem;
			margin-top:-0.6em;
		}
		& input{
			font-size:0.6rem;
			width:10em;
		}
		& button{
			font-size:0.6rem;
		}
		& .newsEmail{
			display:flex;
			flex-direction:column;
			gap:1em;
		}
		& .made{
			font-size:0.7rem;
		}
	  
	}

	@media (max-width: 768px) {
		& ul{
			margin-left:-2em;
		}
		& li{
			font-size:0.6rem;
			width:10em;
		}
		& .newsLetter{
			font-size:0.7rem;
			margin-right:-1em;
			margin-top:-0.01em;
		}
		& input{
			font-size:0.6rem;
			width:10em;
		}
		& button{
			font-size:0.6rem;
		}
		& .newsEmail{
			display:flex;
			flex-direction:column;
			gap:1em;
		}
		& .made{
			font-size:0.7rem;
		}
		
	}

`;

export const Footer = () => {
	return (
		<StyledFooter>
			<div className="footerTop">
				<ul>
					<li><Link to="/" className="link">Home</Link></li>
					<li><Link to="/about" className="link">About Us</Link></li>
					<li><Link to="/mentors" className="link">Mentors</Link></li>
					{/*<li><Link to="/" className="link">Cohorts</Link></li>*/}
				</ul>
				<ul>
					<li><Link to="/register" className="link">Sign Up</Link></li>
					<li><Link to="/signin" className="link">Sign In</Link></li>
					<li><Link to="/apply" className="link">Become a mentor</Link></li>
					{/*<li><Link to="/about" className="link">About Us</Link></li>*/}
				</ul>
				<div className="newsLetter">
					<p>Subscribe to our newsletter</p>
					<div className="newsEmail">
						<div><input type="text" placeholder="Enter your email" /></div>
						<div><button>Subscribe</button></div>
					</div>
				</div>
			</div>
			<hr />
			<p className="made">
				Made with lots of <img src={love} alt="lovee" /> in kerala
			</p>
		</StyledFooter>
	);
};
