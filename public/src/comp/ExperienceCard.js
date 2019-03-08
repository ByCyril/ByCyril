import React, { Component } from "react";

class ExperienceCard extends Component {
  state = {};
  render() {
    return (
      <div className="col-md-12">
        <div className="card text-center">
          <div className="card-header">{this.props.exp.company}</div>
          <div className="card-body">
            <h5 className="card-text">
              <code>{this.props.exp.title}</code>
            </h5>
            <p style={{ fontSize: "17px" }} className="card-title">
              {this.props.exp.description}
            </p>
          </div>

          <div className="card-footer text-muted" style={{ fontSize: "20px" }}>
            {this.props.exp.date}
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default ExperienceCard;
