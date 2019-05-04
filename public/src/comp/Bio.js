import React, { Component } from "react";

import "./Main.css";
import "../App.css";

class Bio extends Component {
  render() {
    return (
      <div>
        <div className="App App-header">
          <h1 className="display-1" style={{ paddingTop: "125px" }}>
            Bio
          </h1>
          <p
            style={{
              fontSize: "25px",
              backgroundColor: "white",
              borderRadius: "20px",
              paddingTop: "20px",
              paddingBottom: "20px",
              width: "70%"
            }}
            className="container"
          >
            An experienced <code>iOS Software Engineer</code> and a student at{" "}
            <code>San Jose State University</code> studying{" "}
            <code>Statistics</code>. I plan to take my degree to pursue a career
            in <code>Software Engineering</code> that specializes in{" "}
            <code>Artificial Intelligence</code> and{" "}
            <code>Machine Learning</code>.
          </p>
        </div>
      </div>
    );
  }
}

export default Bio;
