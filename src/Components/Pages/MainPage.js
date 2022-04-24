import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import myDatabase from "../../Database/myDatabase";
import Compare from "../Compare/Compare";
import CostTable from "./CostTable";
import "./MainPage.css";
import ShortDetails from "./ShortDetails";
const MainPage = () => {
  const [clicked, setClicked] = useState(false);
  const location = useLocation();
  const [data] = myDatabase.filter(
    (item) => item.cityName.toLowerCase() === location.state.toLowerCase()
  );

  return (
    <div>
      <div className="cityName">
        <h1>{data.cityName}</h1>
        <div className="cityName-details">
          <ShortDetails detail="gdpPerCapita" count={data.gdbPerCapita} />
          <ShortDetails
            detail="humanFreedomIndex"
            count={data.humanFreedomIndex}
          />
          <ShortDetails detail="lifeExpectancy" count={data.lifeExpectancy} />
        </div>
      </div>
      <div className="Budget-btn">
        <button
          onClick={() => {
            setClicked(true);
          }}
        >
          Budget design for me
        </button>
      </div>
      {clicked && <CostTable data={data} />}
      <Compare />
    </div>
  );
};
export default MainPage;
