import "./App.css";
import store from "./redux/rootStore";
import Answer from "./words/Answer";
import Question from "./words/Question";
import { Provider } from "react-redux";

function App() {
  //
  return (
    <Provider store={store}>
      <div>
        <Question />
      </div>
      <div>
        <Answer />
      </div>
    </Provider>
  );
}

export default App;
