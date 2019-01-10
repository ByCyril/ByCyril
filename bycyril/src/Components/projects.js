import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src="./img/memo.jpeg" />
        <div className="card-body">
          <h5 className="card-title">{this.props.project.title}</h5>
          <p className="card-text">{this.props.project.description}</p>
          <a href={this.props.project.link} className="btn btn-primary">
            Download
          </a>
        </div>
      </div>
    );
  }
}

export default Projects;
