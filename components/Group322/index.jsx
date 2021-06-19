import React from "react";
import "./Group322.css";

function Group322(props) {
  const { place, overlapGroup, phone, overlapGroup1, vector2, text165, text164, contactWebuildCom } = props;

  return (
    <div className="group-32">
      <div className="place valign-text-middle typographyheadlineh5-extrabold-20">{place}</div>
      <div className="flex-row-1">
        <div className="flex-col">
          <div className="map-pin-1">
            <div className="overlap-group1-4" style={{ backgroundImage: `url(${overlapGroup})` }}>
              <img
                className="vector-9"
                src="https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-150@2x.svg"
              />
            </div>
          </div>
          <div className="phone" style={{ backgroundImage: `url(${phone})` }}></div>
          <div className="mail">
            <div className="overlap-group2" style={{ backgroundImage: `url(${overlapGroup1})` }}>
              <img className="vector-10" src={vector2} />
            </div>
          </div>
        </div>
        <div className="flex-col-1">
          <p className="text-2 typography-body-smalltext-14-regular">{text165}</p>
          <div className="flex-col-item valign-text-middle typography-body-smalltext-14-regular">{text164}</div>
          <div className="flex-col-item valign-text-middle typography-body-smalltext-14-regular">
            {contactWebuildCom}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Group322;
