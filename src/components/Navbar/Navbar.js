import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import dropdown from "../../assets/dropdown-arrow.png";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import firebase from "../../firebase.config.js";
import { signOutUser } from "../../redux/user/user-actions";

const Nav = styled.div`
  <<<<<<< HEAD & {
    height: 10vh;
    min-height: 50px;
    background: #b5f7e7;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    display: flex;
    align-items: center;
    gap: 2em;
    width: 100%;
    box-sizing: border-box;
    max-width: 100vw;
    z-index: 2;
  }
  & .line {
    border: 0;
    border-top: 2px solid #eee;
  }
  & .drop {
    padding-left: 1em;
  }
  & .link {
    text-decoration: none;
    color: black;
    transition-duration: 0.3s;
  }
  & .home {
    margin-left: 3em;
  }
  & .auth {
    margin-left: auto;
  }
  & .signup {
    margin-right: 3em;
    padding: 0.4em;
    border: 2px black solid;
    border-radius: 3em;
  }
  & .dropdown-img {
    height: 3em;
    cursor: pointer;
    display: none;
  }
  & .dropdown-list {
    position: absolute;
    top: 10vh;
    right: 0;
    width: 30vh;
    display: flex;
    flex-direction: column;
    padding-top: 1em;
    padding-bottom: 1em;
    gap: 1em;
    background: white;
    z-index: 3;
    border: 1px gray solid;
    display: none;
  }
  & .link:hover {
    color: gray;
  }
  & .signup:hover {
    background: black;
    color: #b5f7e7;
  }
  @media (max-width: 768px) {
    & .contact {
      display: none;
    }
    & .auth {
      display: none;
    }
    & .signup {
      display: none;
    }
    & .dropdown-img {
      display: flex;
      margin-left: auto;
      margin-right: 3em;
    }
    @keyframes drop {
      0% {
        height: 0;
      }
      50% {
        height: 50%;
      }
      100% {
        height: 100%;
      }
    }
  }
`;

const Navbar = ({ currentUser, history, signOutCurrentUser }) => {
  const [isVisible, setIsVisible] = useState(false);
  const onDropDownClick = () => {
    setIsVisible(!isVisible);
  };
  const onSignOutClick = () => {
    if (currentUser) {
      firebase
        .auth()
        .signOut()
        .then(() => signOutCurrentUser());
    } else history.push("/register");
    if (isVisible) onDropDownClick();
  };
  return (
    <Nav className="Navbar">
      <Link to="/" className="link home">
        Home
      </Link>
      <Link to="/mentors" className="link contact">
        Mentors
      </Link>
      <Link to="/about" className="link contact">
        About us
      </Link>
      <Link to="/apply" className="link contact">
        Apply as a Mentor
      </Link>

      <Link to="/signin" className="link auth">
        {currentUser
          ? `Hey ${currentUser.displayName.split(" ")[0]}!`
          : "Sign In"}
      </Link>
      <Link className="link signup" onClick={onSignOutClick} to="/">
        {currentUser ? "Sign Out" : "Sign Up"}
      </Link>
      <img
        src={dropdown}
        className="dropdown-img"
        onClick={onDropDownClick}
        alt="nav-drops"
      />

      {currentUser ? (
        <div
          className="dropdown-list"
          style={{ display: isVisible ? "flex" : "none" }}
          onMouseLeave={() => setIsVisible(false)}
        >
          <Link to="/signin" className="link drop" onClick={onSignOutClick}>
            Log out
          </Link>
          <hr className="line" />
          <Link to="/about" className="link drop" onClick={onDropDownClick}>
            About Us
          </Link>
          <hr className="line" />
          <Link to="/mentors" className="link drop" onClick={onDropDownClick}>
            Mentors
          </Link>
          <hr className="line" />
          <Link to="/apply" className="link drop" onClick={onDropDownClick}>
            Apply as a Mentor
          </Link>
        </div>
      ) : (
        <div
          className="dropdown-list"
          style={{ display: isVisible ? "flex" : "none" }}
          onMouseLeave={() => setIsVisible(false)}
        >
          <Link to="/signin" className="link drop" onClick={onDropDownClick}>
            Sign In
          </Link>
          <hr className="line" />
          <Link to="/register" className="link drop" onClick={onDropDownClick}>
            Sign Up
          </Link>
          <hr className="line" />
          <Link to="/about" className="link drop" onClick={onDropDownClick}>
            About Us
          </Link>
        </div>
      )}
    </Nav>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOutCurrentUser: () => dispatch(signOutUser()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
