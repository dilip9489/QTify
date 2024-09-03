import React, { useState } from "react";
import Section from "../Section/Section";
import NewAlbums from "../NewAlbums/NewAlbums";
import styles from "../AlbumsContainer/AlbumsContainer.module.css";

const AlbumsContainer = () => {
  return (
    <div className={styles.container}>
      <Section />
      <NewAlbums />
    </div>
  );
};

export default AlbumsContainer;
