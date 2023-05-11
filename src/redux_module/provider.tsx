// store.ts
import React, { createContext } from "react";
import { RootState, RootAction, rootReducer } from "../rootReducer";
import { initialQuestionReducer } from "../words/redux/questionReducer";
import { iniitialAnswerReducer } from "../words/redux/answerReducer";

export type Dispatch<A> = (action: A) => void;

export const StoreContext = createContext<RootState | undefined>(undefined);
export const DispatchContext = createContext<Dispatch<RootAction>>(() => {
  //
});

const initialRootState = {
  question: initialQuestionReducer(),
  answer: iniitialAnswerReducer(),
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
