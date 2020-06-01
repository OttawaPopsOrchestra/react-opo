import React from "react";
import "./App.css";
import Navbar from "../components/Navbar/Navbar";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import AboutUs from "../components/AboutUs";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation("Navbar");

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Navbar} />
        </Switch>
        <Switch>
          <Route exact={true} path={t("about")} component={AboutUs} />
          <Route exact={true} path={t("orchestra")} component={AboutUs} />
          <Route exact={true} path={t("community")} component={AboutUs} />
          <Route exact={true} path={t("contact")} component={AboutUs} />
          <Route exact={true} path={t("covid")} component={AboutUs} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
