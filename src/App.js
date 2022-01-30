import logo from "./logo.svg";
import "./App.css";
import CounterContainer from "./Components/CounterContainer";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CounterContainer />
      </div>
    </Provider>
  );
}

export default App;
