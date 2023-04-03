import React from "react";
import "./resultBar.css";
const ResultBar = (props) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <a
        href={props.audio}
        className="SongResultBarAnchor"
        target="_blank"
        rel="noreferrer"
      >
        <div className="container SongResultBar">
          <div className="songImage">
            <img src={props.songImgSrc} height="90px" alt="" />
          </div>
          <div className="songInfo">
            <div className="songTitle">{props.songTitle}</div>
            <div className="singers">
              {props.singers}
              {"     "} || {"  "}
              {props.duration}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ResultBar;
