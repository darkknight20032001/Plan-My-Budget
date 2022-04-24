import React from "react";
import myDatabase from "../../Database/myDatabase";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const Form = ({ city, setCity, text }) => {
  const handleChange = (event) => {
    setCity(event.target.value);
  };
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-helper-label">{text}</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={city}
        label="City"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {myDatabase.map((item) => (
          <MenuItem key={item.id} value={item.cityName}>
            {item.cityName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Form;
