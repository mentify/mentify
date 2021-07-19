import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navbar = () => {
  const Nav = styled.div`
    & {
      height: 10vh;
      background: #b5f7e7;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      display:flex;
      align-items:center;
      gap:2em;
    }
    &
  `;
  return (
    <Nav className="Navbar">
      <Link to="/"> Home </Link>
      <Link to="/signin"> Sign In </Link>
    </Nav>
  );
};
