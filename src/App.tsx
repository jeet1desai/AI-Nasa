import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import AsteroidInfo from "./pages/AstroidInfo";
import Home from "./pages/Home";

import './assets/css/style.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={AsteroidInfo} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
