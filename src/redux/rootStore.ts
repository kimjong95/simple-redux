import { combineReducers, createStore } from "redux";
import { AnswerState } from "./../words/redux/answerReducer";
import { QuestionState } from "./../words/redux/questionReducer";
import { answerReducer } from "../words/redux/answerReducer";
import { questionReducer } from "../words/redux/questionReducer";
import { RootAction } from "../rootReducer";

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
