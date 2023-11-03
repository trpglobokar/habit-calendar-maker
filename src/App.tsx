import React from "react";

import Calendar from "./components/Calendar";
import Menu from "./components/Menu";

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
