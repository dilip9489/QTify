import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AlbumCard from '../AlbumCard/AlbumCard';
import styles from '../Section/Section.module.css';

 
const Section = () => {
  const [albums, setAlbums] = useState([]);
  const [collapsed, setCollapsed] = useState(false);

  // Fetch top albums using Axios
  useEffect(() => {
    const fetchTopAlbums = async () => {
      try {
        const response = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
         
        setAlbums(response.data);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };
    fetchTopAlbums();
  }, []);

  // Toggle Collapse button
  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={styles.sectionContainer}>
      {/* Top Albums Title and Collapse Button */}
      <div className={styles.sectionHeader}>
        <h2>Top Albums</h2>
        <button className={styles.collapseButton} onClick={handleCollapse}>
          {collapsed ? 'Expand' : 'Collapse'}
        </button>
      </div>

      {/* Albums Grid (conditionally render if not collapsed) */}
      {!collapsed && (
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
