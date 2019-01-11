import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Col
} from "reactstrap";

class Proj extends Component {
  render() {
    const myImage = this.props.project.img;

    const image = require("../img/" + myImage);

    return (
      <Col>
        <Card>
          <CardImg top src={image} alt="Card image cap" />
          <CardBody>
            <CardTitle>
              <b>{this.props.project.title}</b>
            </CardTitle>
            <CardText>{this.props.project.description}</CardText>
            <Button href={this.props.project.link} target="blank">
              View
            </Button>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default Proj;
