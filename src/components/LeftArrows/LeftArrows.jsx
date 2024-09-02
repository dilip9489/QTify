import React from 'react';
import LeftArrow from '../../assets/LeftArrow/image.png';
import styles from '../Carousel/Carousel.module.css';

const LeftArrows = ({ className, onClick }) => (
   
    <button className={`${className} ${styles.customButton}`} onClick={onClick}>
       
      <img src='{LeftArrow}' alt="Left" />
    
    </button>
  );

export default LeftArrows;