import React from 'react';
import "./carousel.css"

const slides = [
  {
    id: 4,
    imgSrc: "https://images.pexels.com/photos/13988500/pexels-photo-13988500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Slide 5"
  },
  {
    id: 3,
    imgSrc: "https://images.pexels.com/photos/9628111/pexels-photo-9628111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Slide 4"
  },
  {
    id: 2,
    imgSrc: "https://images.pexels.com/photos/8948347/pexels-photo-8948347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Slide 2"
  },
  {
    id: 1,
    imgSrc: "https://images.pexels.com/photos/8948348/pexels-photo-8948348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Slide 1"
  }
];

const Carousel = () => {
  return (
    <div>

      <div className="carousel">
        {slides.map((slide) => (
          <React.Fragment key={slide.id}>
            <input type="checkbox" className="faux-ui-facia" />
            <div className="slide" slide={slide.id}>
              <img className='carousel-img' src={slide.imgSrc} alt={slide.alt} />
            </div>
          </React.Fragment>
        ))}
        <div className="counter" count={slides.length}> / {slides.length}</div>
      </div>
    </div>
  );
};

export default Carousel;