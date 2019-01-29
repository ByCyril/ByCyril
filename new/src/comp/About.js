import React, { Component } from "react";

import Card from "./Card";

import "./Main.css";
import "../App.css";

class About extends Component {
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
          <h1 className="display-3">Experience</h1>
          <hr />
          <div className="container row">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
