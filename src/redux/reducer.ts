import { COUNTER, CounterAction } from "./action";

export interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

const counterReducer = (
  state: CounterState = initialState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case COUNTER.INCREMENT:
      return { ...state, count: state.count + 1 };
    case COUNTER.DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export { counterReducer };
