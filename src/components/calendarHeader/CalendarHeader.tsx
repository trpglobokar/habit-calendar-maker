import React from "react";

import CalendarHeaderMonth from "./CalendarHeaderMonth";
import CalendarHeaderYear from "./CalendarHeaderYear";

import "./CalendarHeader.css";

const CalendarHeader: React.FunctionComponent = () => {
  return (
    <div className="CalendarHeaderWrapper">
      <CalendarHeaderMonth />
      <CalendarHeaderYear />
    </div>
  );
};

export default CalendarHeader;
