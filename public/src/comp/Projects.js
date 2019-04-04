import React, { Component } from "react";
import "../App.css";
import ProjectsData from "../ProjectsData.js";
import ProjectCard from "./ProjectCard";

class Projects extends Component {
  state = {};
  render() {
    return (
      <div className="App App-header">
        {/* <h1 className="display-1">Projects</h1> */}
        <h1 className="display-2" style={{ marginTop: "200px" }}>
          Projects
        </h1>
        <br />
        <div className="container row">
          {ProjectsData.map(proj => (
            <ProjectCard key={proj.link} proj={proj} />
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;
