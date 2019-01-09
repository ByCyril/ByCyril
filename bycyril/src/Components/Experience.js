import React, { Component } from "react";

class Experience extends Component {
  state = {};
  render() {
    return (
      <div>
        <p>{this.props.exp.company}</p>
      </div>
    );
  }
}

export default Experience;
