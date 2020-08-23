import React, { Component } from "react";
import logo from "../img/horizontal-tablet.svg";

class Navi extends Component {
  state = {
    vsblty: "hidden",
    menu: "icon icon-menu"
  };
  toggle() {
    if (this.state.vsblty === "hidden") {
      this.setState({
        vsblty: "visible",
        menu: "icon icon-arrow-up"
      });
    } else if (this.state.vsblty === "visible") {
      this.setState({
        vsblty: "hidden",
        menu: "icon icon-menu"
      });
    }
  }

  render() {
    return (
      <nav className="navi" style={navi}>
        <div className="logo">
          {" "}
          <img src={logo} alt="logo" /> Movie App{" "}
        </div>{" "}
        <div className="listedMenu">
          <ul style={listedMenu}>
            <li> Popular </li> <li> Most Watched </li> <li> Latest </li>{" "}
          </ul>{" "}
        </div>{" "}
        <div onClick={() => this.toggle()} className="mobileMenu">
          <i className={this.state.menu}> </i>{" "}
        </div>{" "}
        <div className="login">
          <i className="icon-user icon-u"> </i>{" "}
        </div>{" "}
        <div style={{ visibility: this.state.vsblty }} className="popUp">
          <ul>
            <li>
              {" "}
              <a href="#popular"> Popular </a>{" "}
            </li>{" "}
            <li>
              {" "}
              <a href="#mostwatched"> Most Watched </a>{" "}
            </li>{" "}
            <li>
              {" "}
              <a href="#latest"> Latest </a>{" "}
            </li>{" "}
            <li>
              {" "}
              <i className="icon-user"> </i> Login{" "}
            </li>{" "}
          </ul>{" "}
        </div>{" "}
      </nav>
    );
  }
}

export default Navi;

const navi = {
  justifyContent: "spaceAround",
  display: "flex",
  flexDiretion: "row",
  flexWrap: "wrap",
  color: "white",
  backgroundColor: "#0f0f0f"
};
const listedMenu = {
  listStyle: "none",

  display: "flex",
  flexDiretion: "row",
  flexWrap: "wrap"
};
