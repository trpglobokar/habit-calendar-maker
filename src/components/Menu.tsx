import React from "react";

import IconButton from "@mui/material/IconButton";

import PrintIcon from "@mui/icons-material/Print";

import "./Menu.css";

const Menu: React.FunctionComponent = () => {
  return (
    <div className="MenuWrapper">
      <div>Habit Calendar Maker</div>
      <IconButton
        aria-label="print"
        onClick={() => window.print()}
        sx={{ color: "#222" }}
      >
        <PrintIcon />
      </IconButton>
    </div>
  );
};

export default Menu;
