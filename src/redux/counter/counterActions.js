import { COUNTER_DECREMENT, COUNTER_INCREMENT, COUNTER_RESET } from "./counterConstants";

export const counterDecrementAction = (value) => {
  return {
    type: COUNTER_DECREMENT,
    payload: value,
  };
};

export const counterIncrementAction = (value) => ({
  type: COUNTER_INCREMENT,
  payload: value,
});

export const counterResetAction = () => ({
  type: COUNTER_RESET,
});
