import React from "react";
import "./contactus.css";
import { FaPhoneAlt } from "react-icons/fa"; 
import { IoIosMail } from "react-icons/io";

const Contactus = () => {
  return (
    <div>
      <div className="contactform-section">
        <h2 className="contactform-text">
          Input your request in the form below
        </h2>
        <form action="">
          <div className="contact-forminputs">
            <div className="contactform-name">
              <div className="contactform-namediv">
                <label className="required" htmlFor="">
                  First Name
                </label>
                <input placeholder="First name" type="text" required />
              </div>

              <div className="contactform-namediv">
                <label htmlFor="">Last Name</label>
                <input placeholder="Last name" type="text" />
              </div>
            </div>

            <label className="required" htmlFor="">
              Email
            </label>
            <input placeholder="Email-Address" type="text" required />

            <label className="required" htmlFor="">
              Subject
            </label>
            <textarea name="" id="" cols="30" rows="10" required></textarea>
          </div>

          <button className="contactform-submit">Submit Form</button>
        </form>
      </div>

      <div className="contact-txtbtm"> 
        <div className="contacttxt-innerdiv">
        <FaPhoneAlt color="#0E2279" size={35} />
          Give us a Call 0811 592 8769
        </div>

        <div className="contacttxt-innerdiv">
        <IoIosMail color="#0E2279" size={45} />
          Send us a message or Email us info@depathway360.com
        </div>
      </div>
    </div>
  );
};

export default Contactus;
