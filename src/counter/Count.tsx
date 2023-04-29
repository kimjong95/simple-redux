import { useContext } from "react";
import { CounterStateContext } from "../redux_module/simple.provider";

function Count() {
  //
  const counterStore = useContext(CounterStateContext);

  return <p>count is {counterStore.count}</p>;
}

export default Count;
