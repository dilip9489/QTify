import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { BrowserRouter as Router } from "react-router-dom";
// import Section from "./components/Section/Section";
import AlbumsContainer from "./components/AlbumsContainer/AlbumsContainer";
// import NewAlbums from "./components/NewAlbums/NewAlbums";

import SongsSection from "./components/SongsSection/SongsSection";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";

function App() {
  const searchData = [];
  return (
    // <div className="App">

    // </div>
    <Router>
      <Navbar searchData={searchData} />
      <Hero />
      <AlbumsContainer />

      <SongsSection />
      <FAQ />
      <Footer />
    </Router>
  );
}

export default App;
