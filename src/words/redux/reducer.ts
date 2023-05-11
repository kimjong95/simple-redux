import { QUESTION, QuestionAction } from "./action";

export interface QuestionState {
  question: string;
}

export function initialQuestionReducer() {
  return {
    question: "",
  };
}

const questionReducer = (
  state: QuestionState = initialQuestionReducer(),
  action: QuestionAction
): QuestionState => {
  switch (action.type) {
    case QUESTION.SETTING:
      return { ...state, question: action.payload };
    case QUESTION.CLEAR:
      return { ...state, question: "" };
    default:
      return state;
  }
};

export { questionReducer };
