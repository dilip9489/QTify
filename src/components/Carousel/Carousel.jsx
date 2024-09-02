// Carousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import SwiperCore, { Navigation } from 'swiper';
import LeftArrows from '../LeftArrows/LeftArrows';
import RightArrows from '../RightArrows/RightArrows';

SwiperCore.use([Navigation]);

const Carousel = ({ items, renderItem }) => {
  return (
    <div className="carousel-container">
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            {renderItem(item)}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="swiper-button-prev">
        <LeftArrows />
      </div>
      <div className="swiper-button-next">
        <RightArrows />
      </div>
    </div>
  );
};

export default Carousel;
