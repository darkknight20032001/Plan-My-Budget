import React, { useState } from "react";
import Form from "./Form";
import myDatabase from "../../Database/myDatabase";
import "./Compare.css";
const Compare = () => {
  const [data1, setData1] = useState({});
  const [data2, setData2] = useState({});
  const [compare, setCompare] = useState(false);
  const [city1, setCity1] = React.useState("");
  const [city2, setCity2] = React.useState("");
  const onCompare = () => {
    setCompare(true);
    const [d1] = myDatabase.filter(
      (item) => city1.toLowerCase() === item.cityName.toLowerCase()
    );
    setData1(d1);
    const [d2] = myDatabase.filter(
      (item) => city2.toLowerCase() === item.cityName.toLowerCase()
    );
    setData2(d2);
  };
  console.log(data1);
  console.log(data2);
  return (
    <div className="compare">
      <h1> Compare the total cost of two cities </h1>{" "}
      <div>
        <Form text="City1" city={city1} setCity={setCity1} />{" "}
        <Form text="City2" city={city2} setCity={setCity2} />{" "}
      </div>
      <div className="compare-btn">
        <button onClick={onCompare}> Compare </button>{" "}
      </div>{" "}
      {data1 && data2 && compare && (
        <div className="budget">
          <div className="compare-city">
            <p>
              Total cost of {data1.cityName} -{" "}
              <strong>&#8377;{data1.totalCost}</strong>{" "}
            </p>{" "}
            <p>
              Total cost of {data2.cityName} -{" "}
              <strong>&#8377;{data2.totalCost}</strong>
            </p>{" "}
          </div>{" "}
          <div className="message">
            {data2.totalCost - data1.totalCost > 0 ? (
              <p>
                You have to earn{" "}
                {(
                  ((data2.totalCost - data1.totalCost) / data1.totalCost) *
                  100
                ).toFixed(2)}
                % more to move to {data2.cityName}
              </p>
            ) : (
              <p>Your budget is alright to live in {data2.cityName}</p>
            )}
          </div>
        </div>
      )}{" "}
    </div>
  );
};

export default Compare;
