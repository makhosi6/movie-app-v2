import React, { Component } from "react";

class Loader extends Component {
  constructor(props) {
    super(props)
  
  }
  
  state = {
   
  }
  render() {
    setTimeout(() => {
      this.setState({
        status: this.props.status,
      });
    }, 4000);
    console.log(this.state.status);
    return (
      <div className="gif" style={st}>
        {" "}
        <h1
          style={{
            maxWidth: "100px",
            margin: "auto",
            paddingTop: "60px",
            fontSize: "18px",
          }}
        >
          {this.state.status}...
          {/* {this.state.status === "offline" ? "No Internet" : "Loading..."} */}
        </h1>
      </div>
    );
  }
}

const st = {
  backgroundColor: "black",
  minWidth: "90vw",
  margin: "auto",
  paddingTop: "30px",
  paddingBottom: "5px",
};

export default Loader;
