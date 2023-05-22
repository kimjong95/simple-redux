import "./App.css";
import { Provider } from "./example/provider";
import Answer from "./words/Answer";
import Question from "./words/Question";

function App() {
  //
  return (
    <Provider>
      {/* <Counter /> */}
      <div>
        <Question />
      </div>
      <div>
        <Answer />
      </div>
    </Provider>
    // <Provider store={store}>
    //   <div>
    //     <Question />
    //   </div>
    //   <div>
    //     <Answer />
    //   </div>
    // </Provider>
  );
}

export default App;
