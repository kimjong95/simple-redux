import { combineReducers } from "./redux_module/combineReducers";
import { AnswerAction } from "./words/redux/answer.action";
import { AnswerState, answerReducer } from "./words/redux/answerReducer";
import { QuestionAction } from "./words/redux/question.action";
import { QuestionState, questionReducer } from "./words/redux/questionReducer";

export interface RootState {
  question: QuestionState;
  answer: AnswerState;
}
export type RootAction = QuestionAction | AnswerAction;

export const rootReducer = combineReducers<RootState, RootAction>({
  question: questionReducer,
  answer: answerReducer,
});
