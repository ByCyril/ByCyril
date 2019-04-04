import React, { Component } from "react";

import "./Main.css";
import "../App.css";

class About extends Component {
  render() {
    return (
      <div>
        <div className="App App-header">
          <h1 className="display-1">About</h1>
          <p style={{ fontSize: "25px" }} className="container">
            An experienced <code>iOS Engineer</code> with some experience in{" "}
            <code>web development</code> and <code>AI</code>. Currently a{" "}
            <code>Statistics</code> major at{" "}
            <code>San Jose State University</code>; onto pursue a career in{" "}
            <code>Software Engineering</code> that specializes in{" "}
            <code>applied Artificial Intelligence</code> in{" "}
            <code>Mobile devices</code>.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
