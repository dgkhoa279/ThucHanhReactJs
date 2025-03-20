
import { useReducer, useState } from "react";

function App() {
  const initialState = { result: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return { result: action.payload1 + action.payload2 };
      case "SUBTRACT":
        return { result: action.payload1 - action.payload2 };
      case "MULTIPLY":
        return { result: action.payload1 * action.payload2 };
      case "DIVIDE":
        return action.payload2 !== 0
          ? { result: action.payload1 / action.payload2 }
          : state;
      case "RESET":
        return initialState;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-lg text-center">
      <h1 className="text-2xl font-bold mb-4">Calculator with useReducer</h1>
      <p className="text-lg font-semibold">Result: {state.result}</p>
      <div className="flex gap-2 justify-center mt-4">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(Number(e.target.value))}
          className="border p-2 rounded"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(Number(e.target.value))}
          className="border p-2 rounded"
        />
      </div>
      <div className="flex gap-2 justify-center mt-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => dispatch({ type: "ADD", payload1: num1, payload2: num2 })}>
          +
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={() => dispatch({ type: "SUBTRACT", payload1: num1, payload2: num2 })}>
          -
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={() => dispatch({ type: "MULTIPLY", payload1: num1, payload2: num2 })}>
          *
        </button>
        <button className="px-4 py-2 bg-yellow-500 text-white rounded" onClick={() => dispatch({ type: "DIVIDE", payload1: num1, payload2: num2 })}>
          /
        </button>
        <button className="px-4 py-2 bg-gray-500 text-white rounded" onClick={() => dispatch({ type: "RESET" })}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App
