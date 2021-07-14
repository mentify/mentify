import React from "react";
import styled from "styled-components";

export const Navbar = () => {
  const Nav = styled.div`
    height: 10vh;
    background: #b5f7e7;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  `;
  return <Nav className="Navbar"></Nav>;
};
