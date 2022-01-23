import React from "react";
import "./App.css";
import Navbar from "../components/TopBar/TopBar";
import { Route, Routes } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import HomePage from "../pages/HomePage";
import Footer from "../components/Footer/Footer";
import Concerts18 from "../pages/ConcertListPages/Concerts18";
import Concerts19 from "../pages/ConcertListPages/Concerts19";
import VGS from "../pages/ConcertSinglePages/Concerts19/VGS";
import Broadway from "../pages/ConcertSinglePages/Concerts19/Broadway";
import HMW from "../pages/ConcertSinglePages/Concerts19/HMW";
import Contact from "../pages/Contact";
import Stories from "../pages/Stories/Stories";
import Story1 from "../pages/Stories/Story1";
import TwinFlames from "../pages/Stories/TwinFlames";
import Raywat from "../pages/Stories/Raywat";
import JeffLeiper from "../pages/Stories/JeffLeiper";
import Covid from "../pages/Covid";
import BedfordTrio from "../pages/Stories/BedfordTrio";
import Auditions from "../pages/Orchestra/Auditions";
import { ThemeManager } from "../ThemeManager";

function App() {
  return (
    <ThemeManager>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        {/* concerts */}
        <Route path="/2018-2019" element={<Concerts18 />} />
        <Route path="/2019-2020" element={<Concerts19 />} />
        <Route path="/2019-2020/videogamesymphony" element={<VGS />} />
        <Route path="/2019-2020/videogamesymphony" element={<VGS />} />
        <Route path="/2019-2020/popsonbroadway" element={<Broadway />} />
        <Route path="/2019-2020/hmw" element={<HMW />} />
        {/* orchestra */}
        <Route path="/auditions" element={<Auditions />} />
        {/* stories */}
        <Route path="/stories" element={<Stories />} />
        <Route path="/stories/story1" element={<Story1 />} />
        <Route path="/stories/twinflames" element={<TwinFlames />} />
        <Route path="/stories/raywatdeonandan" element={<Raywat />} />
        <Route path="/stories/jeffleiper" element={<JeffLeiper />} />
        <Route path="/stories/bedfordtrio" element={<BedfordTrio />} />
        {/* other */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/covid" element={<Covid />} />
      </Routes>
      <Footer />
    </ThemeManager>
  );
}

export default App;
