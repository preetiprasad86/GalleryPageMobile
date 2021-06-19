import React from "react";
import "./Twitter.css";

function Twitter(props) {
  const { src } = props;

  return (
    <div className="twitter">
      <img className="vector-8" src={src} />
    </div>
  );
}

export default Twitter;
