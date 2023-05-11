import { combineReducers } from "./redux_module/simple.combineReducers";
import { createStore } from "./redux_module/simple.store";
import { QuestionAction } from "./words/redux/action";
import { QuestionState, questionReducer } from "./words/redux/reducer";

export interface RootState {
  question: QuestionState;
}
export type RootAction = QuestionAction;

export const rootReducer = combineReducers<RootState, RootAction>({
  question: questionReducer,
});
