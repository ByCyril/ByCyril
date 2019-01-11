import React, { Component } from "react";
import { Jumbotron, Button, Container } from "reactstrap";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Jumbotron>
          <Container>
            <h1 className="display-3">Home</h1>
            <p className="lead">
              I am currently a Statistics Major at San Jose State University;
              pursuing a career in Software Engineering that specializes in
              Artificial Intelligence and Machine Learning.
            </p>
            <hr className="my-2" />
            <p className="lead">
              My journey as a Software Engineer is comprised with personal
              projects in iOS and Web, teaching Computer Science, and exploring
              the area of AI and Machine Learning.
            </p>

            <p className="lead">
              <Button
                style={{ marginRight: "10px" }}
                target="blank"
                className="fa fa-linkedin-square"
                href="https://www.linkedin.com/in/cyrilivargarcia/"
              />
              <Button
                style={{ marginRight: "10px" }}
                target="blank"
                className="fa fa-github-square"
                href="https://github.com/cyrilivargarcia"
              />
              <Button
                style={{ marginRight: "10px" }}
                target="blank"
                className="fa fa-twitter-square"
                href="https://twitter.com/cyrilivargarcia"
              />
            </p>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;
