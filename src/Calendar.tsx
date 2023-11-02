import React from "react";

import { selectMonth, selectYear } from "./data/dateSlice";
import { useAppSelector } from "./data/hooks";
import Day from "./Day";
import HabitList from "./pickers/HabitList";
import PickerMonth from "./pickers/PickerMonth";
import PickerYear from "./pickers/PickerYear";
import { generateMonthInfo } from "./utils/utils";

import "./Calendar.css";

const Calendar: React.FunctionComponent = () => {
  const selectedMonth = useAppSelector(selectMonth);
  const selectedYear = useAppSelector(selectYear);

  const { monthName, weekdayOfMonthStart, daysInMonth } = generateMonthInfo(
    selectedMonth,
    selectedYear
  );

  const maxDays: number = 42;

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
        {monthName} {selectedYear} - Habit Tracker
      </h1>
      <div className="CalendarLabels">{Labels}</div>
      <div className="Calendar">{Weeks}</div>
      <HabitList />
      <div className="Pickers">
        <PickerMonth />
        <PickerYear />
      </div>
    </div>
  );
};

export default Calendar;
