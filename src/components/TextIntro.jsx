import React from "react";
import "./textintro.css";
import { gallery20 } from "../imports";

const TextIntro = () => {
  return (
    <div className="textintro-upper">
    <div className="textintro-maindiv">
      <div className="textintro-txt">
        <p>De Pathway360 Empowerment Initiative</p>
        Creating a world where empowerment, compassion, and sustainability
        thrive De Pathway360 Empowerment Initiative is dedicated to transforming
        lives and communities through a multifaceted approach. We collaborate
        with individuals and organizations to instill hope, foster positive
        attitudes, engage in charitable endeavors, and champion environmental
        stewardship. Join us in creating a world where hope thrives, social
        change prevails, and our environment flourishes.

        <div>
        <button className="btn-textintro">Donate</button>
        </div>

      </div>

      <div className="textintro-div">
        <img className="textintro-img" src={gallery20} alt="" />
      </div>
    </div>
    </div>
  );
};

export default TextIntro;
