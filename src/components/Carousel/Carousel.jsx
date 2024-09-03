// Carousel.jsx
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/swiper-bundle.min.css';
// import 'swiper/swiper.min.css';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import LeftNavButton from "../LeftNavButton/LeftNavButton"; // Adjust the path if needed
import RightNavButton from "../RightNavButton/RightNavButton";
// import  { useEffect,useRef } from 'react';
import styles from "../Carousel/Carousel.module.css";

// SwiperCore.use([Navigation]);

const Carousel = ({ items, renderItem }) => {
  const swiperRef = useRef(null);
  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };
  return (
    <div className={styles.carouselContainer}>
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        // spaceBetween={30}
        slidesPerView={3}
        navigation={false}
        breakpoints={{
          640: {
            slidesPerView: 3.5,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4.5,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 6.5,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 6.5,
            spaceBetween: 25,
          },
        }}
        loop={false}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>{renderItem(item)}</SwiperSlide>
        ))}
      </Swiper>
      <LeftNavButton onClick={handlePrev} />
      <RightNavButton onClick={handleNext} />
    </div>
  );
};
export default Carousel;
