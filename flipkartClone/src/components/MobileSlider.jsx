// MobileSlider.jsx

import React, { useState } from 'react';
import './mobileSlider.css';
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"
import img5 from "../assets/img5.png"
import img6 from "../assets/img6.png"
import img7 from "../assets/img7.png"
import img8 from "../assets/img8.png"

const MobileSlider = () => {
  const imageUrls = [
    img1, img2, img3, img4, img5, img6, img7, img8
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === imageUrls.length - 6 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? imageUrls.length - 6 : prevIndex - 1));
  };

  return (
    <>
    <p className='best'>Best Smart Phones</p>
    <div id='phoneslider'>
<div>
    
</div>
    <div className="slider-container">
      <div className="slider" style={{ transform: `translateX(-${currentIndex * (100 / 6)}%)` }}>
        
        <br />
        {imageUrls.map((imageUrl, index) => (
          <div key={index} className="slide">
            <img src={imageUrl} alt={`Slide ${index + 1}`} className="image" />
            <h2>9999</h2>
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="prev-button">{'<'}</button>
      <button onClick={nextSlide} className="next-button">{'>'}</button>
    </div>
    <div className='plane'>
        <img src="https://rukminim1.flixcart.com/fk-p-flap/530/810/image/fc822dc700322fcd.jpg?q=20" alt="" />
    </div>
    </div>
    </>
  );
};

export default MobileSlider;

