import React, { Component } from "react";
import axios from "axios";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { Link } from "@material-ui/core";

class Img extends Component {
  constructor(props) {
    super(props);
    this.myInput = React.createRef();
    
  }
  state = {
    name: "",
    prev: "",
    idValue: "",
    srl: Math.floor(Math.random()*3468786)
  }
  async change(name, el) {
    const prev = el.innerHTML;
    console.log(prev);
    this.setState({
      el,
      name,
    });
    setTimeout(() => {
      this.setState({
        prev,
      });
    }, 500);

    el.className += " play ";
    el.innerHTML = `<div class="gif" style = "width: 100%; height:100%;" ></div>`;
    // let m = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${name}+trailer&key=${YT_API_KEY}`;
    // const res = await fetch(m);
    // const data = await res.json();
    const vidId = 1_000_000;
    // const vidId =  await data.items[0].id.videoId;
    el.innerHTML =
      '<iframe class="play" src="https://www.youtube.com/embed/'+vidId+'" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  }

  handleClickAway(x,el) {
    if (x !== "") {
      el.className = "img";
        this.setState({
          prev: "",
          srl: Math.floor(Math.random()*3468786)
        });
    }
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    // console.log(this.state.srl, Math.floor(Math.random()*3468786));
    let dummieImage ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAACzCAMAAACaV0OpAAAAG1BMVEXn5+fGxsbOzs7KysrS0tLCwsLj4+PX19ff398cUTmPAAABIElEQVR4nO3a0Q6CMAxAUcC57f+/WBMgGCtptK1FufdNHnoiyWYfHAYiIqL3ayW2lgXv0+FwKcgHkKf4kA8ktzp/rs0KiUmKXNcH1SqLSYrs9/7FJGTkVDnvVOXdJIEhIyOfRmYbsiQmISOnymxDriEjIyP/scwGaElM2pEvS/LJp4lJyMj3trNglcUkRd7Ov1UWkxQ5MGRkZORwOe/2zPvF8Hv/YhIycqrMHuYaMjIycrhc1juvWCExSZHZw5CRveXvn6pxqfT5cy+jMTFJkQNDRkZGDpfzbs++PuhWWUxSZL/3LyYhI6fKfqeqPk9SZPYwZGRk5N+S2QAtiUnIyKkyG6BryKeWr/GdUa6v5Skc3vvneI2mp52vTERERI/dADURd6mhIc7LAAAAAElFTkSuQmCC";
    let none = "https://image.tmdb.org/t/p/w780/null";
    let src = this.props.url === none ? dummieImage : this.props.url;
    if (this.state.hasError) {
      return (
        <div style={{ maxWidth: "300px", margin: "auto" }}>
          <h1>Something went wrong. </h1>
          <p>Error: {this.state.hasError}</p>
        </div>
      );
    }
    return (
    <ClickAwayListener  key={`u${this.state.srl}*${Math.floor(Math.random()*3468786)}`} onClickAway={()=>this.handleClickAway(this.state.prev,this.myInput.current)}>
    <article>
          <div ref={this.myInput} className="img">
            <div className="b">
              <div className="imgWrapper">
                <img
                  style={{ margin: "auto" }}
                  src={src}
                  alt={this.props.title}
                />
              </div>
              <span
                style={{ float: "right", margin: "10px" }}
                onClick={() =>
                  this.change(
                    this.props.title,
                    this.myInput.current,
                    this.props.id
                  )
                }
                className="icon-control-play"
              ></span>
              <h4 style={{ paddingLeft: "10px" }}>
                {this.props.title}{" "}
                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: "light",
                    color: "grey",
                  }}
                >
                  {(this.props.year)?this.props.year.slice(0, 4):"0000"}
                </span>
                <br />
                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: "light",
                    borderBottom: "1px solid white",
                  }}
                >
                  Votes: {this.props.votes}
                </span>
              </h4>
              <p
                className="lines"
                style={{
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  textOverflow: "ellipsis",
                }}
              >
                {this.props.pre}
              </p>
            </div>
          </div>
        </article>
      </ClickAwayListener>
    );
  }
}

export default Img;

const YT_API_KEY = process.env.REACT_APP_TY_API_KEY;