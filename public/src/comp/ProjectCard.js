import React, { Component } from "react";
import "../App.css";

class ProjectCard extends Component {
  render() {
    const myImage = this.props.proj.img;

    const image = require("../images/" + myImage);

    return (
      <div className="col-sm-4">
        <div className="card">
          <img className="card-img-top" src={image} alt={myImage} />

          <div className="card-body">
            <h5 className="card-title text-center">{this.props.proj.title}</h5>

            <ul
              className="list-group list-group-flush text-left"
              style={{ fontSize: "14px" }}
            >
              <li className="list-group-item">{this.props.proj.description}</li>
              <li className="list-group-item">
                Released on: {this.props.proj.releaseDate}
              </li>
              <li className="list-group-item">
                Technologies: {this.props.proj.technologies}
              </li>{" "}
            </ul>
            <br />
            <a
              href={this.props.proj.link}
              className="btn btn-primary btn-sm btn-block"
              style={{ backgroundColor: "#e83e8c", borderColor: "#e83e8c" }}
            >
              View
            </a>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default ProjectCard;
