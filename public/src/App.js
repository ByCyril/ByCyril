import React, { Component } from "react";
import { Route } from "react-router-dom";

import "./App.css";
import MyNav from "./comp/MyNav";
import Home from "./comp/Home";
import About from "./comp/About";
import Connect from "./comp/Connect";
import Footer from "./comp/Footer";

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
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/connect" component={Connect} />
        <Footer />
      </div>
    );
  }
}

export default App;
