import React, { Component } from "react";

import ExperienceCard from "./ExperienceCard";
import Experience from "../ExperienceData.js";

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

          <br />
          <div className="container">
            <p>
              I specialize in <code>iOS Engineering</code> with some experience
              in <code>Web</code> and <code>AI</code>.
            </p>
          </div>
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
              <ExperienceCard key={exp.company} exp={exp} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default About;
