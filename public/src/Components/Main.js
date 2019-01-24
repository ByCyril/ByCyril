import React, { Component } from "react";
import "../Main.css";
import Projects from "./Projects";
import About from "./About";
import Home from "./Home";
import Blog from "./Blog";
import { Route, HashRouter, Link, Redirect } from "react-router-dom";

import { Nav, NavItem, NavLink } from "reactstrap";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 className="display-4">By Cyril</h1>
          <h6>Creator of Memo, GeekWeather, and FileStorks.com</h6>
          <div>
            <Nav tabs>
              <NavItem>
                <NavLink style={{ color: "black" }} tag={Link} to="/Home">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{ color: "black" }} tag={Link} to="/About">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{ color: "black" }} tag={Link} to="/Projects">
                  Projects
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{ color: "black" }} tag={Link} to="/Blog">
                  Blog
                </NavLink>
              </NavItem>
            </Nav>
          </div>
          <Redirect from="/" to="Home" />
          <div className="content">
            <Route path="/Home" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Projects" component={Projects} />
            <Route path="/Blog" component={Blog} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

{
  /* <NavLink to="/HomeView">Home</NavLink> */
}

export default Main;
