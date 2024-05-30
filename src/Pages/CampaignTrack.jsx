import React from "react";
import "./campaigntrack.css"

const data = [
  {
    id: 1,
    aid: "5+",
    impacted: "100+",
    volunteers: "10+",
  },
];

const campaignTrack = () => {
  return (
    <div className="campaign-maindiv">
      <div className="campaign-orange">
        <p className="campaign-numbers">{data[0].aid}</p>
        Aid Campaigns
      </div>
      <div className="campaign-yellow">
        <p className="campaign-numbers">{data[0].impacted}</p>
        Lives Impacted 
      </div>
      <div className="campaign-orange">
        <p className="campaign-numbers">{data[0].volunteers}</p>
        Volunteers 
      </div>
    </div>
  );
};

export default campaignTrack;
