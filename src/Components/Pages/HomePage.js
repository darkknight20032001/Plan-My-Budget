import React, { useState } from "react";
import myDatabase from "../../Database/myDatabase";
import MyCity from "./MyCity";
import SearchBar from "./SearchBar";
import "./HomePage.css";
const HomePage = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <SearchBar search={search} setSearch={setSearch} />
      <div className="Home">
        {myDatabase
          .filter((items) => {
            if (search == "") {
              return items;
            } else if (
              items.cityName.toLowerCase().includes(search.toLowerCase())
            ) {
              return items;
            }
          })
          .map((listItems) => {
            return <MyCity key={listItems.id} cityName={listItems.cityName} />;
          })}
      </div>
    </>
  );
};

export default HomePage;
