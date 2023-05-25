import { combineReducers } from "./redux_module/combineReducers";
import { createStore } from "./redux_module/store";
import { RootAction } from "./rootReducer";
import { AnswerState, answerReducer } from "./words/redux/answerReducer";
import { QuestionState, questionReducer } from "./words/redux/questionReducer";

/// rootStore.ts
export interface RootState {
  question: QuestionState;
  answer: AnswerState;
}

const rootReducer = combineReducers<RootState, RootAction>({
  answer: answerReducer,
  question: questionReducer,
});

const store = createStore(rootReducer);

export default store;
