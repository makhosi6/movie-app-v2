import React, { Component } from "react";

class Modal extends Component {
  state = {};
  render() {
    return (
      <div className="modal" style={compStyles}>
        <div className="wrapper" style={styles}>
          <div className="video">
            <div className="clip" style={{ maxWidth: "854px" }}>
              <div
                style={{
                  position: "relative",
                  height: "0",
                  paddingBottom: "56.25%"
                }}
              >
                <iframe
                  src="https://embed.ted.com/talks/dan_ariely_how_to_change_your_behavior_for_the_better"
                  width="854"
                  height="480"
                  style={{
                    position: "absolute",
                    left: "0",
                    top: "0",
                    width: "100%",
                    height: "100%"
                  }}
                  frameborder="0"
                  scrolling="no"
                  allowfullscreen
                ></iframe>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div
            className="video-desc"
            style={{
              backgroundColor: "#0f0f0f"
            }}
          > 
            <span
              style={{ float: "right", margin: "10px"}}
              className="icon-plus"
            >
              {" "}
            </span>{" "}
            <h4> Lorem, ipsum. </h4> <hr />
            <h4> Lorem, ipsum. </h4>{" "}
            <p className="para">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Ducimus
              maxime, non eius doloremque dolor ut molestias sapiente.Ea
              eveniet, eos accusantium vel ratione at dolore.Nam possimus
              ratione eaque ex, aut a laudantium odit ut quod, laboriosam et
              exercitationem illum repudiandae fugit quae dignissimos impedit
              sit ad ? Minima eveniet dolorum nostrum repudiandae, cumque
              velit.Et dolorem quam velit porro laudantium.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}
export default Modal;

const compStyles = {
  margin: "auto",
  justifyContent: "space-around"
};

const styles = {
  itemsAlign: "centre",
  height: "auto",
  color: "black"
};
