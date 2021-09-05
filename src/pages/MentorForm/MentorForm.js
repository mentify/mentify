import React from "react";
import styled from "styled-components";
import { Footer } from "../../components/Footer/Footer";
import MentorApplyImg from "../../assets/MentorApply.svg";
import { Link } from "react-router-dom";
import '../../fonts/Abhaya_Libre/AbhayaLibre-Regular.ttf'; 
import Logo from "../../assets/Mentify-Logo.png";
import Background from "../../assets/background.svg";

const MentorFormStyled = styled.div`
    & {
        display: flex;
        flex-direction: column;
        height: fit-content;
        box-sizing: border-box;
        margin: 0;
        padding:0;
        justify-content:center;
        background: url(pattern_waves-2_1_2_0-0_0_1__ffffff_b6f7e7_fbd341_00);
    }  
    
    & .imgupload{
        margin-top:1em;
        position:relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    & .imgdisplay{
        width:6em;
        height:6em;
        border-radius:8em;
        background-color:#E7EAEE;
        border:0.1em solid black;
    }
    & .imgdisplay img{
        width:100%;
        height:100%;
        position:relative;
        border-radius:8em;
    }
    & .imgdesc{
       font-family: 'Abhaya Libre', serif;
        font-style: normal;
        font-weight: 550;
        font-size: 1.5rem;
        line-height: 1em;
        margin-top: 1em;
    }

    & .inputs{
        position:relative;
        display: flex;
        flex-direction: column;
        justify-content:center;
        margin-bottom:0;
        margin-top:2em;
    }

     & .input100 {
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      font-size: 0.8rem;
      line-height: 1.5;
      color: #666666;
      display: block;
        width:20em;
       background-color:#B5F7E7;
      height: 4em;
      border-radius: 5em;
      padding: 0 4em 0 4em;
      margin-left:1em;
      margin-right:1em;
      border: 0.1rem solid black;    
    }
    & .submitbtn{
        text-align:center;
        position:relative;
        margin-bottom:1em;
    }

    & .submitbtn input{
        width:12em;
        height:2.5em;
        background-color:#FBD341;
        border:none;
        font-style: normal;
        font-weight: 800;
        font-size: 1.2rem;
        border:0.1em solid black;
        font-family: 'Source Sans Pro', sans-serif;
        border-radius:1em;
    }
    @media (max-width: 992px) {
     .logo{
        display:none;
     }
     .imgupload{
        top:0;
        margin-top:1em;
     }
     .inputs{
        top:0;
     }
     .submitbtn{
        top:0;
     }
      
    }

    @media (max-width: 768px) {
      .logo{
        display:none;
      }
       .imgupload{
        top:0;
     }
     .inputs{
        top:0;
     }
      .submitbtn{
        top:0;
        margin-bottom:3em;
        margin-top:2em;
     }
    }
    & .form{
        border:0.1em solid black;
        border-radius:1em;
        margin:2em;
        align-self:center;
        width:fit-content;
     }
     & .heading{
        font-family: ABeeZee;
        font-style: italic;
        font-weight:600;
        font-weight: normal;
        text-align:center;
        font-size:2.2rem;
        margin-top:0.5em;
     }
     & .logo{
        position:absolute;
        top:5.8em;
        margin-left:3em;
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
      left: 0;
      z-index: -1;
      width: 16.5em;
      height: 100%;
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

    & .inputblock{
        display:flex;
        flex-wrap:wrap;
        justify-content:center;
    }
    
    `;

    export const MentorForm =()=> {
        const uploadedImage = React.useRef(null);
        const imageUploader = React.useRef(null);
        const handleImageUpload = e => {
            const [file] = e.target.files;
            if (file) {
                const reader = new FileReader();
                const {current} = uploadedImage;
                current.file = file;
                reader.onload = (e) => {
                    current.src = e.target.result;
                }
                reader.readAsDataURL(file);
            }
        };
            return (
                <MentorFormStyled className="MentorFormStyled">
                <div className="logo"> <img src={Logo}/></div>
                    <form className="form">
                        <div className="heading">Apply as a mentor</div>
                        <div className= "imgupload">
                            <input 
                                type="file" 
                                accept="image/*" 
                                onChange={handleImageUpload} 
                                ref={imageUploader}  
                                style={{
                                          display: "none"
                                        }}/>
                            <div className="imgdisplay" onClick={() => imageUploader.current.click()}>
                                <img ref={uploadedImage}/>
                            </div>
                                <div className="imgdesc">Upload a profile pic</div>
                        </div>
                        <div className="inputs">
                            
                            <div className="inputblock">
                                <div className="wrap-input100 ">
                                   <input
                                        className="input100"
                                        type="text"
                                        placeholder="  Name"
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
                                        placeholder="  Email"
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
                                    placeholder="  Phone no"
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
                                    placeholder="  College"
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
                               />
                               <span className="focus-input100"></span>
                               <span className="symbol-input100">
                                    <i class="fa fa-university" aria-hidden="true"></i>
                               </span>
                            </div> 
                            </div>
                        </div>
                        <div className="submitbtn">
                            <input type="submit"value=" Apply as a Mentor"/> 
                        </div>
                    </form>
                </MentorFormStyled>
            
        );
};