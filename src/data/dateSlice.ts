import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface DateState {
  month: string;
  year: string;
}
const initialState: () => DateState = () => {
  const currentDate = new Date();
  const month = (currentDate.getMonth() + 1).toString();
  const year = currentDate.getFullYear().toString();

  return {
    month,
    year,
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
  },
});

export const { changeMonth, changeYear } = dateSlice.actions;

export const selectMonth = (state: RootState) => state.date.month;
export const selectYear = (state: RootState) => state.date.year;

export default dateSlice.reducer;
