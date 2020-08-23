import React, { Component } from "react";
import Preview from "./Preview";

class Body extends Component {
  state = {
    latest: {
      title: "Popular",
      results: []
    },
    popular: {
      title: "Latest",

      results: []
    },
    mostwatched: {
      title: "Most Watched",
      results: []
    }
  };

  async componentDidMount() {
    let m =
      "https://api.themoviedb.org/3/movie/top_rated?api_key=ab9c9c39ef6dbe62904e9ed46a9e6b8b&language=en-US&page=1";

    const res = await fetch(m);

    const dt = await res.json();

    this.setState({
      latest: Object.assign({}, this.state.latest, {
        results: dt.results
      })
    });

    let p =
      "https://api.themoviedb.org/3/movie/popular?api_key=ab9c9c39ef6dbe62904e9ed46a9e6b8b&language=en-US&page=1";

    const resp = await fetch(p);

    const data = await resp.json();

    this.setState({
      popular: Object.assign({}, this.state.popular, {
        results: data.results
      })
    });
    this.setState({
      mostwatched: Object.assign({}, this.state.mostwatched, {
        results: data.results
      })
    });
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
  
    return (
      <section style={style}>
        <Preview
          className="popular"
          id="popular"
          cat={this.state.popular.title}
          info={this.state.popular.results}
        />{" "}
        <Preview
          cat={this.state.latest.title}
          info={this.state.latest.results}
        />{" "}
        <Preview
          cat={this.state.mostwatched.title}
          info={this.state.mostwatched.results}
        />{" "}
      </section>
    );
  }
}

export default Body;

const style = {
  bottom: "0",
  backgroundColor: "black",
  maxWidth: "90vw",
  padding: "10px",
  margin: "auto"
};
