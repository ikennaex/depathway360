import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import "./footer.css";
import { pathway360logo } from "../imports";

const Footer = () => {
  const date = new Date().getFullYear();

  console.log(date);
  return (
    <div className="footer-main">
      <div className="logoandname">
        <img className="footer-logo" src={pathway360logo} alt="logo" />
        <p className="logo-txt">DePathway360 Empowerment Initiative</p>
      </div>

      <div className="sociallinks-main">
        <p className="social-txt">Connect with us</p>
        <div className="social-links">

          <a target="_blank" href="https://web.facebook.com/depathway360">
            <FaFacebook color="#0E2279" size={25} />
          </a>

          <FaTwitter color="#0E2279" size={25} />

          <a target="_blank" href="https://www.instagram.com/depathway360empowerment/">
          <FaInstagram color="#0E2279" size={25} />
          </a>
        </div>
        
      </div>

      <p className="copyright">Copyright DePathway360 @ {date}</p>
    </div>
  );
};

export default Footer;
