import { DECREMENT, INCREMENT } from "./counterTypes";

export const decrement = (number) => {
  return {
    type: DECREMENT,
    payload: number
  };
};

export const increment = (number) => {
  return {
    type: INCREMENT,
    payload: number
  };
};
