import { FunctionComponent } from "react";

import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import CalendarHeaderItem from "./CalendarHeaderItem";
import { selectYear, changeYear } from "../../data/dateSlice";
import { useAppSelector, useAppDispatch } from "../../data/hooks";

const CalendarHeaderYear: FunctionComponent = () => {
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

  return (
    <CalendarHeaderItem printLabel={currentYear.toString()}>
      <Select
        labelId="year-selector-label"
        id="year-selector"
        value={selectedYear}
        label="Year"
        onChange={handleChange}
        sx={{ fontSize: "1.5rem" }}
      >
        {menuItems}
      </Select>
    </CalendarHeaderItem>
  );
};

export default CalendarHeaderYear;
