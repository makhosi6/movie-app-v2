import React from "react";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

export default function Modal(props) {
  const handleClickAway = () => {
    console.log("trial");
  };
const src = `https://www.youtube.com/embed/${props.id}`
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div>
        <iframe
        title={props.id}
          width="560"
          height="315"
          src={src}
          frameborder="0"
          allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </ClickAwayListener>
  );
}
