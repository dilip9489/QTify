import React from 'react';
import RightArrow from '../../assets/RightArrow/image.png'
import styles from '../Carousel/Carousel.module.css';

const RightArrows = ({ className, onClick }) => (
  
    <button className={`${className} ${styles.customButton}`} onClick={onClick}>
       
      <img src='{RightArrow}' alt="Right" />
    
    </button>
  );

export default RightArrows;