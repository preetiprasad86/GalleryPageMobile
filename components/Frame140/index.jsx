import React from "react";
import "./Frame140.css";

function Frame140(props) {
  const { aboutUs, projects, className } = props;

  return (
    <div className={`frame-140 ${className || ""}`}>
      <div className="about-us valign-text-middle typographybody16-regular">{aboutUs}</div>
      <div className="projects valign-text-middle typographybody16-regular">{projects}</div>
    </div>
  );
}

export default Frame140;
