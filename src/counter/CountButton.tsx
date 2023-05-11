import { useContext } from "react";
import { CounterDispatchContext } from "../redux_module/simple.provider";
import { increment } from "../redux/action";

function CounterButton() {
  //
  const counterDispatch = useContext(CounterDispatchContext);

  return <button onClick={() => counterDispatch(increment())}>Click</button>;
}

export default CounterButton;
