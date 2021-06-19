import React from "react";
import Frame140 from "../Frame140";
import "./Frame5.css";

function Frame5(props) {
  const { quickLinks, frame140Props, frame1402Props, frame1403Props } = props;

  return (
    <div className="frame-5">
      <div className="quick-links valign-text-middle typographyheadlineh5-extrabold-20">{quickLinks}</div>
      <div className="frame-4">
        <Frame140 aboutUs={frame140Props.aboutUs} projects={frame140Props.projects} />
        <Frame140
          aboutUs={frame1402Props.aboutUs}
          projects={frame1402Props.projects}
          className={frame1402Props.className}
        />
        <Frame140
          aboutUs={frame1403Props.aboutUs}
          projects={frame1403Props.projects}
          className={frame1403Props.className}
        />
      </div>
    </div>
  );
}

export default Frame5;
