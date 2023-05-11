// store.ts
import React, { createContext } from "react";
import { RootState, RootAction, rootReducer } from "../rootReducer";
import { initialQuestionReducer } from "../words/redux/reducer";

export type Dispatch<A> = (action: A) => void;

export const StoreContext = createContext<RootState | undefined>(undefined);
export const DispatchContext = createContext<Dispatch<RootAction>>(() => {
  //
});

const initialRootState = {
  question: initialQuestionReducer(),
};

interface ProviderProps {
  children: React.ReactNode;
}

export function Provider({ children }: ProviderProps) {
  //
  const [store, dispatch] = React.useReducer(rootReducer, initialRootState);
  return (
    <DispatchContext.Provider value={dispatch}>
      <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    </DispatchContext.Provider>
  );
}
