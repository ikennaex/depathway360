import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa"; 
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

import "./footer.css";
import { pathway360logo } from "../imports";

const Footer = () => {
  const date = new Date().getFullYear();

  console.log(date);
  return (
    <div className="footer-main-main">

    <div className="footer-main">
      <div>

        <img className="footer-logo" src={pathway360logo} alt="logo" />
      <div className="logoandname">
        <p className="logo-txt">DePathway360 Empowerment Initiative</p>
        <p className="logo-para">Our passion lies in helping people grow, empowering lives, and commitment to environmental stewardship. At DePathway360, we are guided by a vision to inspire hope among the youth through various educational programmes. We believe in facilitating young individuals to reach their full potential, surmount obstacles, and achieve life-changing, society-enhancing goals.</p>

        {/* SOCIAL LINKS DIV  */}
        <div className="sociallinks-main">
        {/* <p className="social-txt">Connect with us</p> */}
        <div className="social-links">

          <a target="_blank" href="https://web.facebook.com/depathway360">
            <FaFacebook color="#0E2279" size={25} />
          </a>

          <a target="_blank" href="https://twitter.com/depathway360">
          <FaXTwitter  color="#0E2279" size={25} />
          </a>

          <a target="_blank" href="https://www.instagram.com/depathway360empowerment/"> 
          <FaInstagram color="#0E2279" size={25} />
          </a>

          <a target="_blank" href="https://www.linkedin.com/company/depathway360/">
          <FaLinkedin color="#0E2279" size={25}/>
          </a>
        </div>
        
      </div>
      </div>

      </div>

      
      <div className="contactmain-div"> 
      <p className="contactus-txt">Contact us</p>
        <div className="contactandicon">
        <FaPhoneAlt color="#0E2279" size={20} />
          Give us a Call +234 811 592 8769
        </div>

        <div className="contactandicon">
        <IoIosMail color="#0E2279" size={25} />
          Email us info@depathway360.org
        </div>
      </div>

    </div>
      <p className="copyright">@ {date} DePathway360. All Rights Reserved </p>

      </div>
  );
};

export default Footer;
