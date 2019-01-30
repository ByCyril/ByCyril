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
              <a href="https://itunes.apple.com/us/app/memo-a-better-notes-app/id1447065759?mt=8&fbclid=IwAR2ulbPB5ACmsAruwbUjt_yLph-yNQNCCcoTAAZjWa210meC-uzbqAnMY5E">
                Memo
              </a>
            </code>
            ,{" "}
            <code>
              <a href="https://itunes.apple.com/us/app/geekweather/id1330278107?mt=8">
                GeekWeather
              </a>
            </code>
            , and{" "}
            <code>
              <a href="https://filestorks.com/">FileStorks.com</a>
            </code>
          </p>

          <p>
            View my{" "}
            <code>
              <a href="resume.pdf">Resume</a>
            </code>
          </p>
        </div>

        <div className="App App-header">
          <div className="container row" />
        </div>
      </div>
    );
  }
}

export default Home;
