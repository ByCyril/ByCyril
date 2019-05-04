import React, { Component } from "react";
import { Route } from "react-router-dom";

import "./App.css";
import MyNav from "./comp/MyNav";
import Home from "./comp/Home";
import Bio from "./comp/Bio";
import Connect from "./comp/Connect";
import Footer from "./comp/Footer";
import Projects from "./comp/Projects";
import Talk from "./comp/Talk";

class App extends Component {
  render() {
    return (
      <div>
        <MyNav />

        <Route exact path="/" component={Home} />
        <Route path="/bio" component={Bio} />
        <Route path="/projects" component={Projects} />
        <Route path="/talk" component={Talk} />
        <Route path="/connect" component={Connect} />

        <Footer />
      </div>
    );
  }
}

export default App;
