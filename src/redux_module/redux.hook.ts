import { useContext, Dispatch } from "react";
import { RootAction, RootState } from "../rootReducer";
import { DispatchContext, StoreContext } from "./provider";

export const useSelector = (): RootState => {
  const state = useContext(StoreContext);
  if (state == null) {
    throw new Error("useSelector must be used within a StoreProvider");
  }
  return state;
};

export const useDispatch = (): Dispatch<RootAction> => {
  const dispatch = useContext(DispatchContext);
  if (dispatch == null) {
    throw new Error("useDispatch must be used within a StoreProvider");
  }
  return dispatch;
};
