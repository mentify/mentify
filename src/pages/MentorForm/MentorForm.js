import React from "react";
import styled from "styled-components";
import { Footer } from "../../components/Footer/Footer";
import MentorApplyImg from "../../assets/MentorApply.svg";
import { Link } from "react-router-dom";
import '../../fonts/Abhaya_Libre/AbhayaLibre-Regular.ttf'; 
import Logo from "../../assets/Mentify-Logo.png";

const MentorFormStyled = styled.div`
    & {
        display: flex;
        flex-direction: column;
        height: fit-content;
        box-sizing: border-box;
        margin: 0;
        padding:0;
        justify-content:center;
    }  
    & .logo{
        padding-left: 3em;
        margin-top:1em;
    }
    & .imgupload{
        position:relative;
        top:-10em;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    & .imgdisplay{
        width:8em;
        height:8em;
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
        top:-8em;
        display:flex;
        flex-wrap:wrap;
        justify-content:center;
        margin-bottom:0;
    }
    & .input{
        width:40%;
        text-align:center;
        font-family: ABeeZee;
        padding:0;
        font-weight:800;
        font-size:1rem;
        height:4em;
        margin:2em;
        margin-bottom:1em;
        font-weight:bold;
        background-color:#F8F9FA;
        border: 0.1em solid black;
    }
    & .input1{
        width:40%;
        text-align:center;
        height:4em;
        font-weight:bold;
        background-color:#F8F9FA;
        border: 0.1em solid black;
    }
    & .submitbtn{
        text-align:center;
        position:relative;
        top:-6em;
    }

    & .submitbtn input{
        width:13em;
        height:4em;
        background-color:#FBD341;
        border:none;
        font-style: normal;
        font-weight: 800;
        font-size: 1.2rem;;
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
                    <form>
                        <div className="logo">
                                <img src={Logo} alt="app-logo" />  
                        </div>
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
                            <input type="text" placeholder="Name" className="input"/>
                            <input type="email" placeholder="Email"className="input"/>
                            <input type="tel" placeholder="Phone No"maxLength="10" className="input"/>
                            <input type="text" placeholder="College"className="input"/>
                            <input type="url" placeholder="LinkedIn Url"className="input"/>
                            <input type="text" placeholder="Branch"className="input"/>
                            <input type="text" placeholder="JEE Mains Percentile"className="input"/>
                            <input type="text" placeholder="Bitsat Score"className="input"/>
                            <input type="text" placeholder="JEE Advance Rank"className="input"/>
                            <input type="text" placeholder="College Admits"className="input"/>
                        </div>
                        <div className="submitbtn"><input type="submit"value=" Apply as a Mentor"/> </div>
                    </form>
                <Footer/>
                </MentorFormStyled>
            
        );
};