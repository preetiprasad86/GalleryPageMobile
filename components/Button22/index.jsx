import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./Button22.css";

function Button22(props) {
  const { children } = props;

  useEffect(() => {
    loadTimelineData(x27322561TimelineData);
  }, []);

  return (
    <div className="x27322561 component component-wrapper not-ready">
      <div className="master-button-w1w4qD">
        <div className="button-i2732256151-8NZJx7 valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const x27322561TimelineData = [
  {
    initial_state_name: "Property-1=Tertiary",
    root_element: ".x27322561",
    states_flow: {
      "Property-1=Primary": {
        listeners: [],
        overrides: {},
      },
      "Property-1=Secondary": {
        listeners: [],
        overrides: {},
      },
      "Property-1=Tertiary": {
        listeners: [],
        overrides: {},
      },
    },
  },
];

export default Button22;
