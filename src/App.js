import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { BrowserRouter as Router } from "react-router-dom";
import Section from "./components/Section/Section";
import NewAlbums from "./components/NewAlbums/NewAlbums";

function App() {
  const searchData = [];
  return (
    // <div className="App">

    // </div>
    <Router>
      <Navbar searchData={searchData} />
      <Hero />
      <Section />
      <NewAlbums />
    </Router>
  );
}

export default App;
