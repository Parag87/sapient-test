import React from "react";

const Vote = (props) => {
  let classes = "fa fa-caret";
  classes += !props.voted ? "-down" : "-up";

  return (
    <i
      onClick={props.onClick}
      className={classes}
      style={{ cursor: "pointer" }}
      aria-hidden="true"
    ></i>
  );
};

export default Vote;
