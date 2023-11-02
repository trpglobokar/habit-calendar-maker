import React, { useState } from "react";

import IconButton from "@mui/material/IconButton";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import HabitListItemEdit from "./HabitListItemEdit";
import { deleteHabit } from "../data/dateSlice";
import { useAppDispatch } from "../data/hooks";
import { Habit } from "../data/types";

import "./HabitListItem.css";

interface HabitListItemProps {
  habit: Habit;
}
const HabitListItem: React.FunctionComponent<HabitListItemProps> = ({
  habit,
}) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteHabit(habit.id));
  };

  if (isEditMode) {
    return (
      <HabitListItemEdit
        habit={habit}
        handleExitEdit={() => setIsEditMode(false)}
      />
    );
  }

  return (
    <li key={habit.id}>
      <span>
        {" "}
        {habit.name}: {habit.reward}
      </span>
      <span className="ControlsWrapper">
        <IconButton aria-label="edit" onClick={() => setIsEditMode(true)}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </span>
    </li>
  );
};

export default HabitListItem;
