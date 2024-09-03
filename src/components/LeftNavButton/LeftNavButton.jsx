import React from "react";
import { IconButton } from "@mui/material";
import { ReactComponent as LeftArrowIcon } from "../../assets/LeftArrow/leftarrow.svg";
import styles from "../Carousel/Carousel.module.css";

const LeftNavButton = ({ onClick }) => {
  return (
    <IconButton
      onClick={onClick}
      className={styles.navButton}
      sx={{
        position: "absolute",
        left: "-20px",
        top: "50%",
        zIndex: 1,
        color: "white",
        transform: "translateY(-50%)",
      }}
    >
      <LeftArrowIcon />
    </IconButton>
  );
};
export default LeftNavButton;
