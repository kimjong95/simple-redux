import React from "react";
import { initialAnswerReducer } from "../words/redux/answerReducer";
import { initialQuestionReducer } from "../words/redux/questionReducer";
import { RootAction, RootState, rootReducer } from "../rootReducer";
import { createContext } from "react";

export type Dispatch<A> = (action: A) => void;

export const StoreContext = createContext<RootState | undefined>(undefined);
export const DispatchContext = createContext<Dispatch<RootAction>>(() => {
  //
});

const initialRootState = {
  question: initialQuestionReducer(),
  answer: initialAnswerReducer(),
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
