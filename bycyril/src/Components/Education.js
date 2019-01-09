import React, { Component } from "react";

class Education extends Component {
  state = {};
  render() {
    return (
      <div>
        <p>{this.props.ed.school}</p>
        <p>{this.props.ed.years}</p>
      </div>
    );
  }
}

export default Education;
