import React, {Component}from 'react';

class Loader extends Component {
    render() {
      return (
        <div className="gif" style={st}>
          {" "}
          <h1 style={{maxWidth:"100px", margin: "auto", paddingTop:"60px",fontSize:"18px"}}>Loading...</h1>
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