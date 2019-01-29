import React, { Component } from "react";
import { Container, Button } from "reactstrap";
import "./Main.css";
import "../App.css";
class About extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="App App-header">
          <h1 className="display-1">About</h1>
          <p style={{ fontSize: "25px" }} className="container">
            I am a Statistics Major at San Jose State University; onto pursue a
            career in Software Engineering that specializes in Artificial
            Intelligence and Machine Learning.
          </p>
        </div>
        <div className="App App-header">
          <h1 className="display-1">Experience</h1>
          <p style={{ fontSize: "25px" }} className="container">
            I am a Statistics Major at San Jose State University; onto pursue a
            career in Software Engineering that specializes in Artificial
            Intelligence and Machine Learning.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
