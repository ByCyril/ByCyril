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
        <p
          style={{
            fontSize: "25px",
            backgroundColor: "white",
            borderRadius: "20px",
            paddingTop: "20px",
            paddingBottom: "20px",
            width: "85%"
          }}
          className="container"
        >
          I like <code>talking</code> about anything related to{" "}
          <code>iOS or Machine Learning</code> at <code>tech conferences</code>.
          If you are organizing a tech conference and are{" "}
          <code>looking for speakers</code>, please feel free to reachout!
        </p>

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
