import React, { Component } from "react";
import "../styles/Main.css";
import Projects from "./Projects";
import About from "./About";
import Home from "./Home";
import Blog from "./Blog";
import { Route, HashRouter, Link } from "react-router-dom";

import { Nav, NavItem, NavLink } from "reactstrap";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 className="display-4">
            By Cyril
            <span className="lead" style={{ marginLeft: "20px" }}>
              Creator of Memo
            </span>
          </h1>
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
