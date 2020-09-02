import React, { Component } from "react";
import Preview from "./Preview";

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
      results: [],
    },
  };

  async ifChange(page) {
    let m = `https:api.themoviedb.org/3/search/movie?api_key=ab9c9c39ef6dbe62904e9ed46a9e6b8b&language=en-US&query=${this.state.queryvalue}&page=${page}`;

    const res = await fetch(m);
    const dt = await res.json();

    this.setState({
      query: Object.assign({}, this.state.query, {
        results: this.state.query.results.concat(dt.results),
      }),
    });
  }
  search() {
    if (document.querySelector(".input").value === "") {
      document.querySelector(".input").placeholder = "Please fill in!!!";
    } else {
      this.setState({
        queryvalue: document.querySelector(".input").value,
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
        <section style={style}>
          <div className="title">
            <h1
              style={{
                color: "white",
                paddingLeft: "10px",
                textTransform: "lowercase",
              }}
            >
              {this.state.query.title} for {this.state.queryvalue}(
              {this.state.query.results.length})
            </h1>
          </div>
          <Preview
            more={this.ifChange}
            value={this.state.queryvalue}
            len={this.state.query.results.length || 0}
            info={this.state.query.results}
          />
        </section>
      );
    return (
            <section>
              <div key={this.state.queryvalue + "86"} className="search">
                <form
                  onClick={(e) => {
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
                    onKeyDown={(e) => {
                      if (
                        e.which === 13 &&
                        document.querySelector(".input").value !== ""
                      ) {
                        setTimeout(() => {
                          this.ifChange();
                        }, 1000);

                        this.setState({
                          queryvalue:
                            document.querySelector(".input").value || 0,
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
                      fontSize: "18px",
                    }}
                    type="text"
                    placeholder="Type name, title"
                  />
                </form>
              </div>
              {element}
            </section>
    );
  }
}

const style = {
  bottom: "0",
  backgroundColor: "black",
  maxWidth: "90vw",
  padding: "10px",
  margin: "auto",
};

export default Search;
