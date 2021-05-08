import React, { Component } from "react";
import Loader from './Loader'
import Pass from "./Pass";

class Preview extends Component {
  constructor(props) {
    super(props);
    this.myInput = React.createRef();
    this.myInputt = React.createRef();
    this.more = this.more.bind(this);
  }
  state = {
    hid: "",
    value: 0,
    vsblty: "hidden",
    left: 0,
    stop: 0,
  };
   
 async more(p) {
   console.log(p);
    if (this.state.hid === "hidden") {
      // console.log("its hidden now, so we can fetch more");
      await this.props.more(p);
    }
  }
  slide() {
    let one =
      window.innerWidth - 20 >
      this.myInputt.current.getBoundingClientRect().left;
    let p = 2;
    if (one) {
      // console.clear();
      // console.log(p);
      this.more(p).then(()=>{
        p++
        // console.log('done fetching more, the page is ', p);
      });
    }
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
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidMount() {
    this.setState({
      stop: window.innerWidth,
    });
  }


  render() {
    setInterval(async () => {
     
      if(this.state.status !== this.props.status){

        this.setState({
          status: this.props.status
        });
      }
           
    }, 3000);

    let truthy = this.props.info == "";
    let catchError = truthy === true ? <Loader status={this.state.status} /> : <Pass info={this.props.info} />;
    let element = truthy === true ? null : (
        <span
          onClick={() => this.slide()}
          style={{ visibility: this.state.hidd }}
          className="arrow"
        >
          <i className="icon-arrow-right"> </i>{" "}
        </span>
      );
    if (this.state.hasError) {
      return (
        <div style={{ maxWidth: "300px", margin: "auto" }}>
          <h1>Something went wrong. </h1>
          <p>Error: {this.state.hasError}</p>
        </div>
      );
    }
    return (
      <section > 
            
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
          <div className="stopper" ref={this.myInputt}></div>
        </div>{" "}
      </section>
    );
  }
}

export default Preview;
