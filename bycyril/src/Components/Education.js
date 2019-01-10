import React, { Component } from "react";

class Education extends Component {
  state = {};
  render() {
    return (
      <div class="card" style={{ width: "18rem" }}>
        <div class="card-body">
          <h5 class="card-title">{this.props.ed.school}</h5>
          <p class="card-text">{this.props.ed.major}</p>
          <p class="card-text">{this.props.ed.years}</p>
        </div>
      </div>
    );
  }
}

export default Education;
