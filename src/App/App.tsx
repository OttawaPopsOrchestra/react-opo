import React from "react";
import "./App.css";
import Navbar from "../components/TopBar/TopBar";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import HomePage from "../pages/HomePage";
import Footer from "../components/Footer/Footer";
import Concerts18 from "../pages/ConcertListPages/Concerts18";
import Concerts19 from "../pages/ConcertListPages/Concerts19";
import VGS from "../pages/ConcertSinglePages/Concerts19/VGS";
import Broadway from "../pages/ConcertSinglePages/Concerts19/Broadway";
import HMW from "../pages/ConcertSinglePages/Concerts19/HMW";
import Contact from "../pages/Contact";
import Stories from "../pages/Stories";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route exact={true} path="/about" component={AboutUs} />
          <Route exact={true} path="/2018-2019" component={Concerts18} />
          <Route exact={true} path="/2019-2020" component={Concerts19} />
          <Route exact={true} path="/orchestra" component={AboutUs} />
          <Route exact={true} path="/stories" component={Stories} />
          <Route exact={true} path="/contact" component={Contact} />
          <Route exact={true} path="/covid" component={AboutUs} />
          {/* 2019 - 2020 concert pages */}
          <Route
            exact={true}
            path="/2019-2020/videogamesymphony"
            component={VGS}
          />
          <Route
            exact={true}
            path="/2019-2020/videogamesymphony"
            component={VGS}
          />
          <Route
            exact={true}
            path="/2019-2020/popsonbroadway"
            component={Broadway}
          />
          <Route exact={true} path="/2019-2020/hmw" component={HMW} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
