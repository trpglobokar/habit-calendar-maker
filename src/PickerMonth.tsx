import React, { FunctionComponent } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { useAppSelector, useAppDispatch } from "./data/hooks";
import { selectMonth, changeMonth } from "./data/dateSlice";
import { monthsEnum } from "./data/types";

const PickerMonth: FunctionComponent = () => {
  const selectedMonth = useAppSelector(selectMonth);
  const dispatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(changeMonth(event.target.value));
  };

  const monthNames = Object.keys(monthsEnum).filter((v) => isNaN(Number(v)));

  const menuItems = monthNames.map((monthName, index) => {
    console.log("index", index);
    return <MenuItem value={index + 1}>{monthName}</MenuItem>;
  });

  console.log("selectedMonth", selectedMonth);

  return (
    <div className="PickerMonth">
      <h3>Month Picker</h3>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedMonth}
        label="Month"
        onChange={handleChange}
      >
        {menuItems}
      </Select>
    </div>
  );
};

export default PickerMonth;
