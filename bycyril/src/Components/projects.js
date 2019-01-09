import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <div>
        <p>{this.props.project.title}</p>
      </div>
    );
  }
}

export default Projects;
