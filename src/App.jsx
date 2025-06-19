import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import all your existing components
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Two from "./Two";
import PorscheCard from "./Cards";
import Cars from "./Cars";
import PorscheModal from "./PorscheModal";
import PorscheDataBlock from "./PorscheDataBlock";
import Footer from "./Footer";
import Number from "./Number";
import LocationMap from "./LocationMap"; // Import the new map component
import Email from "./Email";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Two />
              <PorscheCard />
              <Cars />
              <PorscheModal />
              <PorscheDataBlock />
              <Footer />
            </>
          }
        />
        <Route path="/number" element={<Number />} />
        <Route path="/location" element={<LocationMap />} />
        <Route path="/email" element={<Email />} />

        {/* New Route for the map */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
