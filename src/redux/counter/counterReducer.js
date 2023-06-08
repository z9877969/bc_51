import {
  COUNTER_DECREMENT,
  COUNTER_INCREMENT,
  COUNTER_RESET,
} from "./counterConstants";

const initialState = 150;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_DECREMENT:
      return state - action.payload;
    case COUNTER_INCREMENT:
      return state + action.payload;
    case COUNTER_RESET:
      return initialState;
    default:
      return state;
  }
};

export default counterReducer;
