import React from "react";

import { useAppSelector } from "./data/hooks";
import { selectMonth, selectYear, selectChores } from "./data/dateSlice";

import Day from "./Day";
import PickerMonth from "./pickers/PickerMonth";
import PickerYear from "./pickers/PickerYear";

import "./Calendar.css";
import { generateMonthInfo } from "./utils/utils";
import ChoreListItem from "./pickers/ChoreListItem";

const Calendar: React.FunctionComponent = () => {
  const selectedMonth = useAppSelector(selectMonth);
  const selectedYear = useAppSelector(selectYear);
  const chores = useAppSelector(selectChores);

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

  const choreSalaries = chores.map((chore) => (
    <div className="ChoreSalary">
      <ChoreListItem key={chore.id} chore={chore} />
    </div>
  ));

  return (
    <div className="CalendarWrapper">
      <h1>
        {monthName} {selectedYear} - Habit Tracker
      </h1>
      <div className="CalendarLabels">{Labels}</div>
      <div className="Calendar">{Weeks}</div>
      <div className="ChoreSalaries">{choreSalaries}</div>
      <div className="Pickers">
        <PickerMonth />
        <PickerYear />
      </div>
    </div>
  );
};

export default Calendar;
