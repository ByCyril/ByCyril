import React, { Component } from "react";
import "./App.css";
import Navigation from "./Components/navigation";
import { Route } from "react-dom";
import About from "./Components/about";
import Projects from "./Components/projects";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <h1>Main page</h1>
      </div>
    );
  }
}

export default App;
