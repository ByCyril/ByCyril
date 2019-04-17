import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import MyNav from "./comp/MyNav";
import Home from "./comp/Home";
import Bio from "./comp/Bio";
import Connect from "./comp/Connect";
import Footer from "./comp/Footer";
import Projects from "./comp/Projects";
import Talk from "./comp/Talk";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fadeIn: true
    };
  }

  toggle = () => {
    this.setState({ fadeIn: !this.state.fadeIn });
  };

  render() {
    return (
      <div>
        <MyNav />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/bio" component={Bio} />
          <Route path="/projects" component={Projects} />
          <Route path="/talk" component={Talk} />
          <Route path="/connect" component={Connect} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
