// Carousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
// import 'swiper/swiper.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import SwiperCore from 'swiper';
import LeftArrows from '../LeftArrows/LeftArrows';
import RightArrows from '../RightArrows/RightArrows';
// import  { useEffect,useRef } from 'react';
import styles from '../Carousel/Carousel.module.css';



// SwiperCore.use([Navigation]);

 

const Carousel = ({ items, renderItem }) => {
  return (
    <div className={styles.carouselContainer}>
      <Swiper
        modules={[Navigation]}
        // spaceBetween={30}
        slidesPerView={1}
        navigation 
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 6,
            spaceBetween: 8,
          },
        }}
        // loop={true}
      >
        {items.map(item => (
          <SwiperSlide key={item.id}>{renderItem(item)}</SwiperSlide>
        ))}
         
      </Swiper>
    </div>
  );
};
export default Carousel;