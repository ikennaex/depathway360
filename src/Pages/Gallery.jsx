import React from "react";
import "./gallery.css";
import {
  gallery1,
  gallery10,
  gallery11,
  gallery12,
  gallery13,
  gallery14,
  gallery15,
  gallery16,
  gallery17,
  gallery18,
  gallery19,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
} from "../imports";

const schoolVisitPictures = [
  {
    img: gallery1,
  },

  {
    img: gallery2,
  },

  {
    img: gallery3,
  },

  {
    img: gallery4,
  },

  {
    img: gallery5,
  },

  {
    img: gallery6,
  },
];

const orphanageVisitPictures = [
  {
    img: gallery7,
  },

  {
    img: gallery8,
  },
  {
    img: gallery9,
  },

  
  {
    img: gallery11,
  }
];

const communityServicePictures = [
  {
    img: gallery10,
  },

  {
    img: gallery12,
  },

  {
    img: gallery13,
  },

  {
    img: gallery14,
  },

  {
    img: gallery15,
  },

  {
    img: gallery17,
  },

]

const Gallery = () => {
  return (
    <div className="gallery-maindiv">

      <div className="textdesign-div">
      <div className="text-decor"></div>
      <p className="gallery-txt">Gallery</p>
      </div>

      <div className="galleryimg-div">

          <p className="picturengo-txt">School Visit</p>
        <div className="schoolvisit-div picturesngo">
        {schoolVisitPictures.map((data) => (
          <img className="gallery-img" src={data.img} alt="" />
        ))}
        </div>

          <p className="picturengo-txt">Orphanage Visit</p>
        <div className="orphanageVisitdiv picturesngo">
          {orphanageVisitPictures.map((data) => (
          <img className="gallery-img orphanage-img" src={data.img} alt="" />
        ))}
        </div>

          <p className="picturengo-txt">Community Service</p>
        <div className="communityservicediv picturesngo">
          {communityServicePictures.map((data) => (
          <img className="gallery-img community-img" src={data.img} alt="" />
        ))}

        </div>

      </div>
    </div>
  );
};

export default Gallery;
