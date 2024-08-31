import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const searchData = [];
  return (
    // <div className="App">

    // </div>
    <Router>
      <Navbar searchData={searchData} />
      <Hero />
    </Router>
  );
}

export default App;
