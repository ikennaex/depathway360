import React from "react";
import "./programdetails.css";
import { sendachild } from "../../imports";
import { Link } from "react-router-dom";
import { pathway360logo } from "../../imports";


const data = [
  {
    img: sendachild,
    title: "Send A Child to School Project",
    body: "",
  },
];

const ProgramDetails = () => {
  return (
    <div className="programdetails-div">
      {data.map((data) => {
        return (
          <div className="flexprogramdiv">
            <p className="depathway-programstxt">De pathway360 Empowerment Initiative Programs</p>
            <p className="programdetails-title">{data.title}</p>

            <div className="programdetailsinner-div">
              <img className="program-details-img" src={data.img} alt="" />
              <p className="programdetails-subtext">
                Join the impactful mission of De Pathway360 Empowerment
                Initiative as we drive change through our scholarship project,
                Send A Child to School. This initiative is a lifeline for
                vulnerable, less privileged, downtrodden, and hopeless children
                in Nigeria who are denied the basic right to education. The
                urgency of our cause is underscored by shocking statistics from
                UNICEF, revealing that a staggering 10.5 million Nigerian
                children are out of school. This dire situation compels us to
                act swiftly and decisively. Our goal is clear: to contribute in
                reducing this number by providing essential support to these
                deserving children. Our project is about enrolling children in
                school and nurturing their dreams and empowering their futures.
                We are committed to sending 1000 deserving children to school
                within three years and supporting them through their educational
                journey to college. <br /> <br />
                <strong>
                  <Link className="donatelink" to="/donate">
                    DONATE
                  </Link>{" "}
                </strong>
                <br /> <br />
                To ensure our impact is targeted and effective, we've conducted
                rigorous assessments, visiting schools across communities,
                suburbs, and villages, and consulting with local residents to
                identify those most in need. The project is already in motion,
                but the demand for support far exceeds our current resources.{" "}
                <br /> <br />
                <strong>What the Project Cover:</strong> <br />
                The Send A Child to School Project is comprehensive, covering:
                <ul>
                  <li>Tuition fees</li>
                  <li>
                    School essentials like uniforms, shoes/sandals, textbooks,
                    and more
                  </li>
                  <li>Daily lunch packs</li>
                </ul>
                How Can You Be Part of This Project? Your donation, no matter
                how small, can significantly impact these children's lives. By
                tapping the link{" "}
                <Link className="donatelink" to="/donate">
                  DONATE
                </Link>{" "}
                and contributing to this noble course, you'll be directly
                putting smiles on their faces and easing the burden on their
                families as they embark on their educational journey. Every
                contribution count, and together, we can pave the way for a
                brighter future for these children. Tap the link{" "}
                <Link className="donatelink" to="/donate">
                  DONATE
                </Link>{" "}
                link to make your contribution. God bless you!
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProgramDetails;
