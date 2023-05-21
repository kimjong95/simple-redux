import { AnswerState } from "./../words/redux/answerReducer";
import { QuestionState } from "./../words/redux/questionReducer";
import { combineReducers, createStore } from "redux";
import { answerReducer } from "../words/redux/answerReducer";
import { questionReducer } from "../words/redux/questionReducer";

export interface RootState {
  question: QuestionState;
  answer: AnswerState;
}

const rootReducer = combineReducers<RootState>({
  answer: answerReducer,
  question: questionReducer,
});

const store = createStore(rootReducer);

export default store;
