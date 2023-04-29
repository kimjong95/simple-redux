import "./App.css";
import Counter from "./counter/Counter";
import { CounterProvider } from "./redux_module/simple.provider";

//
function App() {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
}

export default App;
