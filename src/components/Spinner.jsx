import React from "react";
import loadingGif from "../assets/loading.gif";
export default function Spinner() {
  return (
    <div className="text-center" style={{ height: "10em", marginTop: "20px" }}>
      <img style={{ height: "10em" }} src={loadingGif} alt="loading..." />
    </div>
  );
}
