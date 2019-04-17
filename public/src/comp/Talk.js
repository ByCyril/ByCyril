import React, { Component } from "react";
import "../App.css";
import TalkData from "../TalkData.js";
import InfoCard from "./InfoCard";

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
            <InfoCard key={data.title} data={data} />
          ))}
        </div>
      </div>
    );
  }
}

export default Talk;
