// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import AlbumCard from '../AlbumCard/AlbumCard';
// import styles from '../Section/Section.module.css';
// import Carousel from '../Carousel/Carousel';

import React, { useState, useEffect } from "react";
import axios from "axios";
import AlbumCard from "../AlbumCard/AlbumCard";
import Carousel from "../Carousel/Carousel";
import { Tabs, Tab, TabsList, Box } from "@mui/material";
// import styles from '../Section/Section.module.css';
import styles from "../SongsSection/SongsSection.module.css";

const SongsSection = () => {
  const [albums, setAlbums] = useState([]);
  const [genres, setGenres] = useState([]); // State for genres
  const [selectedGenre, setSelectedGenre] = useState("All");

  // Fetch genres data
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get(
          "https://qtify-backend-labs.crio.do/genres"
        );
        console.log(response.data);
        setGenres([{ key: "all", label: "All" }, ...response.data.data]); // Add fetched genres
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };
    fetchGenres();
  }, []);

  // Fetch songs data
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get(
          "https://qtify-backend-labs.crio.do/songs"
        );
        setAlbums(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };
    fetchSongs();
  }, []);

  // Handle genre selection
  const handleGenreChange = (event, newGenre) => {
    setSelectedGenre(newGenre);
  };

  // Filter albums by selected genre
  const filteredAlbums =
    selectedGenre === "All"
      ? albums
      : albums.filter((album) =>
          album.genre && typeof album.genre.key === "string"
            ? album.genre.key.toLowerCase() === selectedGenre.toLowerCase()
            : false
        );

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionHeader}>
        <h2>Songs</h2>
      </div>

      {/* Tabs for genre selection */}
      {/* <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: '20px' }}> */}
      <Tabs
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "28px",
          marginBottom: "20px",
          overflowX: "auto",
          width: "460px",
          height: "34px",
          // backgroundColor: "#f0f0f0", // Temporarily add this for visibility
          // border: "1px solid blue",

          // Temporarily add this for visibility
        }}
        value={selectedGenre}
        onChange={handleGenreChange}
        // aria-label="genre tabs"
        // variant="scrollable"
        // scrollButtons="auto"
        // textColor="primary"
        // indicatorColor="primary"
        TabIndicatorProps={{
          style: {
            backgroundColor: "#00e676",
          },
        }}
      >
        {genres.map((genre, index) => {
          //console.log(genre.key); // Correctly log the genre key here
          return (
            <Tab
              sx={{
                width: "auto",
                height: "24px",
                font: "Poppins",
                fontWeight: 400,
                fontSize: "16px",
                color: "rgba(255, 255, 255, 1)",
                "&.Mui-selected": {
                  color: "rgba(255, 255, 255, 1)", // Color when the tab is selected
                },
              }}
              key={genre.key}
              label={genre.label}
              value={genre.label}
            />
          );
        })}
      </Tabs>
      {/* </Box> */}

      {/* Carousel for filtered albums */}
      <Carousel
        items={filteredAlbums}
        renderItem={(album) => (
          <AlbumCard
            key={album.id}
            albumImage={album.image}
            albumName={album.title}
            follows={album.likes} // Display likes instead of follows
            labelType="likes"
          />
        )}
      />
    </div>
  );
};
export default SongsSection;
