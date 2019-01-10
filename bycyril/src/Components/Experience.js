import React, { Component } from "react";

class Experience extends Component {
  state = {};
  render() {
    return (
      <div class="card" style={{ width: "18rem" }}>
        <div class="card-body">
          <h5 class="card-title">{this.props.exp.company}</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            {this.props.exp.location}
          </h6>
          <p class="card-text">{this.props.exp.position}</p>
          <p class="card-text">{this.props.exp.years}</p>
        </div>
      </div>
    );
  }
}

export default Experience;
