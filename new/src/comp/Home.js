import React, { Component } from "react";
import "./Main.css";
import { Container, Badge } from "reactstrap";

class Home extends Component {
  state = {};
  render() {
    return (
      <Container className="main">
        <h1>Home</h1>
        <h6>
          Creator of <Badge color="secondary">Memo</Badge>,{" "}
          <Badge color="secondary">GeekWeather</Badge>, and{" "}
          <Badge color="secondary">FileStorks.com</Badge>
        </h6>
      </Container>
    );
  }
}

export default Home;
