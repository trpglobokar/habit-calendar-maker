type GenerateMonthInfo = (
  selectedMonth: string,
  selectedYear: string
) => {
  monthName: string;
  weekdayOfMonthStart: number;
  daysInMonth: number;
};
export const generateMonthInfo: GenerateMonthInfo = (
  selectedMonth,
  selectedYear
) => {
  const selectedMonthFirstDay = new Date(
    selectedYear + "-" + selectedMonth + "-1"
  );
  const nextMonthIndex = parseInt(selectedMonth) % 12;
  const nextMonthYear =
    nextMonthIndex === 0 ? parseInt(selectedYear) + 1 : parseInt(selectedYear);
  let nextMonthFirstDay = new Date(nextMonthYear, nextMonthIndex, 1);

  const ONE_DAY = 1000 * 60 * 60 * 24;
  const d1 = selectedMonthFirstDay.getTime();
  const d2 = nextMonthFirstDay.getTime();
  const diff = Math.abs(d1 - d2);

  return {
    monthName: selectedMonthFirstDay.toLocaleString("en-US", { month: "long" }),
    weekdayOfMonthStart: selectedMonthFirstDay.getDay() + 1,
    daysInMonth: Math.round(diff / ONE_DAY),
  };
};
