import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { RootState } from "./store";
import { Chore } from "./types";

export interface DateState {
  month: string;
  year: string;
  chores: Chore[];
}
const initialState: () => DateState = () => {
  const currentDate = new Date();
  const month = (currentDate.getMonth() + 1).toString();
  const year = currentDate.getFullYear().toString();

  const defaultChores = [
    { id: uuidv4(), name: "Exercise", reward: "$0.25/15min" },
    { id: uuidv4(), name: "Cleaning", reward: "$0.25/15min" },
  ];

  return {
    month,
    year,
    chores: defaultChores,
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
    changeChore: (state, action: PayloadAction<Chore>) => {
      state.chores = state.chores.map((chore) =>
        action.payload.id !== chore.id ? chore : action.payload
      );
    },
    createHabit: (
      state,
      action: PayloadAction<Pick<Chore, "name" | "reward">>
    ) => {
      const newHabit = {
        id: uuidv4(),
        name: action.payload.name,
        reward: action.payload.reward,
      };
      state.chores = state.chores.concat([newHabit]);
    },
    deleteChore: (state, action: PayloadAction<string>) => {
      state.chores = state.chores.filter(
        (chore) => action.payload !== chore.id
      );
    },
  },
});

export const {
  changeChore,
  changeMonth,
  changeYear,
  createHabit,
  deleteChore,
} = dateSlice.actions;

export const selectMonth = (state: RootState) => state.date.month;
export const selectYear = (state: RootState) => state.date.year;
export const selectChores = (state: RootState) => state.date.chores;

export default dateSlice.reducer;
