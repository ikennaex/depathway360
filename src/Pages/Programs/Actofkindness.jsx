import React from "react";
import "./programdetails.css";
import { actofkindness } from "../../imports";

const data = [
  {
    img: actofkindness,
    title: "Act of Kindness Projects",
    body: "",
  },
];

const Actofkindness = () => {
  return (
    <div className="programdetails-div">
      {data.map((data) => {
        return (
          <div className="flexprogramdiv">
            <p className="depathway-programstxt">
              De pathway360 Empowerment Initiative Programs
            </p>

            <div className="programdetailsinner-div">
              <p className="programdetails-title">{data.title}</p>

              <div className="programdetails-imgdiv">
                <img className="program-details-img" src={data.img} alt="" />
              </div>
              <p className="programdetails-subtext">
                In line with the De Pathway360 Empowerment Initiative’s
                objectives of instilling hope and empowering lives, the <strong>Acts of
                Kindness Projects</strong> were launched. The project encapsulates
                elements of our strategic pillars, objectives, and core values,
                and it is aimed at targeting the vulnerable, the less
                privileged, and the downtrodden in society. <br /> <br />
                Our <strong>Acts of Kindness Projects</strong> support Orphanage Homes, Correctional Centers, Old
                Peoples Homes, and the less privileged with foodstuffs such as
                rice, beans, beverages, noodles, seasonings, toiletries,
                disinfectants, detergent, and soaps, clothing, shoes, toys,
                rechargeable lamps, pampers, toothbrushes, and more. We also
                support the less privileged with entrepreneurship training,
                equipment, and startup capital. <br /> <br />
                We need your help and support to continue this important work. Your material and financial
                contributions will be used transparently in line with our core
                values to ensure maximum benefits. <br /> <br />
                Our <strong>Acts of Kindness Projects</strong> run every month. But we have chosen the 19th of August every
                year in line with the UN World Humanitarian Day to intensive
                supports and care for the downtrodden, vulnerable, marginalized,
                and less privileged ones in our communities. Join us in turning
                compassion into action. <br /> <br /> 
                
                <a href="https://paystack.com/pay/j7euo0rbi6">
                <button>Donate Today</button>
                </a>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Actofkindness;
