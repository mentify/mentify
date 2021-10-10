import React, { useState } from "react";
import styled from "styled-components";
import "../../fonts/Abhaya_Libre/AbhayaLibre-Regular.ttf";
import Logo from "../../assets/Mentify-Logo.png";
import Plus from "../../assets/plus.svg";
import firebase from "../../firebase.config";
import "firebase/storage";
import { AES } from "crypto-js";

const MentorFormStyled = styled.div`
  & {
    display: flex;
    flex-direction: column;
    height: fit-content;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    justify-content: center;
  }

  & .imgupload {
    margin-top: 1em;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  & .imgdisplay {
    width: 6em;
    height: 6em;
    position: relative;
    border-radius: 8em;
    background-color: #e7eaee;
    border: 0.1em solid black;
  }
  & .dp {
    position: relative;
    width: 6em;
    height: 6em;
    left: -0.08em;
    top: -0.1em;
    border-radius: 8em;
  }
  & .imgdesc {
    font-family: "Abhaya Libre", serif;
    font-style: normal;
    font-weight: 550;
    font-size: 1.5rem;
    line-height: 1em;
    margin-top: 1em;
  }

  & .inputs {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 0;
    margin-top: 1.5em;
  }

  & .input100 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 0.8rem;
    line-height: 1.5;
    color: #666666;
    display: block;
    width: 20em;
    background-color: #b5f7e7;
    height: 4em;
    border-radius: 5em;
    padding: 0 4em 0 4em;
    margin: 0.5em;
    border: 0.1rem solid black;
    outline: none;
  }
  & .submitbtn {
    margin-top: 2em;
    text-align: center;
    position: relative;
    margin-bottom: 1em;
    margin-bottom: 2em;
  }

  & .submitbtn input {
    width: 12em;
    height: 2.5em;
    background-color: #fbd341;
    border: none;
    font-style: normal;
    font-weight: 800;
    font-size: 1.2rem;
    border: 0.1em solid black;
    font-family: "Source Sans Pro", sans-serif;
    border-radius: 1em;
  }
  @media (max-width: 992px) {
    .logo {
      display: none;
    }
    .imgupload {
      top: 0;
      margin-top: 1em;
    }
    .inputs {
      top: 0;
    }
    .submitbtn {
      top: 0;
    }
  }

  @media (max-width: 768px) {
    .logo {
      display: none;
    }
    .imgupload {
      top: 0;
    }
    .inputs {
      top: 0;
    }
    .submitbtn {
      top: 0;
      margin-bottom: 3em;
      margin-top: 2em;
    }
  }
  & .form {
    border: 0.15em solid black;
    border-radius: 1em;
    margin: 2em;
    padding-left: 2em;
    padding-right: 2em;
    align-self: center;
    width: fit-content;
    box-shadow: 10px 10px 5px grey;
  }
  & .heading {
    font-family: ABeeZee;
    font-style: italic;
    font-weight: 600;
    font-weight: normal;
    text-align: center;
    font-size: 2.2rem;
    margin-top: 0.5em;
  }
  & .logo {
    position: absolute;
    top: 5.8em;
    margin-left: 3em;
  }
  & .wrap-input100 {
    position: relative;
    z-index: 1;
    margin-bottom: 10px;
  }
  & .focus-input100 {
    display: block;
    position: absolute;
    border-radius: 25px;
    bottom: 0;
    left: 0.8em;
    top: 0;
    z-index: -1;
    width: 15.5em;
    height: 100%;
    align-items: center;
    box-shadow: 0px 0px 0px 0px;
    color: rgba(87, 184, 70, 0.8);
  }

  & .input100:focus + .focus-input100 {
    animation: anim-shadow 0.5s ease-in-out forwards;
  }

  & .symbol-input100 {
    font-size: 15px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    position: absolute;
    border-radius: 25px;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-left: 35px;
    pointer-events: none;
    color: #666666;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
  }

  @-webkit-keyframes anim-shadow {
    to {
      box-shadow: 0px 0px 70px 25px;
      opacity: 0;
    }
  }

  @keyframes anim-shadow {
    to {
      box-shadow: 0px 0px 70px 25px;
      opacity: 0;
    }
  }

  & .input100:focus + .focus-input100 + .symbol-input100 {
    color: #57b846;
    padding-left: 28px;
  }

  & .inputblock {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  & .plus {
    position: absolute;
    top: 4.3em;
    right: -0.1em;
    width: 1.5em;
    height: 1.5em;
    text-align: center;
    background-color: #fbd341;
    border-radius: 3em;
    border: 0.1em solid black;
  }
  & .plus img {
    height: 1.3em;
  }
`;

const storage = firebase.storage();

export const MentorForm = () => {
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);
  const [dp, setDP] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mentorName, setMentorName] = useState(null);
  const [number, setNumber] = useState(null);
  const [mentorEmail, setMentorEmail] = useState(null);
  const [college, setCollege] = useState(null);
  const [linkedIn, setLinkedIn] = useState(null);
  const [branch, setBranch] = useState(null);
  const [jee, setJEE] = useState(null);
  const [bitsat, setBitsat] = useState(null);
  const [advanced, setAdvanced] = useState(null);
  const [admits, setAdmits] = useState(null);

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      setDP(file);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!mentorName || !number || !college || !branch || !mentorEmail) {
      alert("Please enter all the required details.");
      setLoading(false);
      return;
    }

    const id = encodeURIComponent(
      AES.encrypt(JSON.stringify(mentorEmail), "mentify").toString()
    );

    storage
      .ref(`mentors/${id}`)
      .put(dp)
      .then((snap) =>
        storage
          .ref(`mentors/${id}`)
          .getDownloadURL()
          .then((url) =>
            firebase
              .firestore()
              .collection("mentors")
              .doc(`${mentorEmail}`)
              .set({
                id: id,
                name: mentorName,
                email: mentorEmail,
                phone: number,
                college: college,
                linkedIn: linkedIn,
                branch: branch,
                jeeMainsPercentile: jee,
                bitsatMarks: bitsat,
                jeeAdvancedRank: advanced,
                collegeAdmits: admits,
                photoURL: url,
                preferredSlots: {
                  1: [17, 17.5, 18],
                  4: [17, 17.5, 18, 18.5],
                  6: [15, 15.5, 16],
                },
                bookedSlots: [],
                noOfBookings: 0,
              })
              .then(() => {
                setMentorName("");
                setMentorEmail("");
                setNumber("");
                setCollege("");
                setJEE("");
                setBranch("");
                setLinkedIn("");
                setBitsat("");
                setAdmits("");
                setAdvanced("");
                uploadedImage.current.src = "";
                setLoading(false);
                alert(
                  "Your application has been submitted! We will review your application and get back to you"
                );
              })
          )
      )
      .catch((e) => {
        if (e.message === "Missing or insufficient permissions.")
          alert("This email already exists!");
        else alert(e.message);
        setLoading(false);
      });
  };

  return (
    <MentorFormStyled className="MentorFormStyled">
      <div className="logo">
        <img src={Logo} />
      </div>
      <form className="form">
        <div className="imgupload">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            ref={imageUploader}
            style={{
              display: "none",
            }}
          />
          <div
            className="imgdisplay"
            onClick={() => imageUploader.current.click()}
          >
            <div>
              <img className="dp" ref={uploadedImage} />
            </div>
            <div className="plus">
              <img src={Plus} />
            </div>
          </div>
        </div>
        <div className="inputs">
          <div className="inputblock">
            <div className="wrap-input100 ">
              <input
                className="input100"
                type="text"
                placeholder="  Name*"
                onChange={(e) => setMentorName(e.target.value)}
                value={mentorName}
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i class="fa fa-user" aria-hidden="true"></i>
              </span>
            </div>
            <div className="wrap-input100 ">
              <input
                className="input100"
                type="email"
                placeholder="  Email*"
                onChange={(e) => setMentorEmail(e.target.value)}
                value={mentorEmail}
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </span>
            </div>
          </div>
          <div className="inputblock">
            <div className="wrap-input100 ">
              <input
                className="input100"
                type="tel"
                maxLength="10"
                placeholder="  Phone no*"
                onChange={(e) => setNumber(e.target.value)}
                value={number}
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i class="fa fa-phone" aria-hidden="true"></i>
              </span>
            </div>
            <div className="wrap-input100 ">
              <input
                className="input100"
                type="text"
                placeholder="  College*"
                onChange={(e) => setCollege(e.target.value)}
                value={college}
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i class="fa fa-graduation-cap" aria-hidden="true"></i>
              </span>
            </div>
          </div>
          <div className="inputblock">
            <div className="wrap-input100 ">
              <input
                className="input100"
                type="text"
                placeholder="  LinkedIn URL"
                onChange={(e) => setLinkedIn(e.target.value)}
                value={linkedIn}
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i class="fa fa-linkedin" aria-hidden="true"></i>
              </span>
            </div>
            <div className="wrap-input100 ">
              <input
                className="input100"
                type="text"
                placeholder="  Branch"
                onChange={(e) => setBranch(e.target.value)}
                value={branch}
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i class="fa fa-laptop" aria-hidden="true"></i>
              </span>
            </div>
          </div>
          <div className="inputblock">
            <div className="wrap-input100 ">
              <input
                className="input100"
                type="text"
                placeholder="  JEE Mains Percentile"
                onChange={(e) => setJEE(e.target.value)}
                value={jee}
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i class="fa fa-star-half-o" aria-hidden="true"></i>
              </span>
            </div>
            <div className="wrap-input100 ">
              <input
                className="input100"
                type="text"
                placeholder="  Bitsat Score"
                onChange={(e) => setBitsat(e.target.value)}
                value={bitsat}
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i class="fa fa-book" aria-hidden="true"></i>
              </span>
            </div>
          </div>
          <div className="inputblock">
            <div className="wrap-input100 ">
              <input
                className="input100"
                type="text"
                placeholder="  JEE Advance Rank"
                onChange={(e) => setAdvanced(e.target.value)}
                value={advanced}
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i class="fa fa-star" aria-hidden="true"></i>
              </span>
            </div>
            <div className="wrap-input100 ">
              <input
                className="input100"
                type="text"
                placeholder="  College Admits"
                onChange={(e) => setAdmits(e.target.value)}
                value={admits}
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i class="fa fa-university" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="submitbtn" onClick={handleSubmit}>
          <input
            type="submit"
            value=" Apply as a Mentor"
            disabled={loading}
            style={{ backgroundColor: loading ? "#fbd555" : "#fbd341" }}
          />
        </div>
      </form>
    </MentorFormStyled>
  );
};
