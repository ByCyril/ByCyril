import React, { Component } from "react";
import Proj from "./Proj";
import { Jumbotron, Container, Row } from "reactstrap";

class Projects extends Component {
  state = {
    projects: [
      {
        id: 0,
        title: "Memo",
        description: "Take and organize notes like text messages.",
        technologies: "Swift, UIKit, Firebase",
        link:
          "https://itunes.apple.com/us/app/memo-a-better-notes-app/id1447065759?mt=8&fbclid=IwAR2ulbPB5ACmsAruwbUjt_yLph-yNQNCCcoTAAZjWa210meC-uzbqAnMY5E",
        img: "memo.jpeg",
        releaseDate: "January 8, 2019"
      },
      {
        id: 1,
        title: "GeekWeather",
        description:
          "An aesthetically pleasing user interface of a weather app.",
        technologies: "Swift, UIKit, Firebase, Alamofire",
        link: "https://itunes.apple.com/us/app/geekweather/id1330278107?mt=8",
        img: "geekweather.jpeg",
        releaseDate: "January 2, 2018"
      },
      {
        id: 2,
        title: "FileStorks.com",
        description: "A quick and easy way to share any files of any size.",
        technologies: "Javascript, JQuery, Bootstrap, Firebase",
        link: "https://filestorks.com",
        img: "filestorks.jpeg",
        releaseDate: "October 5, 2017"
      }
    ]
  };
  render() {
    return (
      <div>
        {/* <Jumbotron> */}
        <Container>
          <h1 className="display-3">Projects</h1>

          <Row>
            {this.state.projects.map(project => (
              <Proj key={project.id} project={project} />
            ))}
          </Row>
          {/* <hr className="my-2" /> */}
        </Container>
        {/* </Jumbotron> */}
      </div>
    );
  }
}

export default Projects;
