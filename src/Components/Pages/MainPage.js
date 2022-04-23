import React,{useState} from "react";
import { useLocation } from "react-router-dom";
import myDatabase from "../../Database/myDatabase";
import "./MainPage.css";
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
        <p>{data.gdbPerCapita}</p>
        <p>{data.humanFreedomIndex}</p>
        <p>{data.lifeExpectancy}</p>
      </div>
      <div>
        <button
          onClick={() => {
            setClicked(true);
          }}
        >
          Budget design for me
        </button>
      </div>
      {clicked && (
        <div>
          <h3>Cost per person</h3>
          <p>{data.housing}</p>
          <p>{data.food}</p>
          <p>{data.waterSupply}</p>
          <p>{data.electricitySupply}</p>
          <p>{data.transportation}</p>
          <p>{data.internetSupply}</p>
          <p>{data.fuelPrices}</p>
          <p>{data.gasPrices}</p>
        </div>
      )}
    </div>
  );
};

export default MainPage;
