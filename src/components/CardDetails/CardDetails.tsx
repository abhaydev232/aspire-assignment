// CardDetails.jsx
import React from "react";
import { ReactComponent as CardIcon } from "../../assets/card-icon.svg"; // your icon
import ArrowIcon  from "../../assets/arrow-down.svg"; // your arrow icon
import "./CardDetails.css";

const CardDetails = () => {
  return (
    <div className="card-details-container">
      <div className="card-details-content">
        <CardIcon className="card-icon" />
        <span className="card-text">Card details</span>
      </div>
     <span> <img src={ArrowIcon}  alt="logo" className="arrow-icon"/></span>
    
    </div>
  );
};

export default CardDetails;
