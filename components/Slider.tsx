import * as React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../src/styles.css";

// import required modules
import { Pagination } from "swiper";

export default function slide() {
  return (
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>  <img
            src={slide.url}
            style={{
              height: '30rem',
              objectFit: 'cover',
              objectPosition: 'top',
            }} />  </SwiperSlide>
        
      </Swiper>
  );
}
