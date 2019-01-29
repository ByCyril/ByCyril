import React, { Component } from "react";

class Card extends Component {
  state = {};
  render() {
    return (
      <div className="col-sm-6">
        <div className="card text-center">
          <div className="card-header">Digital Media Academy</div>
          <div className="card-body">
            <h5 className="card-text">
              <code>Instructor</code>
            </h5>
            <p style={{ fontSize: "17px" }} className="card-title">
              Taught Computer Science, iOS Development, and AI and Machine
              Learning.
            </p>
          </div>

          <div className="card-footer text-muted">June 2018 - August 2018</div>
        </div>
        <br />
      </div>
    );
  }
}

export default Card;
