import React, { Component } from "react";
import "./App.css";
import ProjectView from "./Components/ProjectView";
import AboutView from "./Components/AboutView";
import HomeView from "./Components/HomeView";
import { Route, NavLink, HashRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>By Cyril</h1>
          <ul className="header">
            <li>
              <NavLink to="/Components/HomeView">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Components/AboutView">About</NavLink>
            </li>
            <li>
              <NavLink to="/Components/ProjectsView">Projects</NavLink>
            </li>
          </ul>

          <div className="content">
            <Route path="/Components/HomeView" component={HomeView} />
            <Route path="/Components/AboutView" component={AboutView} />
            <Route path="/Components/ProjectsView" component={ProjectView} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
