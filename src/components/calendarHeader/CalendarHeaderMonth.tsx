import { FunctionComponent } from "react";

import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import CalendarHeaderItem from "./CalendarHeaderItem";
import { selectMonth, changeMonth } from "../../data/dateSlice";
import { useAppSelector, useAppDispatch } from "../../data/hooks";
import { monthsEnum } from "../../data/types";

const CalendarHeaderMonth: FunctionComponent = () => {
  const selectedMonth = useAppSelector(selectMonth);
  const dispatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(changeMonth(event.target.value));
  };

  const monthNames = Object.keys(monthsEnum).filter((v) => isNaN(Number(v)));

  const menuItems = monthNames.map((monthName, index) => {
    return <MenuItem value={index + 1}>{monthName}</MenuItem>;
  });

  return (
    <CalendarHeaderItem printLabel={monthNames[parseInt(selectedMonth) - 1]}>
      <Select
        labelId="month-selector-label"
        id="month-selector"
        value={selectedMonth}
        label="Month Selector"
        onChange={handleChange}
        sx={{ fontSize: "1.5rem" }}
      >
        {menuItems}
      </Select>
    </CalendarHeaderItem>
  );
};

export default CalendarHeaderMonth;
