import React from "react";

import { Route, Switch } from "react-router-dom";

import Catalog from "../pages/Catalog";
import Home from "../pages/Home";
import Detail from "../pages/detail/Detail";

const Routes = () => {
  return (
    <Switch>
      <Route path="/:category/search/:keyword" component={Catalog} />
      <Route path="/:category/:id" component={Detail} />
      <Route path="/:category-:type" component={Catalog} />
      <Route path="/:category" component={Catalog} />
      <Route path="/" exact component={Home} />
    </Switch>
  );
};

export default Routes;
