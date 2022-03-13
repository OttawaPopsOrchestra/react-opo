import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/TopBar/TopBar";
import AboutUs from "../pages/AboutUs";
import Concerts18 from "../pages/ConcertListPages/Concerts18";
import Concerts22 from "../pages/ConcertListPages/Concerts22";
import Broadway from "../pages/ConcertSinglePages/Concerts19/Broadway";
import VGS from "../pages/ConcertSinglePages/Concerts19/VGS";
import Contact from "../pages/Contact";
import Covid from "../pages/Covid";
import Donate from "../pages/GetInvolved/Donate";
import SupportUs from "../pages/GetInvolved/SupportUs";
import HomePage from "../pages/HomePage";
import Auditions from "../pages/Orchestra/Auditions";
import Conductors from "../pages/Orchestra/Conductors";
import BedfordTrio from "../pages/Stories/BedfordTrio";
import JeffLeiper from "../pages/Stories/JeffLeiper";
import Raywat from "../pages/Stories/Raywat";
import Stories from "../pages/Stories/Stories";
import Story1 from "../pages/Stories/Story1";
import TwinFlames from "../pages/Stories/TwinFlames";
import { ThemeManager } from "../ThemeManager";
import "./App.css";

function App() {
  return (
    <ThemeManager>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        {/* concerts */}
        {/* ARCHIVED */}
        <Route path="/2018-2019" element={<Concerts18 />} />
        {/* Current */}
        <Route path="/programming" element={<Concerts22 />} />
        <Route path="/programming/videogamesymphony" element={<VGS />} />
        <Route path="/programming/popsonbroadway" element={<Broadway />} />
        {/* orchestra */}
        <Route path="/auditions" element={<Auditions />} />
        <Route path="/conductors" element={<Conductors />} />
        {/* community */}
        {/* community - stories */}
        <Route path="/stories" element={<Stories />} />
        <Route path="/stories/story1" element={<Story1 />} />
        <Route path="/stories/twinflames" element={<TwinFlames />} />
        <Route path="/stories/raywatdeonandan" element={<Raywat />} />
        <Route path="/stories/jeffleiper" element={<JeffLeiper />} />
        <Route path="/stories/bedfordtrio" element={<BedfordTrio />} />
        {/* get involved */}
        <Route path="/donate" element={<Donate />} />
        <Route path="/support-us" element={<SupportUs />} />
        {/* <Route path="/join-our-board" element={<JoinOurBoard />} /> */}

        {/* other */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/covid" element={<Covid />} />
      </Routes>
      <Footer />
    </ThemeManager>
  );
}

export default App;
