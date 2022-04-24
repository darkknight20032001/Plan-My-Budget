import React from "react";

const CostTable = ({ data }) => {
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
  );
};

export default CostTable;
