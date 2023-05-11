import "./App.css";
import { Provider } from "./redux_module/provider";
import Question from "./words/Question";

function App() {
  //
  return (
    <Provider>
      {/* <Counter /> */}
      <Question />
    </Provider>
  );
}

export default App;
