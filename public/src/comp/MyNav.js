import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class MyNav extends Component {
  state = {};
  render() {
    return (
      <nav
        className="navbar navbar-dark fixed-top"
        style={{ backgroundColor: "#5D5D5D", fontSize: "20px" }}
      >
        <NavLink className="nav-link" style={{ color: "white" }} exact to="/">
          <b>By Cyril</b>
        </NavLink>

        <div className="expand navbar-expand">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/talk">
                Talk
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/bio">
                Bio
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" exact to="/projects">
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/connect">
                Connect
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default MyNav;
