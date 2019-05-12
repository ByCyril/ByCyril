import React, { Component } from "react";
import "../App.css";

class Connect extends Component {
  state = {};
  render() {
    return (
      <div className="App App-header">
        <h1 className="display-1">Connect</h1>
        <p>
          Connect with me on Twitter{" "}
          <code>
            <a className="styles" href="https://twitter.com/_bycyril">
              @_bycyril
            </a>
          </code>{" "}
          or{" "}
          <code>
            <a
              className="styles"
              href="https://www.linkedin.com/in/cyrilivargarcia/"
            >
              LinkedIn
            </a>
          </code>
        </p>
        <p>
          Email: <code>garciacy at bycyril dot com</code>
        </p>
      </div>
    );
  }
}

export default Connect;
