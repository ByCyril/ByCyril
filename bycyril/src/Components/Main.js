import React, { Component } from "react";
import "../styles/Main.css";
import ProjectView from "./ProjectView";
import AboutView from "./AboutView";
import HomeView from "./HomeView";
import { Route, NavLink, HashRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>By Cyril</h1>
          <ul className="header">
            <li>
              <NavLink to="/HomeView">Home</NavLink>
            </li>
            <li>
              <NavLink to="/AboutView">About</NavLink>
            </li>
            <li>
              <NavLink to="/ProjectsView">Projects</NavLink>
            </li>
          </ul>

          <div className="content">
            <Route path="/HomeView" component={HomeView} />
            <Route path="/AboutView" component={AboutView} />
            <Route path="/ProjectsView" component={ProjectView} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
