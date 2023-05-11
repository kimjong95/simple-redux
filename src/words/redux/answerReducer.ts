import { RootAction } from "../../rootReducer";
import { ANSWER, AnswerAction } from "./answer.action";
import { initialQuestionReducer } from "./questionReducer";

export interface AnswerState {
  answer: string;
}

export function iniitialAnswerReducer() {
  return {
    answer: "",
  };
}

const answerReducer = (
  state: AnswerState = iniitialAnswerReducer(),
  action: RootAction
): AnswerState => {
  if (isAnswerAction(action)) {
    switch (action.type) {
      case ANSWER.CHANGE:
        return { ...state, answer: action.payload };
      default:
        return state;
    }
  }
  return state;
};

function isAnswerAction(action: RootAction): action is AnswerAction {
  return action.type === ANSWER.CHANGE;
}

export { answerReducer };
