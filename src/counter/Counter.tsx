import Count from "./Count";
import CounterButton from "./CountButton";

function Counter() {
  return (
    <>
      <div className="card">
        <Count />
        <CounterButton />
      </div>
    </>
  );
}

export default Counter;
