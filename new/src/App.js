import React, { Component } from "react";
import { Route } from "react-router-dom";

import "./App.css";
import MyNav from "./comp/MyNav";
import Home from "./comp/Home";
import About from "./comp/About";
import Projects from "./comp/Projects";
import Blog from "./comp/Blog";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div>
        <MyNav />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/blog" component={Blog} />
      </div>
    );
  }
}

export default App;

{
  /* <NavLink exact to="/projects">
                  Projects
                </NavLink> */
}
