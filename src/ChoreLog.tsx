import React from "react";

import "./ChoreLog.css";

interface ChoreLogProps {
  title: string;
}
const ChoreLog: React.FunctionComponent<ChoreLogProps> = ({ title }) => {
  const logBubbles = [...Array(4)].map((_x) => <span className="LogBubble" />);

  return (
    <div className="ChoreLog">
      <span>{title}:</span>
      <span className="LogBubbles">{logBubbles}</span>
    </div>
  );
};

export default ChoreLog;
