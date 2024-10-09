import { Route, Router } from "@solidjs/router";
import type { Component } from "solid-js";

import Browse from "../bundles/Browse";
import Detail from "../bundles/Detail";
import Home from "../bundles/Home";
import Login from "../bundles/Login";
import Navbar from "../components/Navbar";
import NotFound from "../components/placeholder/NotFound";

const App: Component = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Route path="/product/" component={Browse} />
        <Route path="/" component={Home} />
        <Route path="*" component={NotFound} />
        <Route path="/product/i/:id/" component={Detail} />
        <Route path="/auth/login" component={Login} />
      </Router>
    </>
  );
};

export default App;
