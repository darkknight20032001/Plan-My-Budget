import React from "react";
import "./ShortDetails.css";
const ShortDetails = ({ detail, count }) => {
  return (
    <div className="Short-details">
      <img
        src={`/assets/icons/${detail}.png`}
        width="70px"
        height="70px"
        alt="worker"
      />
      <h2>{count}</h2>
      <p>
        {detail.charAt(0).toUpperCase() +
          detail
            .replace(/([A-Z])/g, " $1")
            .trim()
            .slice(1)}
      </p>
    </div>
  );
};

export default ShortDetails;
