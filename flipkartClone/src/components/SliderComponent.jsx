
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './swiper.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function SliderComponent() {
  return (
    <>
    <div id="sliderback">

    
    <div id='swiperDiv'>
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"

      >
        <SwiperSlide><img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/9277c7d894d50bef.jpg?q=20" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/5a51a6ffa84d75a7.png?q=20" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/17999bace1b3f50c.jpg?q=20" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/1716f18fdf7edbbb.png?q=20" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/9acf393d8283e657.jpg?q=20" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/1716f18fdf7edbbb.png?q=20" alt="" /></SwiperSlide>
        
      </Swiper>
    </div>
    </div>
    </>
  );
}