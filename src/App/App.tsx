import React from "react";
import "./App.css";
import Navbar from "../components/TopBar/TopBar";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
// import { useTranslation } from "react-i18next";
import HomePage from "../pages/HomePage";
import Footer from "../components/Footer/Footer";
import Concerts18 from "../pages/ConcertListPages/Concerts18";
import Concerts19 from "../pages/ConcertListPages/Concerts19";
import ConcertSingle from "../components/Concerts/ConcertSingle";

function App() {
  // const { t } = useTranslation("Navbar");

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
          <Route exact={true} path="/community" component={AboutUs} />
          <Route exact={true} path="/contact" component={AboutUs} />
          <Route exact={true} path="/covid" component={AboutUs} />

          <Route
            exact={true}
            path="/2019-2020/videogamesymphony"
            component={ConcertSingle}
          />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
