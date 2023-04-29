export enum COUNTER {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
}

export interface IncrementAction {
  type: COUNTER.INCREMENT;
}

export interface DecrementAction {
  type: COUNTER.DECREMENT;
}

export type CounterAction = IncrementAction | DecrementAction;

const increment = (): IncrementAction => ({
  type: COUNTER.INCREMENT,
});

const decrement = (): DecrementAction => ({
  type: COUNTER.DECREMENT,
});

export { increment, decrement };
