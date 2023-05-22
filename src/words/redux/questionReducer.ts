import { RootAction } from "../../rootReducer";
import { QUESTION, QuestionAction } from "./question.action";

export interface QuestionState {
  question: string;
}

export function initialQuestionReducer(): QuestionState {
  return {
    question: "",
  };
}

const questionReducer = (
  state: QuestionState = initialQuestionReducer(),
  action: RootAction
): QuestionState => {
  if (isQusetionAction(action)) {
    console.log(action);

    switch (action.type) {
      case QUESTION.SETTING:
        return { ...state, question: action.payload };
      case QUESTION.CLEAR:
        return { ...state, question: "" };
      default:
        return state;
    }
  }
  return state;
};

function isQusetionAction(action: RootAction): action is QuestionAction {
  return action.type === QUESTION.SETTING || action.type === QUESTION.CLEAR;
}

export { questionReducer };
