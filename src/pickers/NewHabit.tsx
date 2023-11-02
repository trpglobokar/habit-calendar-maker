import React, { useState } from "react";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import IconButton from "@mui/material/IconButton";

import HabitListItemEdit from "./HabitListItemEdit";

const NewHabit: React.FunctionComponent = () => {
  const [isCreateMode, setIsCreateMode] = useState(false);

  if (isCreateMode) {
    return <HabitListItemEdit handleExitEdit={() => setIsCreateMode(false)} />;
  }

  return (
    <IconButton aria-label="edit" onClick={() => setIsCreateMode(true)}>
      <AddCircleOutlineIcon />
    </IconButton>
  );
};

export default NewHabit;
