import React from "react";
import "./Arrow.css";

const Arrow = ({setScaling}) => {
  return (
    <div className="scrollDown" onMouseEnter={() => setScaling(true)}
    onMouseLeave={() => setScaling(false)}>
      <div className="mouse">
        <span className="mouse2"></span>
      </div>
      <div className="arrow">
        <span></span>
      </div>
    </div>
  );
};

export default Arrow;
