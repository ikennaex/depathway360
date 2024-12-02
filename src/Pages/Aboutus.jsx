import React from "react";
import "./aboutus.css";
import { Link } from "react-router-dom";
import { gallery21 } from "../imports";

const Aboutus = () => {
  return (
    <div className="aboutus-maindiv">
      <div className="textdesign-div">
        <div className="text-decor"></div>
        <p className="aboutus-text">About Us</p>
      </div>

      <div className="aboutinner-flex">
        <p className="aboutus-p">
          Welcome to De Pathway360 Empowerment Initiative We are De Pathway360
          Empowerment Initiative, a non-profit, non-political, and
          non-governmental organization dedicated to fostering growth and
          positive change. Our passion lies in helping people grow, empowering
          lives, and commitment to environmental stewardship. At De Pathway360,
          we are guided by a vision to inspire hope among the youth through
          various educational programmes. We believe in facilitating young
          individuals to reach their full potential, surmount obstacles, and
          achieve life-changing, society-enhancing goals. Through our charitable
          initiatives, we uplift both men and women, striving to lift them out
          of poverty and into a brighter future.
        </p>

        <div>
          <img className="about-sideimg" src={gallery21} alt="" />
        </div>
      </div>

      <Link to="/aboutus">
        <button>Read More</button>
      </Link>
    </div>
  );
};

export default Aboutus;
