// store.ts
import React, { createContext } from "react";
import { createStore } from "./simple.store";
import { CounterAction } from "../counter/redux/action";
import { counterReducer } from "../counter/redux/reducer";

type Dispatch<A> = (action: A) => void;

export const store = createStore(counterReducer);

export const CounterStateContext = createContext(store.getState());
export const CounterDispatchContext = createContext<Dispatch<CounterAction>>(
  () => {
    //
  }
);

interface CounterProvider {
  children: React.ReactElement | React.ReactElement[];
}

export function CounterProvider({ children }: CounterProvider) {
  const [state, dispatch] = React.useReducer(counterReducer, store.getState());

  return (
    <CounterStateContext.Provider value={state}>
      <CounterDispatchContext.Provider value={dispatch}>
        {children}
      </CounterDispatchContext.Provider>
    </CounterStateContext.Provider>
  );
}
