import { createStore } from "redux";
import { composeWithDevTools, devToolsEnhancer } from "redux-devtools-extension";
import counterReducer from "./counter/counterReducer";


const store = createStore(counterReducer, devToolsEnhancer());

export default store;