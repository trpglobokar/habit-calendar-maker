import React, { useState } from "react";

import { useAppSelector } from "../data/hooks";
import { selectChores } from "../data/dateSlice";

import ChoreListItem from "./ChoreListItem";
import NewHabit from "./NewHabit";

import "./ChoreList.css";

const ChoreList: React.FunctionComponent = () => {
  const chores = useAppSelector(selectChores);

  const newItem =
    chores.length < 4 ? (
      <div className="HabitListItem">
        <NewHabit />
      </div>
    ) : null;

  const choreSalaries = chores.map((chore) => (
    <div className="HabitListItem">
      <ChoreListItem key={chore.id} chore={chore} />
    </div>
  ));

  return (
    <div className="HabitList">
      {choreSalaries}
      {newItem}
    </div>
  );
};

export default ChoreList;
