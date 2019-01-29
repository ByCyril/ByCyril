import React, { Component } from "react";
import "../Main.css";
import Projects from "./Projects";
import About from "./About";
import Home from "./Home";
import Blog from "./Blog";
import { Route, NavLink } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="display-4">By Cyril</h1>
        {/* <h6>Creator of Memo, GeekWeather, and FileStorks.com</h6> */}
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="collapse navbar-collapse container" id="navbarNav">
            <ul className="navbar-nav container">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/projects">
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/blog">
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        {/* <div className="content"> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/Blog" component={Blog} />
        {/* </div> */}
      </div>
    );
  }
}

{
  /* <NavLink to="/HomeView">Home</NavLink> */
}

export default Main;
