import React from "react";
import "./CostTable.css";
const CostTable = ({ data }) => {
  return (
    <div className="Cost-table">
      <table>
        <tbody>
          <tr>
            <th>Items</th>
            <th>Cost</th>
          </tr>
          <tr>
            <td>Housing</td>
            <td>&#8377;{data.housing}</td>
          </tr>
          <tr>
            <td>Food</td>
            <td>&#8377;{data.food}</td>
          </tr>
          <tr>
            <td>Water Supply</td>
            <td>&#8377;{data.waterSupply}</td>
          </tr>
          <tr>
            <td>Electricity Supply</td>
            <td>&#8377;{data.electricitySupply}</td>
          </tr>
          <tr>
            <td>Transportation</td>
            <td>&#8377;{data.transportation}</td>
          </tr>
          <tr>
            <td>Internet Supply</td>
            <td>&#8377;{data.internetSupply}</td>
          </tr>
          <tr>
            <td>Fuel Prices</td>
            <td>&#8377;{data.fuelPrices}</td>
          </tr>
          <tr>
            <td>Gas Prices</td>
            <td>&#8377;{data.gasPrices}</td>
          </tr>
        </tbody>
      </table>
      <table className="Total-cost">
        <tbody>
          <tr>
            <th>Overall cost of living for one person</th>
            <th>&#8377;{data.totalCost}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CostTable;
