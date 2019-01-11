import React, { Component } from "react";
import { Card, Col, CardImg } from "reactstrap";

class Education extends Component {
  state = {};
  render() {
    const myImage = this.props.ed.img;

    const image = require("../img/" + myImage);

    return (
      <Col>
        <Card>
          <CardImg top src={image} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{this.props.ed.school}</h5>
            <p className="card-text">{this.props.ed.major}</p>
            <p className="card-text">{this.props.ed.years}</p>
          </div>
        </Card>
      </Col>
    );
  }
}

export default Education;
