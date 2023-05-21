import { useState } from "react";
import { clearQuestion, setQuestion } from "./redux/question.action";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../rootReducer";

export default function Question() {
  //
  const question = useSelector((state: RootState) => state.question);
  const dispatch = useDispatch();

  const [words, setWords] = useState("");

  const onChangeQuestionWords = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWords(e.target.value);
  };

  const onClickSetting = () => {
    dispatch(setQuestion(words));
  };

  const onClickClear = () => {
    dispatch(clearQuestion());
  };

  return (
    <div className="question-container">
      <input onChange={onChangeQuestionWords} value={words} />
      <button onClick={onClickSetting}>입력</button>
      <button onClick={onClickClear}>리셋</button>
      <text>{question.question}</text>
    </div>
  );
}
