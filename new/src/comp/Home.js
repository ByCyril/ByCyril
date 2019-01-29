import React, { Component } from "react";
import Card from "./Card";
import "./Main.css";
import "../App.css";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="App App-header">
          <h1 className="display-1">Cyril Garcia</h1>
          <p>
            Creator of{" "}
            <code>
              <a href="#">Memo</a>
            </code>
            ,{" "}
            <code>
              <a href="#">GeekWeather</a>
            </code>
            , and{" "}
            <code>
              <a href="#">FileStorks.com</a>
            </code>
          </p>
        </div>

        <div className="App App-header">
          <div className="container row">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
