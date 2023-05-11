import { useContext, Dispatch } from "react";
import { RootAction, RootState } from "../rootReducer";
import { DispatchContext, StoreContext } from "./provider";

export const useStoreState = (): RootState => {
  const state = useContext(StoreContext);
  if (state == null) {
    throw new Error("useStoreState must be used within a StoreProvider");
  }
  return state;
};

export const useStoreDispatch = (): Dispatch<RootAction> => {
  const dispatch = useContext(DispatchContext);
  if (dispatch == null) {
    throw new Error("useStoreDispatch must be used within a StoreProvider");
  }
  return dispatch;
};
