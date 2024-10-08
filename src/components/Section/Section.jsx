import React, { useState, useEffect } from "react";
import axios from "axios";
import AlbumCard from "../AlbumCard/AlbumCard";
import styles from "../Section/Section.module.css";
import Carousel from "../Carousel/Carousel";

const Section = () => {
  const [albums, setAlbums] = useState([]);
  const [collapsed, setCollapsed] = useState(true);

  // Fetch top albums using Axios
  useEffect(() => {
    const fetchTopAlbums = async () => {
      try {
        const response = await axios.get(
          "https://qtify-backend-labs.crio.do/albums/top"
        );
        setAlbums(response.data);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };
    fetchTopAlbums();
  }, []);

  // Toggle Collapse button
  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div sx={{ padding: "20px" }}>
      {/* Top Albums Title and Collapse Button */}
      <div className={styles.sectionHeader}>
        <h2>Top Albums</h2>
        <button className={styles.collapseButton} onClick={handleCollapse}>
          {collapsed ? "Show All" : "Collapse"}
        </button>
      </div>

      {/* Conditionally Render Carousel or Grid */}
      {collapsed ? (
        <Carousel
          items={albums}
          renderItem={(album) => (
            <AlbumCard
              key={album.id}
              albumImage={album.image}
              albumName={album.title}
              follows={album.follows}
            />
          )}
        />
      ) : (
        <div className={styles.albumsGrid}>
          {albums.map((album) => (
            <AlbumCard
              key={album.id}
              albumImage={album.image}
              albumName={album.title}
              follows={album.follows}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Section;
