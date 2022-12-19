import React from "react";
import "./Feature.css";

export const Feature = ({ title, text }) => {
  return (
    <div className="feature-container">
      <div className="feature-container-title">
        <div/>
        <h4>{title}</h4>
      </div>
      <div className="feature-container-text">
        <p>{text}</p>
      </div>
    </div>
  );
};
