import React, { FunctionComponent } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { useAppSelector, useAppDispatch } from "../data/hooks";
import { selectYear, changeYear } from "../data/dateSlice";

const PickerYear: FunctionComponent = () => {
  const selectedYear = useAppSelector(selectYear);
  const dispatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(changeYear(event.target.value));
  };

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const availableYears = [];
  for (let i = currentYear - 2; i < currentYear + 5; i++) {
    availableYears.push(i);
  }

  const menuItems = availableYears.map((year) => {
    return <MenuItem value={year}>{year}</MenuItem>;
  });

  console.log("selectedMonth", selectedYear);

  return (
    <div className="PickerYear">
      <h3>Year Picker</h3>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedYear}
        label="Year"
        onChange={handleChange}
      >
        {menuItems}
      </Select>
    </div>
  );
};

export default PickerYear;
