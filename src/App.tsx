import React from "react";

import Calendar from "./Calendar";
import Menu from "./Menu";

import "./App.css";

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <Menu />
      <Calendar />
    </div>
  );
};

export default App;
