import React from "react";
import Day from "./Day";

import "./Calendar.css";

const Calendar: React.FunctionComponent = () => {
  const maxDays: Number = 35;
  const daysInMonth = 30;
  const weekdayOnMonthStart = 3;

  let tempWeek = [];
  let Weeks = [];

  let isPrintingDates: Boolean = false;
  let currentMonthDay = 1;
  for (
    let currentPrintedDay = 1;
    currentPrintedDay <= maxDays;
    currentPrintedDay++
  ) {
    isPrintingDates =
      currentPrintedDay >= weekdayOnMonthStart &&
      currentPrintedDay < daysInMonth + weekdayOnMonthStart;
    if (!isPrintingDates) {
      tempWeek.push(<Day />);
    } else {
      tempWeek.push(<Day date={currentMonthDay} />);
      currentMonthDay++;
    }

    if (currentPrintedDay % 7 === 0) {
      Weeks.push(<div className="Week">{tempWeek}</div>);
      tempWeek = [];
    }
  }

  const Labels = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"].map(
    (weekdayName) => <div className="CalendarLabel">{weekdayName}</div>
  );

  return (
    <div className="CalendarWrapper">
      <h1>November 2022</h1>
      <div className="CalendarLabels">{Labels}</div>
      <div className="Calendar">{Weeks}</div>
      <div className="ChoreSalaries">
        <div className="ChoreSalary">Writing: $0.05/15min</div>
        <div className="ChoreSalary">Exercise: $0.25/15min</div>
        <div className="ChoreSalary">Cleaning: $0.25/15min</div>
      </div>
    </div>
  );
};

export default Calendar;
