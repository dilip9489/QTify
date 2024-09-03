import React, { useState } from "react";
import Section from "../Section/Section";
import NewAlbums from "../NewAlbums/NewAlbums";
import styles from "../Section/Section.module.css"; // Make sure to create and adjust CSS as needed

const AlbumsContainer = () => {
  const [showAll, setShowAll] = useState(false);

  // Toggle the Show All functionality
  const handleToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <div className={styles.container}>
      {/* Show All Button */}
      <div className={styles.sectionHeader}>
        <h2>New Albums</h2>
        <button className={styles.collapseButton} onClick={handleToggle}>
          {showAll ? "Collapse" : "Show All"}
        </button>
      </div>

      {/* Render Sections Based on State */}
      {showAll ? (
        <>
          <Section />
          <NewAlbums />
        </>
      ) : (
        <>
          {/* <NewAlbums /> */}
          {/* Optionally include NewAlbums or not based on the requirement */}
        </>
      )}
    </div>
  );
};

export default AlbumsContainer;
