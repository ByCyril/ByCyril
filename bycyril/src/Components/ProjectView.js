import React, { Component } from "react";
import Projects from "./Projects";

class ProjectView extends Component {
  state = {
    projects: [
      {
        id: 0,
        title: "Memo",
        description: "Take and organize notes like text messages.",
        technologies: "Swift, UIKit, Firebase",
        link:
          "https://itunes.apple.com/us/app/memo-a-better-notes-app/id1447065759?mt=8&fbclid=IwAR2ulbPB5ACmsAruwbUjt_yLph-yNQNCCcoTAAZjWa210meC-uzbqAnMY5E",
        img: "../img/memo.jpeg",
        releaseDate: "January 8, 2019"
      },
      {
        id: 1,
        title: "GeekWeather",
        description: "A simple weather app with a fresh design.",
        technologies: "Swift, UIKit, Firebase, Alamofire",
        link: "https://itunes.apple.com/us/app/geekweather/id1330278107?mt=8",
        img: "../img/geekweather.jpeg",
        releaseDate: "January 2, 2018"
      },
      {
        id: 2,
        title: "FileStorks.com",
        description: "An easier way to share files.",
        technologies: "Javascript, JQuery, Bootstrap, Firebase",
        link: "https://filestorks.com",
        img: "../img/filestorks.jpeg",
        releaseDate: "October 5, 2017"
      }
    ]
  };
  render() {
    return (
      <div>
        <h1>Projects</h1>
        <div>
          {this.state.projects.map(project => (
            <Projects key={project.id} project={project} />
          ))}
        </div>
      </div>
    );
  }
}

export default ProjectView;
