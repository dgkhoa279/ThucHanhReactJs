// UseReducer
// import { useReducer, useState } from 'react';

// const initialState = { result: 0 };

// function reducer(state, action) {
//   switch (action.type) {
//     case 'ADD':
//       return { result: action.a + action.b };
//     case 'SUBTRACT':
//       return { result: action.a - action.b };
//     default:
//       return state;
//   }
// }

// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const [a, setA] = useState('');
//   const [b, setB] = useState('');

//   return (
//     <div className="p-4">
//       <h1 className="text-xl mb-2">useReducer Calculator</h1>
//       <input
//         type="number"
//         value={a}
//         onChange={(e) => setA(Number(e.target.value))}
//         placeholder="a"
//         className="border px-2 py-1 mr-2"
//       />
//       <input
//         type="number"
//         value={b}
//         onChange={(e) => setB(Number(e.target.value))}
//         placeholder="b"
//         className="border px-2 py-1 mr-2"
//       />
//       <div className="mt-2">
//         <button onClick={() => dispatch({ type: 'ADD', a, b })}>+</button>
//         <button onClick={() => dispatch({ type: 'SUBTRACT', a, b })}>-</button>
//       </div>
//       <h2 className="mt-4">Result: {state.result}</h2>
//     </div>
//   );
// }

// export default App;


// Redux 
import { useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './store'

function Calculator() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const dispatch = useDispatch();
  const result = useSelector((state) => state.result);

  return (
    <div className="p-4">
      <h1 className="text-xl mb-2">Redux Calculator</h1>
      <input
        type="number"
        value={a}
        onChange={(e) => setA(Number(e.target.value))}
        placeholder="a"
        className="border px-2 py-1 mr-2"
      />
      <input
        type="number"
        value={b}
        onChange={(e) => setB(Number(e.target.value))}
        placeholder="b"
        className="border px-2 py-1 mr-2"
      />
      <div className="mt-2">
        <button onClick={() => dispatch({ type: 'ADD', a, b })}>+</button>
        <button onClick={() => dispatch({ type: 'SUBTRACT', a, b })}>-</button>
      </div>
      <h2 className="mt-4">Result: {result}</h2>
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <Calculator />
    </Provider>
  );
}

