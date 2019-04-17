import React, { Component } from "react";
import "../App.css";
import ProjectsData from "../ProjectsData.js";
import InfoCard from "./InfoCard.js";

class Projects extends Component {
  state = {};
  render() {
    return (
      <div className="App App-header">
        <h1 className="display-2" style={{ marginTop: "200px" }}>
          Projects
        </h1>
        <br />
        <div className="container row">
          {ProjectsData.map(proj => (
            <InfoCard key={proj.link} data={proj} />
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;
