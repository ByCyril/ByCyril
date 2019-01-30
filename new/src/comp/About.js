import React, { Component } from "react";

import Card from "./Card";
import Experience from "../Data.js";

import "./Main.css";
import "../App.css";

class About extends Component {
  render() {
    return (
      <div>
        <div className="App App-header">
          <h1 className="display-1">About</h1>
          <p style={{ fontSize: "25px" }} className="container">
            I am a <code>Statistics Major</code> at{" "}
            <code>San Jose State University</code>; onto pursue a career in{" "}
            <code>Software Engineering</code> that specializes in{" "}
            <code>AI and Machine Learning</code>.
          </p>
        </div>
        <div
          className="App App-header"
          style={{
            width: "100%",
            backgroundColor: "white"
          }}
        >
          <h1 className="display-2">Experience</h1>
          <br />
          <div className="container row">
            {Experience.map(exp => (
              <Card key={exp.company} exp={exp} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default About;
