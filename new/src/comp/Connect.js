import React, { Component } from "react";
import "../App.css";

class Connect extends Component {
  state = {};
  render() {
    return (
      <div className="App App-header">
        <h1 className="display-1">Connect</h1>
        <p>
          Connect with me on{" "}
          <code>
            <a href="#">LinkedIn</a>
          </code>
          ,{" "}
          <code>
            <a href="#">Twitter</a>
          </code>
          , or{" "}
          <code>
            <a href="#">GitHub</a>
          </code>
        </p>
      </div>
    );
  }
}

export default Connect;
