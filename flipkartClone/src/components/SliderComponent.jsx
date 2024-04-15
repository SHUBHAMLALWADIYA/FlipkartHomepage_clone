// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { IconButton, Box } from '@chakra-ui/react';
// import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

// const SliderComponent = () => {
//   const NextArrow = ({ className, onClick }) => {
//     return (
//       <Box className={className} onClick={onClick} position="absolute" right="0" top="50%" transform="translateY(-50%)">
//         <IconButton
//           aria-label="Next"
//           icon={<ChevronRightIcon />}
//           variant="ghost"
//           colorScheme="gray"
//           size="lg"
//           _hover={{ bg: "transparent" }}
//         />
//       </Box>
//     );
//   };

//   const PrevArrow = ({ className, onClick }) => {
//     return (
//       <Box className={className} onClick={onClick} position="absolute" left="0" top="50%" transform="translateY(-50%)">
//         <IconButton
//           aria-label="Previous"
//           icon={<ChevronLeftIcon />}
//           variant="ghost"
//           colorScheme="gray"
//           size="lg"
//           _hover={{ bg: "transparent" }}
//         />
//       </Box>
//     );
//   };

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//   };

//   return (
//     <div style={{ position: 'relative', textAlign: 'center', border: "1px solid black", padding: "20px 150px 20px 150px" }}>
//       <Slider {...settings}>
//         <div>
//           <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/9277c7d894d50bef.jpg?q=20" alt="Image 1" />
//         </div>
//         <div>
//           <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/5a51a6ffa84d75a7.png?q=20" alt="Image 2" />
//         </div>
//         <div>
//           <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/17999bace1b3f50c.jpg?q=20" alt="Image 3" />
//         </div>
//         <div>
//           <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/1716f18fdf7edbbb.png?q=20" alt="Image 4" />
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default SliderComponent;
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