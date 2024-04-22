import React from "react";
import "./donate.css"
import { pathway360logo } from "../imports";

const Donate = () => {
  return (
    <div>
      <div className="donation-div">
        <p className="donationintro-txt">
          For the facilitation of streamlined contribution processing, we kindly
          request that all charitable donations be directed towards the
          designated bank account of DePathway360. This will ensure efficient
          handling and allocation of funds towards our philanthropic endeavors.
          Your cooperation in this matter is greatly appreciated and
          instrumental in furthering our mission.
        </p>

        <div className="donationsacct-maindiv">

        <div>
            <img className="donation-logo" src={pathway360logo} alt="" />
            <p className="depathwaydonation-txt">De Pathway360 Empowerment Initiative Donations Account</p>
        </div>

        <div className="donationacct-div">
        <p className="donation-acct">1220137169</p>
        <p className="zenith-txt">Zenith Bank Plc</p>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Donate;
