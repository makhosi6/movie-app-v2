import React, { Component } from "react";
import logo from "../img/horizontal-tablet.svg";
import PopupState, { bindToggle, bindPopper } from "material-ui-popup-state";
import LoginPopup from "./Login";

class Navi extends Component {
  state = {
    vsblty: "hidden",
    menu: "icon icon-menu",
  };
  toggle() {
    if (this.state.vsblty === "hidden") {
      this.setState({
        vsblty: "visible",
        menu: "icon icon-arrow-up",
      });
    } else if (this.state.vsblty === "visible") {
      this.setState({
        vsblty: "hidden",
        menu: "icon icon-menu",
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
        <PopupState variant="popper" popupId="demo-popup-popper">
          {(popupState) => (
            <div>
              <div className="login" {...bindToggle(popupState)}>
                <i className="icon-user icon-u"> </i>{" "}
              </div>{" "}
              <LoginPopup pps={popupState} />
              {/* <Popup/> */}
            </div>
          )}
        {/*   arrow: {
            enabled: true,
            element: arrowRef,
          },*/}
        </PopupState>
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
  backgroundColor: "#0f0f0f",
};
const listedMenu = {
  listStyle: "none",

  display: "flex",
  flexDiretion: "row",
  flexWrap: "wrap",
};
