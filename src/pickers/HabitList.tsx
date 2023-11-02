import React from "react";

import HabitListItem from "./HabitListItem";
import NewHabit from "./NewHabit";
import { selectHabits } from "../data/dateSlice";
import { useAppSelector } from "../data/hooks";

import "./HabitList.css";

const HabitList: React.FunctionComponent = () => {
  const habits = useAppSelector(selectHabits);

  const newItem =
    habits.length < 4 ? (
      <div className="NewHabitButtonWrapper">
        <NewHabit />
      </div>
    ) : null;

  const habitSalaries = habits.map((habit) => (
    <div className="HabitListItem">
      <HabitListItem key={habit.id} habit={habit} />
    </div>
  ));

  return (
    <div className="HabitList">
      {habitSalaries}
      {newItem}
    </div>
  );
};

export default HabitList;
