import React from "react";
import { IconButton } from "@mui/material";
import { ReactComponent as RightArrowIcon } from "../../assets/RightArrow/rightarrow.svg";
import styles from "../Carousel/Carousel.module.css";

const RightNavButton = ({ onClick }) => {
  return (
    <IconButton
      onClick={onClick}
      className={styles.navButton}
      sx={{
        position: "absolute",
        right: "10px",
        top: "50%",
        zIndex: 1,
        color: "white",
        transform: "translateY(-50%)",
      }}
    >
      <RightArrowIcon />
    </IconButton>
  );
};

export default RightNavButton;
