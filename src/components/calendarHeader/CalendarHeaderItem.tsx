import React, { PropsWithChildren } from "react";

import FormControl from "@mui/material/FormControl";

import "./CalendarHeader.css";

interface CalendarHeaderItemProps {
  printLabel: string;
}
const CalendarHeaderItem: React.FunctionComponent<
  PropsWithChildren<CalendarHeaderItemProps>
> = ({ printLabel, children }) => {
  return (
    <>
      <div className="PickerDropdown">
        <FormControl variant="standard">{children}</FormControl>
      </div>
      <div className="PickerPrintLabel">{printLabel}</div>
    </>
  );
};

export default CalendarHeaderItem;
