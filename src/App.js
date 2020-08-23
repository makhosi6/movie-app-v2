import React, { Component, Fragment } from "react";
import "./App.css";
import Navi from "./comp/Navi";
import Hero from "./comp/Hero";
import Search from "./comp/Search";
import Body from "./comp/Body";
import Footer from "./comp/Footer";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navi />
        <Hero />
        <Search />
        <Body />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
