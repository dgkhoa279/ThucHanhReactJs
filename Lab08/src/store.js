import { createStore } from 'redux';

const initialState = { result: 0 };

function calculatorReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD':
      return { result: action.a + action.b };
    case 'SUBTRACT':
      return { result: action.a - action.b };
    default:
      return state;
  }
}

const store = createStore(calculatorReducer);
export default store;
