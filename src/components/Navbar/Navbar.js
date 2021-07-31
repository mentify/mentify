import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navbar = () => {
  const Nav = styled.div`
    & {
      height: 10vh;
      background: #b5f7e7;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      display: flex;
      align-items: center;
      gap: 2em;
    }
    & .link {
      text-decoration: none;
      color: black;
    }
    & :last-child {
      margin-right: 3em;
    }
    & :first-child {
      margin-left: 3em;
    }
    & .auth {
      margin-left: auto;
    }
    & .signup {
      padding: 0.4em;
      border: 2px black solid;
      border-radius: 3em;
      transition-duration: 0.5s;
    }
    & .signup:hover {
      background: black;
      color: #b5f7e7;
    }
  `;
  return (
    <Nav className="Navbar">
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/mentors" className="link">
        Mentors
      </Link>
      <Link to="/" className="link">
        Contact Us
      </Link>
      <Link to="/signin" className="link auth">
        Sign In
      </Link>
      <Link to="/register" className="link signup">
        Sign Up
      </Link>
    </Nav>
  );
};
