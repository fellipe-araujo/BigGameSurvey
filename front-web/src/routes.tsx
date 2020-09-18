import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Records from "./pages/Records";
import Home from "./pages/Home";

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/records" component={Records} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
