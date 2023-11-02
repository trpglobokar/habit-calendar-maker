import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";

import { useAppDispatch } from "../data/hooks";
import { deleteChore } from "../data/dateSlice";
import { Chore } from "../data/types";

import HabitListItemEdit from "./HabitListItemEdit";

interface ChoreListItemProps {
  chore: Chore;
}
const ChoreListItem: React.FunctionComponent<ChoreListItemProps> = ({
  chore,
}) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteChore(chore.id));
  };

  if (isEditMode) {
    return (
      <HabitListItemEdit
        chore={chore}
        handleExitEdit={() => setIsEditMode(false)}
      />
    );
  }

  return (
    <li key={chore.id}>
      <span>
        {" "}
        {chore.name}: {chore.reward}
      </span>
      <IconButton aria-label="edit" onClick={() => setIsEditMode(true)}>
        <EditIcon />
      </IconButton>
      <IconButton aria-label="delete" onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
    </li>
  );
};

export default ChoreListItem;
