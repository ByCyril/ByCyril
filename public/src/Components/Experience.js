import React, { Component } from "react";
import { CardImg, Card, Col } from "reactstrap";

class Experience extends Component {
  state = {};
  render() {
    const myImage = this.props.exp.img;

    const image = require("../img/" + myImage);

    return (
      <Col>
        <Card>
          <CardImg top src={image} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{this.props.exp.company}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {this.props.exp.location}
            </h6>
            <p className="card-text">{this.props.exp.position}</p>
            <p className="card-text">{this.props.exp.years}</p>
          </div>
        </Card>
      </Col>
    );
  }
}

export default Experience;
