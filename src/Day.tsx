import React from "react";

import ChoreLog from "./ChoreLog";
import { selectChores } from "./data/dateSlice";
import { useAppSelector } from "./data/hooks";

import "./Day.css";

interface DayProps {
  date?: number;
}
const Day: React.FunctionComponent<DayProps> = ({ date }) => {
  const chores = useAppSelector(selectChores);

  if (!date) {
    return <div className="Day"></div>;
  }

  const choreLogs = chores.map((chore) => <ChoreLog title={chore.name} />);

  return (
    <div className="Day">
      <div>{date}</div>
      {choreLogs}
      <div className="Totals">
        <div className="TodaysTotal" />
        <div className="Gap" />
        <div className="RunningTotal" />
      </div>
    </div>
  );
};

export default Day;
