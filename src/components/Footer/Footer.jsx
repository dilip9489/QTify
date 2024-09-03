import React from "react";
import styles from "../Footer/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>
        <img
          src={require("../../assets/Hero Image/hero.png")}
          width={100}
          alt="headphones"
        />
      </div>
      <div className={styles.list}>
        <h2>Song Name</h2>
        <h3>Album Name</h3>
      </div>
    </div>
  );
};
export default Footer;
