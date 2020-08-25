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
      results: [
        {
          popularity: 13.318,
          vote_count: 681,
          video: false,
          poster_path: "/pci1ArYW7oJ2eyTo2NMZYEKHHiCP.jpg",
          id: 724089,
          adult: false,
          backdrop_path: "/jtAI6OJIWLWiRItNSZZoWjrsUtmi.jpg",
          original_language: "en",
          original_title: "N2",
          genre_ids: [1],
          title: "N2",
          vote_average: 9.1,
          overview:
            "Professor Gabriel Emerson finally learns the truth about Julia Mitchell's identity, but his realization comes a moment too late. Julia is done waiting for the well-respected Dante specialist to remember her and wants nothing more to do with him. Can Gabriel win back her heart before she finds love in another's arms?",
          release_date: "2020-07-31",
        },
      ],
    },
  };
  async latest(page) {
    let m = `https://api.themoviedb.org/3/movie/top_rated?api_key=ab9c9c39ef6dbe62904e9ed46a9e6b8b&language=en-US&page=${page}`;
    const res = await fetch(m);
    console.log(m);
    const dt = await res.json();
    this.setState({
      latest: Object.assign({}, this.state.latest, {
        results: this.state.latest.results.concat(dt.results),
      }),
    });
  }
  async popular(page) {
    let p = `https://api.themoviedb.org/3/movie/popular?api_key=ab9c9c39ef6dbe62904e9ed46a9e6b8b&language=en-US&page=${page}`;
    const resp = await fetch(p);
    console.log(p);
    const data = await resp.json();
    this.setState({
      popular: Object.assign({}, this.state.popular, {
        results: this.state.popular.results.concat(data.results),
      }),
    });


  }
  async mostwatched(page) {
    let p = `https://api.themoviedb.org/3/movie/popular?api_key=ab9c9c39ef6dbe62904e9ed46a9e6b8b&language=en-US&page=${page}`;
    const resp = await fetch(p);
    const data = await resp.json();
    console.log(p);
    console.log(page);
    this.setState({
      mostwatched: Object.assign({}, this.state.mostwatched, {
        results: this.state.mostwatched.results.concat(data.results),
      }),
    });
  }
  async componentDidMount() {
    this.latest(1);
    this.popular(1);
    this.mostwatched(1);
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ maxWidth: "300px", margin: "auto" }}>
          <h1>Something went wrong. </h1>
          <p>Error: {this.state.hasError}</p>
        </div>
      );
    }
    return (
      <section style={style}>
        <Preview
          className="popular"
          id="popular"
          more={this.popular}
          cat={this.state.popular.title}
          info={this.state.popular.results}
        />{" "}
        <Preview
          more={this.latest}
          cat={this.state.latest.title}
          info={this.state.latest.results}
        />{" "}
        <Preview
          more={this.mostwatched}
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
  margin: "auto",
};
