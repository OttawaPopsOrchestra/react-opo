import React from "react";
import "./App.css";
import Navbar from "../components/Navbar/Navbar";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import AboutUs from "../components/AboutUs";
// import { useTranslation } from "react-i18next";
import HomePage from "../components/HomePage";

function App() {
  // const { t } = useTranslation("Navbar");

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Navbar} />
        </Switch>
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route exact={true} path="/about" component={AboutUs} />
          <Route exact={true} path="/orchestra" component={AboutUs} />
          <Route exact={true} path="/community" component={AboutUs} />
          <Route exact={true} path="/contact" component={AboutUs} />
          <Route exact={true} path="/covid" component={AboutUs} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
