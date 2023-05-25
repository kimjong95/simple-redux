import { useState } from "react";
import { useDispatch, useSelector } from "../redux_module/redux.hook";
import { clearQustion, setQuestion } from "./redux/question.action";

export default function Question() {
  //
  const { question } = useSelector();
  const dispatch = useDispatch();
  const [words, setWords] = useState("");

  const onChangeQuestionWords = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWords(e.target.value);
  };

  const onClickSetting = () => {
    dispatch(setQuestion(words));
  };

  const onClickClear = () => {
    dispatch(clearQustion());
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
