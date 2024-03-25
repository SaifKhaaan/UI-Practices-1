import React from 'react';
import './carousel.css';
import Slider from "react-slick";

const Carousel = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='slider-container'>
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <Slider {...settings}>
        <div className='carousel'>
          <img src="Frame833.png" alt="" />
        </div>

        <div className='carousel'>
          <img src="Frame833.png" alt="" />
        </div>

        <div className='carousel'>
          <img src="Frame833.png" alt="" />
        </div>

        <div className='carousel'>
          <img src="Frame833.png" alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
