import React, { createContext } from "react";
import { RootState, RootAction, rootReducer } from "../rootReducer";
import store from "../rootStore";

export type Dispatch<A> = (action: A) => void;

export const StoreContext = createContext<RootState | undefined>(
  store.getState()
);
export const DispatchContext = createContext<Dispatch<RootAction>>(() => {
  //
});

interface ProviderProps {
  children: React.ReactNode;
}

export function Provider({ children }: ProviderProps) {
  //
  const [rootStore, dispatch] = React.useReducer(rootReducer, store.getState());

  return (
    <DispatchContext.Provider value={dispatch}>
      <StoreContext.Provider value={rootStore}>
        {children}
      </StoreContext.Provider>
    </DispatchContext.Provider>
  );
}
