export enum ANSWER {
  CHANGE = "CHANGE",
}

export interface AnswerChangeAction {
  type: ANSWER.CHANGE;
  payload: string;
}

export type AnswerAction = AnswerChangeAction;

const changeAnswer = (value: string): AnswerAction => ({
  type: ANSWER.CHANGE,
  payload: value,
});

export { changeAnswer };
