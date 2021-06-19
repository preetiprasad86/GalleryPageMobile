import React from "react";
import Group8622 from "../Group8622";
import Group872 from "../Group872";
import Group322 from "../Group322";
import Frame5 from "../Frame5";
import "./Group2122.css";

function Group2122(props) {
  const { group862Props, group872Props, group322Props, frame5Props } = props;

  return (
    <div className="group-212">
      <div className="flex-row">
        <Group8622 group85={group862Props.group85} />
        <Group872
          overlapGroup={group872Props.overlapGroup}
          vector2={group872Props.vector2}
          facebookAppSymbolProps={group872Props.facebookAppSymbolProps}
          twitterProps={group872Props.twitterProps}
        />
      </div>
      <Group322 {...group322Props} />
      <Frame5
        quickLinks={frame5Props.quickLinks}
        frame140Props={frame5Props.frame140Props}
        frame1402Props={frame5Props.frame1402Props}
        frame1403Props={frame5Props.frame1403Props}
      />
    </div>
  );
}

export default Group2122;
