import React from "react";
import Logo from "../../assets/Mentify-Logo.png";
import Videoconference from "../../assets/Videoconference1.png";
import TopShape from "../../assets/TopShape.png";
import BottomShape from "../../assets/BottomShape.png";
import Sreevas from "../../assets/Sreevas.png";
import Adhvaith from "../../assets/Adhvaith.png";
import Sunand from "../../assets/Sunand.png";
import Amal from "../../assets/Amal.png";
import RoundImage from "../../assets/RoundImage.png";
import search from "../../assets/search.png";
import clock from "../../assets/clock.png";
import flexibility from "../../assets/flexibility.png";
import generationy from "../../assets/generationy.png";
import mentor from "../../assets/mentor.png";
import tag1 from "../../assets/tag1.png";
import moneybackguarantee from "../../assets/moneybackguarantee.png";
import rectanglecontactus from "../../assets/Rectanglecontactus.png";
import whatsapp from "../../assets/Whatsapp.png";
import discord from "../../assets/discord.png";
import user from "../../assets/user-add.png";
import laptop from "../../assets/laptop.png";
import arrow from "../../assets/Arrow.png";
import styled from "styled-components";
import { Footer } from "../../components/Footer/Footer";

const Contactusstyled = styled.div`
  & {
    display: flex;
    flex-direction: column;
    height: fit-content;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  & .page1contactus {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 2em;
    padding-left: 3em;
  }

  & .descriptioncontactus {
    width: 100%;
    margin-top: 0.5em;
    margin-right: 0;
    font-style: normal;
    font-weight: bolder;
    font-size: 4rem;
    line-height: 1em;
    font-family: Open Sans;
  }

  & .descriptioncontactuscolor {
    color: #ffb61d;
    font-weight: 500;
    margin-left: 0.8rem;
  }

  & .Videoconference1Image {
    width: auto;
    height: auto;
    margin: 1em;
    margin-left: auto;
  }

  & .logo {
    margin-top: 1em;
  }

  & .wave {
    width: 100%;
    background-color: #b5f7e7;
  }

  & .ExamTitles {
    font-family: "Noto Sans JP", sans-serif;
    font-style: normal;
    font-weight: bold;
    color: #64fcd9;
    font-size: 3rem;
    margin-top: 0.5em;
  }

  & .page2contactus {
    position: relative;
    top: -8vh;
    display: flex;
    flex-direction: column;
  }

  & .detailscontactus {
    padding: 10em;
    background-size: cover;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #b5f7e7;
  }

  & .detailsheadingcontactus {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 3rem;
    line-height: 1em;
    margin-bottom: 0.5em;
    text-align: center;
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

  & .reasons {
    justify-self: flex-start;
    display: flex;
    flex-direction: column;
  }

  & .reasonsheading {
    font-family: Abhaya Libre ExtraBold;
    font-style: normal;
    font-weight: 800;
    font-size: 4rem;
    text-align: center;
    margin-bottom: 2rem;
    line-height: 3.5rem;
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

  & .reasonsimageheading {
    font-family: Abhaya Libre ExtraBold;
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 1em;
    text-align: center;
    margin-bottom: 1em;
    letter-spacing: 0em;
    text-align: center;
  }

  & .reasonsimagecontent {
    font-family: ABeeZee;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.25em;
    text-align: center;
    letter-spacing: 0em;
  }

  & .arrow {
    width: 15%;
    height: 2rem;
  }
  
  & .foundercard {
    background-color: #ffffff;
    border-radius: 0.75em;
    margin-top: 2em;
    margin-bottom: 1em;
    margin-left: 2em;
    margin-right: 1em;
    padding: 1em;
    width: 31.5em;
    flex-wrap: wrap;
  }
  & .foundercardmain {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  & .foundername {
    font-size: 1.25rem;
    font-weight: 600;
    color: #252f40;
  }
  & .foundertitle {
    font-size: 1rem;
    font-weight: 600;
    color: #17c1e8;
  }
  & .founderimage {
    float: left;
    padding-right: 1em;
  }
  & .reasonsimagecard {
    background-color: #ffffff;
    border-radius: 1.5em;
    margin: 2em;
    padding: 1em;
    width: 20em;
    height: 20em;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    align-self: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  & .reasonsimage {
    align-items: center;
  }

  & .reasonsimagemain {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  & .whatsapprectangle {
    background-color: #14d66d;
    border-radius: 1em;
    flex-wrap: wrap;
    font: Roboto;
    font-weight: 700;
    font-style: normal;
    font-size: 2rem;
    color: #ffffff;
    text-align: center;
    width: auto;
    height: 2.75em;
    align-self: center;
    z-index: 1;
  }

  & .discordrectangle {
    background-color: #5b70bc;
    border-radius: 1em;
    flex-wrap: wrap;
    font: Roboto;
    font-weight: 700;
    font-style: normal;
    font-size: 2rem;
    color: #ffffff;
    text-align: center;
    width: auto;
    height: 2.75em;
    align-self: center;
    z-index: 1;
  }

  & .Rectangles {
    display: flex;
    gap: 0.5em;
    margin-top: 0.5em;
  }

  & .whatsapp {
    float: left;
    border-radius: 2em;
    padding: 0.2em;
    padding-left: 0.2em;
    padding-right: 0em;
    height: 100%;
  }
  & .discord {
    float: left;
    border-radius: 2em;
    padding: 0.45em;
  }

  & .discordtext {
    text-align: center;
    margin: 0.4em;
    margin-bottom: 0em;
    line-height: 1em;
    font-weight: bold;
  }

  & .whatsapptext {
    text-align: center;
    margin-top: 0.4em;
    line-height: 1em;
    font-weight: bold;
    justify-content: center;
  }

  & .rectanglecontactus {
    align-items: center;
    z-index: -1;
  }

  & .reasonsbox {
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: auto;
    align-self: center;
    width: 80vw;
    box-sizing: border-box;
    background: #e3fff9;
    border-radius: 1em;
    margin-bottom: 2em;
    padding: 1em;
    padding-top: 3em;
    padding-bottom: 3em;
    grid-template-columns: 4fr 1fr 4fr;
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
    z-index: -1;
  }
  @media (max-width: 1130px) {
    & .Videoconference1Image{
      display: none;
    }
    & .Rectangles{
      flex-direction: column;
    }
  }
  
  }
`;

export const Contactus = () => {
  return (
    <Contactusstyled className="Contactus">
      <div className="page1contactus">
        <div className="intro">
          <img src={Logo} alt="app-logo" className="logo" />
          <div className="descriptioncontactus">
            We are a community
            <br />
            of <span className="descriptioncontactuscolor">Students</span>
            <div className="Contactusbuttons">
              <div className="Rectangles">
                <div className="whatsapprectangle">
                  <img src={whatsapp} className="whatsapp" />
                  <div className="whatsapptext">
                    Join us on <strong>Whatsapp</strong>
                  </div>
                </div>
                <div className="discordrectangle">
                  <img src={discord} className="discord" />
                  <div className="discordtext">Join us on Discord</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src={Videoconference}
          alt="Welcome"
          className="Videoconference1Image"
        />
      </div>
      <div className="page2contactus">
        <img src={TopShape} alt="top" className="wave" />
        <div className="detailscontactus">
          <div className="detailsheadingcontactus">Meet the Team</div>
          <div className="foundercardmain">
            <div className="foundercard">
              <img src={Sreevas} className="founderimage" />
              <div className="foundername">Sreevas P Shenoy</div>
              <div className="foundertitle">UI/UX</div>
              <div>
                Artist is a term applied to a person who engages in an activity
                deemed to be an art.
              </div>
            </div>

            <div className="foundercard">
              <img src={Adhvaith} className="founderimage" />
              <div className="foundername">Adhvaith Kuldeep</div>
              <div className="foundertitle">Boss</div>
              <div>
                Artist is a term applied to a person who engages in an activity
                deemed to be an art.
              </div>
            </div>
            <div className="foundercard">
              <img src={Sunand} className="founderimage" />
              <div className="foundername">Sunand S Warrier</div>
              <div className="foundertitle">Athlete</div>
              <div>
                Artist is a term applied to a person who engages in an activity
                deemed to be an art.
              </div>
            </div>
            <div className="foundercard">
              <img src={Amal} className="founderimage" />
              <div className="foundername">Amal Najeena</div>
              <div className="foundertitle">JS Developer</div>
              <div>
                Artist is a term applied to a person who engages in an activity
                deemed to be an art.
              </div>
            </div>
          </div>
        </div>
        <img src={BottomShape} alt="bottom" className="wave" />
      </div>

      <div className="reasonsbox">
        <div className="reasons">
          <div className="reasonsheading">Here’s why students love us </div>
          <div className="reasonsimagemain">
            <div className="reasonsimagecard">
              <img src={mentor} className="reasonsimage" alt="searchingg" />
              <div className="reasonsimageheading">1-1 mentorship</div>
              <div className="reasonsimagecontent">
                Get personalised attention to all your doubts related to college
                , branch , placements from college students
              </div>
            </div>

            <div className="reasonsimagecard">
              <img src={clock} className="reasonsimage" alt="searchingg" />
              <div className="reasonsimageheading">24*7 customer support</div>
              <div className="reasonsimagecontent">
                If you have any problems , no matter what time it is please
                reach out to us We are always there to help you out
              </div>
            </div>

            <div className="reasonsimagecard">
              <img
                src={generationy}
                className="reasonsimage"
                alt="searchingg"
              />
              <div className="reasonsimageheading">Free webinars</div>
              <div className="reasonsimagecontent">
                Our community members will be given access to free webinars
                which will definitely help them to ace their placements ,masters
                and so on
              </div>
            </div>

            <div className="reasonsimagecard">
              <img
                src={moneybackguarantee}
                className="reasonsimage"
                alt="searchingg"
              />
              <div className="reasonsimageheading">Money back guarantee</div>
              <div className="reasonsimagecontent">
                If your mentor has not turned up for the session or hasnt
                cleared all your doubts , no questions asked full money will be
                refunded
              </div>
            </div>

            <div className="reasonsimagecard">
              <img
                src={flexibility}
                className="reasonsimage"
                alt="searchingg"
              />
              <div className="reasonsimageheading">Flexibility</div>
              <div className="reasonsimagecontent">
                You have the freedom to choose the time and date for your
                mentorship you can also reschedule it to a latter date
              </div>
            </div>

            <div className="reasonsimagecard">
              <img src={tag1} className="reasonsimage" alt="searchingg" />
              <div className="reasonsimageheading">Lowest price guaranteed</div>
              <div className="reasonsimagecontent">
                Yep , You heard it right we value your money and are the only
                website that provides 1-1 mentorship at this small price
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Contactusstyled>
  );
};
