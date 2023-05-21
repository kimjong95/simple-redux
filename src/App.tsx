import { Provider } from "react-redux";
import "./App.css";
import Answer from "./words/Answer";
import Question from "./words/Question";
import store from "./redux/rootStore";

function App() {
  //
  return (
    // <SimpleProvider>
    //   {/* <Counter /> */}
    //   <div>
    //     <Question />
    //   </div>
    //   <div>
    //     <Answer />
    //   </div>
    // </SimpleProvider>
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
