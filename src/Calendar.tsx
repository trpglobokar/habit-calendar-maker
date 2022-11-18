import React from "react";

import { useAppSelector } from "./data/hooks";
import { selectMonth, selectYear } from "./data/dateSlice";

import Day from "./Day";
import PickerMonth from "./PickerMonth";
import PickerYear from "./PickerYear";

import "./Calendar.css";
import { generateMonthInfo } from "./utils/utils";

const Calendar: React.FunctionComponent = () => {
  const selectedMonth = useAppSelector(selectMonth);
  const selectedYear = useAppSelector(selectYear);

  const { monthName, weekdayOfMonthStart, daysInMonth } = generateMonthInfo(
    selectedMonth,
    selectedYear
  );

  const maxDays: Number = 42;

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
      currentPrintedDay >= weekdayOfMonthStart &&
      currentPrintedDay < daysInMonth + weekdayOfMonthStart;
    if (!isPrintingDates) {
      tempWeek.push(<Day />);
    } else {
      tempWeek.push(<Day date={currentMonthDay} />);
      currentMonthDay++;
    }

    if (currentPrintedDay % 7 === 0) {
      Weeks.push(<div className="Week">{tempWeek}</div>);
      tempWeek = [];
      if (currentPrintedDay + 1 >= daysInMonth + weekdayOfMonthStart) {
        break;
      }
    }
  }

  const Labels = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"].map(
    (weekdayName) => <div className="CalendarLabel">{weekdayName}</div>
  );

  return (
    <div className="CalendarWrapper">
      <h1>
        {monthName} {selectedYear}
      </h1>
      <div className="CalendarLabels">{Labels}</div>
      <div className="Calendar">{Weeks}</div>
      <div className="ChoreSalaries">
        <div className="ChoreSalary">Writing: $0.05/15min</div>
        <div className="ChoreSalary">Exercise: $0.25/15min</div>
        <div className="ChoreSalary">Cleaning: $0.25/15min</div>
      </div>
      <div className="Pickers">
        <PickerMonth />
        <PickerYear />
      </div>
    </div>
  );
};

export default Calendar;
