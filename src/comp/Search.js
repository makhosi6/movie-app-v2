import React, { Component } from "react";
import Pass from "./Pass";

class Search extends Component {
  constructor(props) {
    super(props);
    this.myInput = React.createRef();
    this.myInputt = React.createRef();
    this.ifChange = this.ifChange.bind(this);
  }
  state = {
    queryvalue: "",

    query: {
      title: "Search results",
      results: []
    }
  };

  async ifChange() {
    let m = `https:api.themoviedb.org/3/search/movie?api_key=ab9c9c39ef6dbe62904e9ed46a9e6b8b&language=en-US&query=${this.state.queryvalue}&page=1`;

    const res = await fetch(m);
    const dt = await res.json();

    this.setState({
      query: Object.assign({}, this.state.query, {
        results: this.state.query.results.concat(dt.results)

      })
    });
  }
  search() {
    if (document.querySelector(".input").value === "") {
      document.querySelector(".input").placeholder = "Please fill in!!!";
    } else {
      this.setState({
        queryvalue: document.querySelector(".input").value
      });
      setTimeout(() => {
        if (document.querySelector(".input").value !== "") {
          document.querySelector(".input").value = "";
        }
      }, 1000);
    }
  }

  render() {
    let element =
      this.state.query.results === "" || this.state.queryvalue === "" ? null : (
        <Results
        more={this.ifChange}
          value={this.state.queryvalue}
          len={this.state.query.results.length || 0}
          title={this.state.query.title}
          info={this.state.query.results}
        />
      );

    return (
      <div>
        <div key={this.state.queryvalue + "86"} className="search">
          <form
            onClick={e => {
              e.preventDefault();
            }}
          >
            <button style={{ backgroundColor: "#0f0f0f" }} type="submit">
              <i
                onClick={() => {
                  this.search();

                  setTimeout(() => {
                    this.ifChange();
                  }, 1000);
                }}
                style={{ color: "white", margin: " 0 30px" }}
                className="icon-magnifier"
              ></i>{" "}
            </button>{" "}
            <input
              onKeyDown={e => {
                if (
                  e.which === 13 &&
                  document.querySelector(".input").value !== ""
                ) {
                  setTimeout(() => {
                    this.ifChange();
                  }, 1000);

                  this.setState({
                    queryvalue: document.querySelector(".input").value || 0
                  });
                  setTimeout(() => {
                    document.querySelector(".input").value = "";
                  }, 1000);
                }
              }}
              className="input"
              style={{
                color: "white",
                outline: "none",
                backgroundColor: "#0f0f0f",
                border: "none",
                fontSize: "18px"
              }}
              type="text"
              placeholder="Type name, title"
            />
          </form>{" "}
        </div>{" "}
        {element}{" "}
      </div>
    );
  }
}

class Loader extends Component {
  render() {
    return (
      <div className="gif" style={st}>
        {" "}
        <h1 style={{maxWidth:"200px", margin: "auto", paddingTop:"60px"}} >Loading...</h1>
      </div>
    );
  }
}


class Results extends Component {
  constructor(props) {
    super(props);
    this.myInput = React.createRef();
    this.myInputt = React.createRef(); 
  }
  state = {
    searchValue: this.props.value,
    hid: "",
    value: 0,
    vsblty: "hidden",
    left: 0,
    stop: 0
    };
  
    slide() {
      let one = (window.innerWidth - 20)> this.myInputt.current.getBoundingClientRect().left;
  
      let p = 1;
      if (one) {
        console.clear();
        console.log(++p);
        this.more(++p);
      }
      this.setState({
        stop: 0,
        hid: one ? "hidden":"visible",
        left: this.myInput.current.offsetLeft,
        value: one ? this.state.value + 0 : this.state.value + 100,
        vsblty: "visible"
      });
    }

  refresh() {
    this.setState({
      hid: "visible",
      value: 0
    });
    setTimeout(() => {
      this.setState({
        vsblty: "hidden"
      });
    }, 500);
  }
  componentDidMount() {
    this.setState({
      stop: window.innerWidth
    });
  } 
  render() {
    let truthy = this.props.info == "";
    let element =
      truthy === true ? null : (
        <span onClick={() => this.slide()} style={{visibility: this.state.hidd }}  className="arrow">
          <i className="icon-arrow-right"> </i>{" "}
        </span>
      );
    let catchError =
      truthy === true ? <Loader /> : <Pass info={this.props.info} />;

    return (
      <div className="results" key={this.props.value} style={st}>
        {" "}
        {element}{" "}
        <span
        onClick={() => this.refresh()}
        style={{ visibility: this.state.vsblty }}
        className="refresh">
        <i className="icon-arrow-left "></i>{" "}
      </span>
        <div className="title">
          <h1 style={{ color: "white", paddingLeft: "10px" , textTransform:"lowercase"}}>
            {" "}
            {this.props.title} for {this.props.value}({this.props.len}){" "}
          </h1>{" "}
        </div>{" "}
        <div style={{ right: this.state.value + "px" }} className="preview" ref={this.myInput}>
          {" "}
          {catchError}{" "}
          
          <div className="stopper" ref={this.myInputt}>
            {" "}
          </div>
        </div>{" "}
      </div>
    );
  }
}

const st = {
  backgroundColor: "black",
  minWidth: "90vw",
  padding: "60px",
  margin: "auto",
  paddingBottom: "30px"
};

export default Search;
