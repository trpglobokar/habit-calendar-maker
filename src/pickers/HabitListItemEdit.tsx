import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { changeChore, createHabit } from "../data/dateSlice";
import { useAppDispatch } from "../data/hooks";
import { Chore, defaultHabit } from "../data/types";

import "./HabitListItemEdit.css";

interface HabitListItemEditProps {
  chore?: Chore;
  handleExitEdit: () => void;
}
const HabitListItemEdit: React.FunctionComponent<HabitListItemEditProps> = ({
  chore,
  handleExitEdit,
}) => {
  const dispatch = useAppDispatch();
  const { id, name, reward } = chore ? chore : defaultHabit;

  const [tempChoreName, setTempChoreName] = useState(name);
  const [tempReward, setTempReward] = useState(reward);

  const isNewItem = !chore;
  const isSaveDisabled = !tempChoreName || !tempReward;

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTempChoreName(event.currentTarget.value);
  };

  const handleRewardChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTempReward(event.currentTarget.value);
  };

  const handleEditCancel = () => {
    handleExitEdit();
  };

  const handleSave = isNewItem
    ? () => {
        dispatch(
          createHabit({
            name: tempChoreName,
            reward: tempReward,
          })
        );
        handleExitEdit();
      }
    : () => {
        dispatch(
          changeChore({
            id: id,
            name: tempChoreName,
            reward: tempReward,
          })
        );
        handleExitEdit();
      };

  return (
    <div key={id} className="EditWrapper">
      <TextField
        label="Habit Name"
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
      <div className="EditControlsWrapper">
        <Button
          variant="contained"
          onClick={handleSave}
          disabled={isSaveDisabled}
        >
          Save
        </Button>
        <Button variant="outlined" onClick={handleEditCancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default HabitListItemEdit;
