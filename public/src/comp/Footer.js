import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer
        className="page-footer font-small"
        style={{ backgroundColor: "#5D5D5D" }}
      >
        <div
          className="footer-copyright text-center py-3"
          style={{ color: "white" }}
        >
          Developed in <code>ReactJS</code>
        </div>
      </footer>
    );
  }
}

export default Footer;
