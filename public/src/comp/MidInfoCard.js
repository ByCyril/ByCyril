import React, { Component } from "react";
import "../App.css";

class MidInfoCard extends Component {
  render() {
    const myImage = this.props.data.img;

    const image = require("../images/" + myImage);

    return (
      <center>
        <div className="col-md-4">
          <div className="card" style={{ borderRadius: "20px" }}>
            <img
              className="card-img-top"
              src={image}
              alt={myImage}
              style={{
                borderRadius: "20px",
                marginTop: "32px",
                width: "90%",
                height: "90%"
              }}
            />

            <div className="card-body">
              <h5 className="card-title text-center">
                {this.props.data.title}
              </h5>

              <ul
                className="list-group list-group-flush text-left"
                style={{ fontSize: "14px" }}
              >
                <li className="list-group-item">{this.props.data.d1}</li>
                <li className="list-group-item">{this.props.data.d2}</li>
                <li className="list-group-item">{this.props.data.d3}</li>{" "}
              </ul>
              <br />
              <a
                href={this.props.data.link}
                className="btn btn-primary btn-sm btn-block"
                style={{
                  backgroundColor: "#e83e8c",
                  borderColor: "#e83e8c",
                  borderRadius: "20px"
                }}
              >
                {this.props.data.buttonTitle}
              </a>
            </div>
          </div>
          <br />
        </div>
      </center>
    );
  }
}

export default MidInfoCard;
