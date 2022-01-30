import { DECREMENT, INCREMENT } from "./counterTypes";

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case DECREMENT:
      return {
        ...state,
        count: state.count > 0 ? state.count - action.payload : state.count,
      };  
    case INCREMENT:
      return {
        ...state,
        count: state.count + Number(action.payload),
      };
    default:
      return state;
  }
};
export default counterReducer;
