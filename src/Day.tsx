import React from "react";
import ChoreLog from "./ChoreLog";

import "./Day.css";

interface DayProps {
  date?: number;
}
const Day: React.FunctionComponent<DayProps> = ({ date }) => {
  const dateHeader = date ? <div>{date}</div> : null;
  const choreLogs = date ? (
    <>
      <ChoreLog title="Writing" />
      <ChoreLog title="Exercise" />
      <ChoreLog title="Cleaning" />
    </>
  ) : null;
  const totals = date ? (
    <div className="Totals">
      <div className="TodaysTotal" />
      <div className="Gap" />
      <div className="RunningTotal" />
    </div>
  ) : null;

  return (
    <div className="Day">
      {dateHeader}
      {choreLogs}
      {totals}
    </div>
  );
};

export default Day;
