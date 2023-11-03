import React from "react";

import PickerMonth from "./pickers/PickerMonth";
import PickerYear from "./pickers/PickerYear";

import "./CalendarHeader.css";

const CalendarHeader: React.FunctionComponent = () => {
  return (
    <div className="CalendarHeaderWrapper">
      <PickerMonth />
      <PickerYear />
    </div>
  );
};

export default CalendarHeader;
