import React from "react";
import { useEffect } from 'react';
import "./gallery.css";
import {
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
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
  gallery22,
  gallery23,
  gallery24,
  gallery25,
  gallery26,
  gallery27,
  gallery28,
  gallery29,
  gallery30,
  gallery31,
  gallery32,
  gallery33,
  gallery34,
  gallery35,
  gallery36,
  gallery38,
  gallery40,
  gallery41,
  gallery42,
  gallery43,
  gallery44,
  gallery45,
  gallery46,
  gallery47,
} from "../imports";

const gallery = [
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
    img: gallery5,
  },
  {
    img: gallery6,
  },
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
    img: gallery10,
  },
  {
    img: gallery11,
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
    img: gallery16,
  },
  {
    img: gallery17,
  },
  {
    img: gallery18,
  },
  {
    img: gallery19,
  },
  {
    img: gallery22,
  },
  {
    img: gallery23,
  },
  {
    img: gallery24,
  },
  {
    img: gallery25,
  },
  {
    img: gallery26,
  },
  {
    img: gallery27,
  },
  {
    img: gallery28,
  },
  {
    img: gallery29,
  },
  {
    img: gallery30,
  },
  {
    img: gallery31,
  },
  {
    img: gallery32,
  },
  {
    img: gallery33,
  },
  {
    img: gallery34,
  },
  {
    img: gallery35,
  },
  {
    img: gallery36,
  },
  {
    img: gallery38,
  },
  {
    img: gallery40,
  },
  {
    img: gallery41,
  },
  {
    img: gallery42,
  },
  {
    img: gallery43,
  },
  {
    img: gallery44,
  },
  {
    img: gallery45,
  },
  {
    img: gallery46,
  },
  {
    img: gallery47,
  },

];



const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="gallery-maindiv">

      <div className="textdesign-div">
      <div className="text-decor"></div>
      <p className="gallery-txt">Gallery</p>
      </div>

      <div >
        <div className="galleryimg-div">
          {gallery.slice().reverse().map((gallery,index) => {
            return (
            
            <div className = "" key = {index}>
            <img className="gallerypage-img" src= {gallery.img} alt="" />
            </div>

            )
          }
          )}
        </div>

      </div>

      

    </div>
  );
};

export default Gallery;
