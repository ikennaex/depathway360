import React from "react";
import "./intro.css";
import { introimg } from "../imports";
import {Link} from "react-router-dom"

const Intro = () => {
  return (
    <div className="intro-maindiv">
      <div className="intro-imgdiv">
        <img className="intro-img" src={introimg} alt="" />
      </div>

      <div className="intro-textdiv">
      <h1 className="welcome-txt">Welcome to DePathway360 Official Website</h1>
      {/* <p className="welcomeetxt-subtext">
        Your kindness can make a lasting impact and change lives.
      </p>

      <Link to = '/donate'>
      <button>Donate now</button>
      </Link> */}

      </div>
    </div>
  );
};

export default Intro;
