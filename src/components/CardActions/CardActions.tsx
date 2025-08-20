import React from "react";
import gpay from "../../assets/gpay.svg";
import freezeIcon from "../../assets/freeze.svg";
import limitIcon from "../../assets/limit.svg";
import replaceIcon from "../../assets/replace.svg";
import cancelIcon from "../../assets/cancel.svg";
import "./CardActions.css";

const CardActions = () => {
  const actions = [
    { label: "Freeze card", icon: freezeIcon },
    { label: "Set spend limit", icon: limitIcon },
    { label: "Add to GPay", icon: gpay },
    { label: "Replace card", icon: replaceIcon },
    { label: "Cancel card", icon: cancelIcon },
  ];

  return (
    <div className="card-actions">
      {actions.map((action, i) => (
        <div key={i} className="action-item">
          <div className="action-icon">
            <img src={action.icon} alt={action.label} className="icon-img" />
          </div>
          <span className="action-label">{action.label}</span>
        </div>
      ))}
    </div>
  );
};

export default CardActions;
