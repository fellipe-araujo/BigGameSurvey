import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Records from "./pages/Records";
import Home from "./pages/Home";
import Charts from "./pages/Charts";

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/records" component={Records} />
      <Route path="/charts" component={Charts} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
