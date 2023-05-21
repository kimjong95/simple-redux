export enum QUESTION {
  SETTING = "SETTING",
  CLEAR = "CLEAR",
}

export interface QustionSettingAction {
  type: QUESTION.SETTING;
  payload: string;
}

export interface QustionClearAction {
  type: QUESTION.CLEAR;
}

export type QuestionAction = QustionSettingAction | QustionClearAction;

const setQuestion = (value: string): QustionSettingAction => ({
  type: QUESTION.SETTING,
  payload: value,
});

const clearQuestion = (): QustionClearAction => ({
  type: QUESTION.CLEAR,
});

export { setQuestion, clearQuestion };
