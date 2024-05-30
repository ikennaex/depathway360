import React from "react";
import "./intro.css";
import { introimg } from "../imports";
import {Link} from "react-router-dom"
import Carousel from "../components/Carousel";
import CampaignTrack from "./CampaignTrack";
import TextIntro from "../components/TextIntro";

const Intro = () => {
  return (
    <>
    <div className="intro-top-div">
    <div className="intro-maindiv">

      <Carousel />
      <div className="intro-textdiv">
      <h1 className="welcome-txt">Empowering through education and growth, building brighter futures for communities.</h1>
      <p className="welcomeetxt-subtext">
      At DePathway360, we are guided by a vision to inspire hope among the youth through various educational programmes. Our passion lies in helping people grow, empowering lives, and commitment to environmental stewardship.
      </p>
      </div>
    </div>

    <CampaignTrack />
    </div>
    <TextIntro />
    </>
  );
};

export default Intro;
