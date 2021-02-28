import React, { Component } from "react";
import Preview from "./Preview";

class Body extends Component {
  constructor(props) {
    super(props)
    this.popular = this.popular.bind(this);
    this.latest = this.latest.bind(this);
    this.mostwatched = this.mostwatched.bind(this);
  }
  
  state = {
   
    latest: {
      title: "Popular",
      results: [],
    },
    popular: {
      title: "Latest",
      results: [],
    },
    mostwatched: {
      title: "Most Watched",
      results: [],
    },
  };
  async latest(page) {
    let m = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`;
    const res = await fetch(m);
    const dt = await res.json();
    this.setState({
      latest: Object.assign({}, this.state.latest, {
        results: this.state.latest.results.concat(dt.results),
      }),
    });
  }
  async popular(page,) {
    let p = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
    const resp = await fetch(p);
    const data = await resp.json();
    this.setState({
      popular: Object.assign({}, this.state.popular, {
        results: this.state.popular.results.concat(data.results),
      }),
    });


  }
  async mostwatched(page) {
    let p = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
    const resp = await fetch(p);
    const data = await resp.json();
    this.setState({
      mostwatched: Object.assign({}, this.state.mostwatched, {
        results: this.state.mostwatched.results.concat(data.results),
      }),
    });
  }
  async componentDidMount() {
    this.latest(1)
    this.popular(1)
    this.mostwatched(1)
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    setInterval(async () => {

      if(this.state.status !== this.props.status){
        this.setState({
          status: this.props.status
        });
      }
           
    }, 3000);

    if (this.state.hasError) {
      return (
        <div style={{ maxWidth: "300px", margin: "auto" }}>
          <h1>Something went wrong. </h1>
          <p>Error: {this.state.hasError}</p>
        </div>
      );
    }
    return (
      <main style={style}>
        <Preview
        id="most"
          status={this.state.status}
          className="popular"
          id="popular"
          more={this.popular}
          cat={this.state.popular.title}
          info={this.state.popular.results}
        />{" "}
        <Preview
          status={this.state.status}
          more={this.latest}
          cat={this.state.latest.title}
          info={this.state.latest.results}
        />{" "}
        <Preview
          status={this.state.status}
          more={this.mostwatched}
          cat={this.state.mostwatched.title}
          info={this.state.mostwatched.results}
        />{" "}
      </main>
    );
  }
}

export default Body;
const API_KEY = process.env.REACT_APP_API;
const style = {
  bottom: "0",
  backgroundColor: "black",
  maxWidth: "90vw",
  padding: "10px",
  margin: "auto",
};
