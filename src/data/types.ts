/* eslint-disable no-unused-vars */
export interface Month {
  name: string;
  daysInMonth: number;
}

export interface Habit {
  id: string;
  name: string;
  reward: string;
}

export enum monthsEnum {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

export const defaultHabit = { id: "temp", name: "", reward: "" };
