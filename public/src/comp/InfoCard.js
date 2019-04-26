import React, { Component } from "react";
import "../App.css";

class InfoCard extends Component {
  render() {
    const myImage = this.props.data.img;

    const image = require("../images/" + myImage);

    return (
      <div className="col-sm-4">
        <div className="card" style={{ borderRadius: "20px" }}>
          <center>
            <img
              className="card-img-top"
              style={{
                borderRadius: "20px",
                marginTop: "15px",
                width: "90%",
                height: "90%"
              }}
              src={image}
              alt={myImage}
            />
          </center>

          <div className="card-body">
            <h5 className="card-title text-center">{this.props.data.title}</h5>

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
    );
  }
}

export default InfoCard;
