import React from "react";
import { Footer } from "../../components/Footer/Footer";

const Aboutusstyled = styled.div`
   & {
    display: flex;
    flex-direction: column;
    height: fit-content;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
   & .page1contactuaboutboxs {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 2em;
    padding-left: 3em;
  }
`;

export const Aboutus = () => {
  return (
    <Aboutusstyled className="Aboutus">
    <div className= "aboutheading">Contact us</div>
    <div className="aboutbox">
