import React from "react";
import "./homegallery.css"
import { gallerycollage } from "../imports";
import { Link } from "react-router-dom";

const HomeGallery = () => {
  return (
    <div className="homegallery-maindiv">
      <div className="textdesign-div">
        <div className="text-decor"></div>
        <p className="aboutus-text">Take a peek into our Gallery</p>
      </div>

      <div className="gallary-collage-div">
        <img className="photocollage-img" src= {gallerycollage} alt="gallery-collage" />
      </div>

      <div className="galleryviewmore-txtdiv">
      <Link className="galleryviewmore-txt" to = {"/gallery"}>
        <button>
        View more
        </button>
        </Link>
      </div>
      
    </div>
  );
};

export default HomeGallery;
