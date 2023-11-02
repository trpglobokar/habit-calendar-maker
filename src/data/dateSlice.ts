import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { RootState } from "./store";
import { Habit } from "./types";

export interface DateState {
  month: string;
  year: string;
  habits: Habit[];
}
const initialState: () => DateState = () => {
  const currentDate = new Date();
  const month = (currentDate.getMonth() + 1).toString();
  const year = currentDate.getFullYear().toString();

  const defaultHabits = [
    { id: uuidv4(), name: "Exercise", reward: "$0.25/15min" },
    { id: uuidv4(), name: "Cleaning", reward: "$0.25/15min" },
  ];

  return {
    month,
    year,
    habits: defaultHabits,
  };
};

export const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    changeMonth: (state, action: PayloadAction<string>) => {
      state.month = action.payload;
    },
    changeYear: (state, action: PayloadAction<string>) => {
      state.year = action.payload;
    },
    changeHabit: (state, action: PayloadAction<Habit>) => {
      state.habits = state.habits.map((habit) =>
        action.payload.id !== habit.id ? habit : action.payload
      );
    },
    createHabit: (
      state,
      action: PayloadAction<Pick<Habit, "name" | "reward">>
    ) => {
      const newHabit = {
        id: uuidv4(),
        name: action.payload.name,
        reward: action.payload.reward,
      };
      state.habits = state.habits.concat([newHabit]);
    },
    deleteHabit: (state, action: PayloadAction<string>) => {
      state.habits = state.habits.filter(
        (habit) => action.payload !== habit.id
      );
    },
  },
});

export const {
  changeHabit,
  changeMonth,
  changeYear,
  createHabit,
  deleteHabit,
} = dateSlice.actions;

export const selectMonth = (state: RootState) => state.date.month;
export const selectYear = (state: RootState) => state.date.year;
export const selectHabits = (state: RootState) => state.date.habits;

export default dateSlice.reducer;
