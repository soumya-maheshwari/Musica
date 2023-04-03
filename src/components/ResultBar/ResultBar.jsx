import React from "react";
import "./resultBar.css";
const ResultBar = (props) => {
  return (
    <div>
      <a
        href={props.audio}
        className="SongResultBarAnchor"
        target="_blank"
        rel="noreferrer"
      >
        <div className="container SongResultBar">
          <div className="songImage">
            <img src={props.songImgSrc} alt="" />
          </div>
          <div className="songInfo">
            <div className="songTitle">{props.songTitle}</div>
            <div className="singers">
              {props.singers} | {props.duration}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ResultBar;
