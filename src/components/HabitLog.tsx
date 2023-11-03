import React from "react";

import "./HabitLog.css";

interface HabitLogProps {
  title: string;
}
const HabitLog: React.FunctionComponent<HabitLogProps> = ({ title }) => {
  const logBubbles = [...Array(4)].map((_x) => <span className="LogBubble" />);

  return (
    <div className="HabitLog">
      <span>{title}:</span>
      <span className="LogBubbles">{logBubbles}</span>
    </div>
  );
};

export default HabitLog;
