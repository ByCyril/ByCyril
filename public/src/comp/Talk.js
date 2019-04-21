import React, { Component } from "react";
import "../App.css";
import TalkData from "../TalkData.js";
import MidInfoCard from "./MidInfoCard";

class Talk extends Component {
  state = {};
  render() {
    return (
      <div className="App App-header">
        <h1 className="display-2" style={{ marginTop: "200px" }}>
          Talk
        </h1>
        <br />
        <div className="container row">
          {TalkData.map(data => (
            <MidInfoCard key={data.title} data={data} />
          ))}
        </div>
      </div>
    );
  }
}

export default Talk;
