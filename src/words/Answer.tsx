import { useDispatch, useSelector } from "react-redux";
import { changeAnswer } from "./redux/answer.action";
import { RootState } from "../rootReducer";

export default function Answer() {
  //
  const answer = useSelector((state: RootState) => state.answer);
  const question = useSelector((state: RootState) => state.question);
  const dispatch = useDispatch();

  const onChangeQuestionWords = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeAnswer(e.target.value));
  };

  return (
    <div className="answer-container">
      <input onChange={onChangeQuestionWords} value={answer.answer} />
      <text>{answer.answer}</text>
      {question.question !== "" && (
        <text>
          {answer.answer == question.question ? "정답입니다" : "오답입니다"}
        </text>
      )}
    </div>
  );
}
