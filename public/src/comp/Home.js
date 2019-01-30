import React, { Component } from "react";
import Card from "./ExperienceCard";
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
                Resume
              </a>
            </code>
          </p>
        </div>

        <div
          className="App App-header"
          style={{
            width: "100%",
            backgroundColor: "white"
          }}
        >
          <h1 className="display-2">Projects</h1>
          <br />
          <div className="container row">
            {Projects.map(proj => (
              <ProjectCard key={proj.link} proj={proj} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
