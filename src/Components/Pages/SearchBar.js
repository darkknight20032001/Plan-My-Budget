import React from "react";
import "./SearchBar.css";
import TextField from '@mui/material/TextField';
const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="Search">
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
