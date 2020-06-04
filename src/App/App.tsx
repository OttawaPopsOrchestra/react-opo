import React from "react";
import "./App.css";
import Navbar from "../components/Navbar/Navbar";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
// import { useTranslation } from "react-i18next";
import HomePage from "../pages/HomePage";
import Footer from "../components/Footer/Footer";
import {
  concerts18_19,
  concerts19_20,
} from "../components/Concerts/concertListInfo";
import ConcertList from "../components/Concerts/ConcertList";

function App() {
  // const { t } = useTranslation("Navbar");

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route exact={true} path="/about" component={AboutUs} />
          <Route exact={true} path="/2018-2019">
            <ConcertList concerts={concerts18_19} />
          </Route>
          <Route exact={true} path="/2019-2020">
            <ConcertList concerts={concerts19_20} />
          </Route>
          <Route exact={true} path="/orchestra" component={AboutUs} />
          <Route exact={true} path="/community" component={AboutUs} />
          <Route exact={true} path="/contact" component={AboutUs} />
          <Route exact={true} path="/covid" component={AboutUs} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
