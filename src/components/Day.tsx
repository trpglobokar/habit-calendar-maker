import React from "react";

import HabitLog from "./HabitLog";
import { selectHabits } from "../data/dateSlice";
import { useAppSelector } from "../data/hooks";

import "./Day.css";

interface DayProps {
  date?: number;
}
const Day: React.FunctionComponent<DayProps> = ({ date }) => {
  const habits = useAppSelector(selectHabits);

  if (!date) {
    return <div className="Day"></div>;
  }

  const habitLogs = habits.map((habit) => <HabitLog title={habit.name} />);

  return (
    <div className="Day">
      <div>{date}</div>
      {habitLogs}
      <div className="Totals">
        <div className="TodaysTotal" />
        <div className="Gap" />
        <div className="RunningTotal" />
      </div>
    </div>
  );
};

export default Day;
