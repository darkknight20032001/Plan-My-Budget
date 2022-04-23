import React from "react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      value={search}
      onChange={(event) => {
        setSearch(event.target.value);
      }}
    />
  );
};

export default SearchBar;
