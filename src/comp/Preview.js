import React, { Component } from "react";
import Pass from "./Pass";

class Preview extends Component {
  constructor(props) {
    super(props);
    this.myInput = React.createRef();
    this.myInputt = React.createRef();
  }
  state = {
    hid: "",
    value: 0,
    vsblty: "hidden",
    left: 0,
    stop: 0,
  };

  slide() {
    let one =
      window.innerWidth > this.myInputt.current.getBoundingClientRect().left;
    
    this.setState({
      stop: 0,
      hid: one ? "hidden" : "visible",
      left: this.myInput.current.offsetLeft,
      value: one ? this.state.value + 0 : this.state.value + 100,
      vsblty: "visible",
    });
  }
  refresh() {
    this.setState({
      hid: "visible",
      value: 0,
    });
    setTimeout(() => {
      this.setState({
        vsblty: "hidden",
      });
    }, 500);
  }

  componentDidMount() {
    this.setState({
      stop: window.innerWidth,
    });
  }

  render() {
    let truthy = this.props.info == "";
    let catchError =
      truthy === true ? <Loader /> : <Pass info={this.props.info} />;
    let element =
      truthy === true ? null : (
        <span
          onClick={() => this.slide()}
          style={{ visibility: this.state.hid }}
          className="arrow"
        >
          <i className="icon-arrow-right"> </i>{" "}
        </span>
      );

    return (
      <div
        style={{
          paddingBottom: "30px",
        }}
      >
        {" "}
        {element}{" "}
        <span
          onClick={() => this.refresh()}
          style={{
            visibility: this.state.vsblty,
          }}
          className="refresh"
        >
          <i className="icon-arrow-left"> </i>{" "}
        </span>{" "}
        {""}{" "}
        <div className="title">
          <h1
            style={{
              color: "white",
              paddingLeft: "10px",
            }}
          >
            {" "}
            {this.props.cat}{" "}
          </h1>
          {""}
        </div>{" "}
        <div
          style={{
            right: this.state.value + "px",
          }}
          className="preview"
          ref={this.myInput}
        >
          {" "}
          {catchError}
          <div className="stopper" ref={this.myInputt}>
            {" "}
          </div>
        
          {""}{" "}
        </div>{" "}
      </div>
    );
  }
}
class Loader extends Component {
  render() {
    return (
      <div className="gif" style={st}>
      </div>
    );
  }
}

const st = {
  backgroundColor: "black",
  minWidth: "90vw",
  padding: "30px",
  margin: "auto",
  paddingBottom: "30px",
};

export default Preview;
