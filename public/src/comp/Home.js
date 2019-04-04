import React, { Component } from "react";

import "./Main.css";
import "../App.css";
import Projects from "../ProjectsData.js";
import ProjectCard from "./ProjectCard";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="App App-header">
          <h1 className="display-1">Cyril Garcia</h1>
          <p>
            iOS Software Engineering Intern <code>@Pandora</code>
          </p>
          <p>
            Creator of{" "}
            <code>
              <a
                className="styles"
                href="https://itunes.apple.com/us/app/memo-a-better-notes-app/id1447065759?mt=8&fbclid=IwAR2ulbPB5ACmsAruwbUjt_yLph-yNQNCCcoTAAZjWa210meC-uzbqAnMY5E"
              >
                Memo
              </a>
            </code>
            ,{" "}
            <code>
              <a
                className="styles"
                href="https://itunes.apple.com/us/app/geekweather/id1330278107?mt=8"
              >
                GeekWeather
              </a>
            </code>
            , and{" "}
            <code>
              <a className="styles" href="https://filestorks.com/">
                FileStorks.com
              </a>
            </code>
          </p>

          <p>
            View my{" "}
            <code>
              <a className="styles" href="resume.pdf">
                resume
              </a>
            </code>{" "}
            and{" "}
            <code>
              <a className="styles" href="https://articlesbycyril.com">
                blog
              </a>
            </code>
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
