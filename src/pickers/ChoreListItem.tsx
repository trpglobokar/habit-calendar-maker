import React, { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";

import { useAppDispatch } from "../data/hooks";
import { changeChore, deleteChore } from "../data/dateSlice";
import { Chore, monthsEnum } from "../data/types";
import TextField from "@mui/material/TextField";

interface ChoreListItemProps {
  chore: Chore;
}
const ChoreListItem: React.FunctionComponent<ChoreListItemProps> = ({
  chore,
}) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [tempChoreName, setTempChoreName] = useState(chore.name);
  const [tempReward, setTempReward] = useState(chore.reward);

  const dispatch = useAppDispatch();

  const handleEditCancel = () => {
    setIsEditMode(false);
    setTempChoreName(chore.name);
    setTempReward(chore.reward);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTempChoreName(event.currentTarget.value);
  };

  const handleRewardChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTempReward(event.currentTarget.value);
  };

  const handleSave = () => {
    dispatch(
      changeChore({
        id: chore.id,
        name: tempChoreName,
        reward: tempReward,
      })
    );
    setIsEditMode(false);
  };

  const handleDelete = () => {
    dispatch(deleteChore(chore.id));
  };

  if (isEditMode) {
    return (
      <li key={chore.id}>
        <TextField
          label="Chore Name"
          value={tempChoreName}
          size="small"
          onChange={handleNameChange}
        />
        <TextField
          label="Reward"
          value={tempReward}
          size="small"
          onChange={handleRewardChange}
        />
        <IconButton aria-label="save" onClick={handleSave}>
          <SaveIcon />
        </IconButton>
        <IconButton aria-label="cancel edit" onClick={handleEditCancel}>
          <CancelIcon />
        </IconButton>
      </li>
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
