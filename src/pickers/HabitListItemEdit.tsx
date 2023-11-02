import React, { useState } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { changeHabit, createHabit } from "../data/dateSlice";
import { useAppDispatch } from "../data/hooks";
import { Habit, defaultHabit } from "../data/types";

import "./HabitListItemEdit.css";

interface HabitListItemEditProps {
  habit?: Habit;
  handleExitEdit: () => void;
}
const HabitListItemEdit: React.FunctionComponent<HabitListItemEditProps> = ({
  habit,
  handleExitEdit,
}) => {
  const dispatch = useAppDispatch();
  const { id, name, reward } = habit ? habit : defaultHabit;

  const [tempHabitName, setTempHabitName] = useState(name);
  const [tempReward, setTempReward] = useState(reward);

  const isNewItem = !habit;
  const isSaveDisabled = !tempHabitName || !tempReward;

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTempHabitName(event.currentTarget.value);
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
            name: tempHabitName,
            reward: tempReward,
          })
        );
        handleExitEdit();
      }
    : () => {
        dispatch(
          changeHabit({
            id: id,
            name: tempHabitName,
            reward: tempReward,
          })
        );
        handleExitEdit();
      };

  return (
    <div key={id} className="EditWrapper">
      <TextField
        label="Habit Name"
        value={tempHabitName}
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
