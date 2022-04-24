import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import myDatabase from "../../Database/myDatabase";
import "./MainPage.css";
import ShortDetails from "./ShortDetails";
const MainPage = () => {
  const [clicked, setClicked] = useState(false);
  const location = useLocation();
  const [data] = myDatabase.filter(
    (item) => item.cityName.toLowerCase() === location.state.toLowerCase()
  );
  const totalPrice =
    data.housing +
    data.food +
    data.waterSupply +
    data.electricitySupply +
    data.transportation +
    data.internetSupply +
    data.fuelPrices +
    data.gasPrices;
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
      {clicked && (
        <div className="Cost-table">
          <table>
            <tbody>
              <tr>
                <th>Items</th>
                <th>Cost</th>
              </tr>
              <tr>
                <td>Housing</td>
                <td>{data.housing}</td>
              </tr>
              <tr>
                <td>Food</td>
                <td>{data.food}</td>
              </tr>
              <tr>
                <td>Water Supply</td>
                <td>{data.waterSupply}</td>
              </tr>
              <tr>
                <td>Electricity Supply</td>
                <td>{data.electricitySupply}</td>
              </tr>
              <tr>
                <td>Transportation</td>
                <td>{data.transportation}</td>
              </tr>
              <tr>
                <td>Internet Supply</td>
                <td>{data.internetSupply}</td>
              </tr>
              <tr>
                <td>Fuel Prices</td>
                <td>{data.fuelPrices}</td>
              </tr>
              <tr>
                <td>Gas Prices</td>
                <td>{data.gasPrices}</td>
              </tr>
            </tbody>
          </table>
          <table className="Total-cost">
            <tbody>
              <tr>
                <th>Total Cost of Living</th>
                <th>{totalPrice}</th>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
export default MainPage;
