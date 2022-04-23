import React from "react";

import "./MyCity.css";
import { useNavigate } from "react-router-dom";
const MyCity = ({ cityName }) => {
  const navigate = useNavigate();
  return (
    <div
      className="MyCity"
      onClick={() => navigate("/mainPage", { state: cityName })}
    >
      <p>{cityName}</p>
    </div>
  );
};

export default MyCity;
