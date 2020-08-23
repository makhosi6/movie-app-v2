import React, { Component } from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

class Img extends Component {
  constructor(props) {
    super(props);
    this.myInput = React.createRef();
    
  }
  state = {
    name: "",
    prev: "",
    idValue: "",
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
    let m = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${name}+trailer&key=AIzaSyCr0OQHwLQi1ubxxiwHZMwg4Pds8fXohzo`;
    const res = await fetch(m);
    const data = await res.json();
    const vidId = await data.items[0].id.videoId;
    el.innerHTML =
      '<iframe class="play" src="https://www.youtube.com/embed/'+vidId+'" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  }
  handleClickAway(x,el) {
    if (x !== "") {
      console.log("clickAway");
      el.className = "img";
      el.innerHTML = x;
    }
  }
  render() {
    let dummieImage =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAACzCAMAAACaV0OpAAAAG1BMVEXn5+fGxsbOzs7KysrS0tLCwsLj4+PX19ff398cUTmPAAABIElEQVR4nO3a0Q6CMAxAUcC57f+/WBMgGCtptK1FufdNHnoiyWYfHAYiIqL3ayW2lgXv0+FwKcgHkKf4kA8ktzp/rs0KiUmKXNcH1SqLSYrs9/7FJGTkVDnvVOXdJIEhIyOfRmYbsiQmISOnymxDriEjIyP/scwGaElM2pEvS/LJp4lJyMj3trNglcUkRd7Ov1UWkxQ5MGRkZORwOe/2zPvF8Hv/YhIycqrMHuYaMjIycrhc1juvWCExSZHZw5CRveXvn6pxqfT5cy+jMTFJkQNDRkZGDpfzbs++PuhWWUxSZL/3LyYhI6fKfqeqPk9SZPYwZGRk5N+S2QAtiUnIyKkyG6BryKeWr/GdUa6v5Skc3vvneI2mp52vTERERI/dADURd6mhIc7LAAAAAElFTkSuQmCC";
    let none = "https://image.tmdb.org/t/p/w780/null";
    let src = this.props.url === none ? dummieImage : this.props.url;
    return (
      <ClickAwayListener onClickAway={()=>this.handleClickAway(this.state.prev,this.myInput.current)}>
        <div>
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
                onMouseOver={()=> console.log("mouse over")}
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
                  {this.props.year.slice(0, 4)}
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
        </div>
      </ClickAwayListener>
    );
  }
}

export default Img;
