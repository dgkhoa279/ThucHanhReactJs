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
// import { useState } from 'react';
// import { Provider, useDispatch, useSelector } from 'react-redux';
// import store from './store'

// function Calculator() {
//   const [a, setA] = useState('');
//   const [b, setB] = useState('');
//   const dispatch = useDispatch();
//   const result = useSelector((state) => state.result);

//   return (
//     <div className="p-4">
//       <h1 className="text-xl mb-2">Redux Calculator</h1>
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
//       <h2 className="mt-4">Result: {result}</h2>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <Provider store={store}>
//       <Calculator />
//     </Provider>
//   );
// }

// Redux toolkit
// import { useState } from 'react';
// import { Provider, useDispatch, useSelector } from 'react-redux';
// import { store } from './store';
// import { add, subtract } from './features/calculatorSlice';

// function Calculator() {
//   const [a, setA] = useState('');
//   const [b, setB] = useState('');
//   const dispatch = useDispatch();
//   const result = useSelector((state) => state.calculator.result);

//   return (
//     <div className="p-4">
//       <h1 className="text-xl mb-2">Redux Toolkit Calculator</h1>
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
//         <button onClick={() => dispatch(add({ a, b }))}>+</button>
//         <button onClick={() => dispatch(subtract({ a, b }))}>-</button>
//       </div>
//       <h2 className="mt-4">Result: {result}</h2>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <Provider store={store}>
//       <Calculator />
//     </Provider>
//   );
// }

// src/App.jsx
import { Routes, Route, Link, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import CounterPage from "./pages/CounterPage"
import TodoPage from "./pages/TodoPage"
import ThemePage from "./pages/ThemePage"
import CartPage from "./pages/CartPage"
import AuthPage from "./pages/AuthPage"

function App() {
  const location = useLocation()
  const theme = useSelector((state) => state.theme.theme)

  return (
    <div className={`p-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
      <nav className="flex flex-wrap justify-center gap-2 mb-6">
        <NavLink to="/" current={location.pathname}>
          Counter
        </NavLink>
        <NavLink to="/todo" current={location.pathname}>
          Todo
        </NavLink>
        <NavLink to="/theme" current={location.pathname}>
          Theme
        </NavLink>
        <NavLink to="/cart" current={location.pathname}>
          Cart
        </NavLink>
        <NavLink to="/auth" current={location.pathname}>
          Auth
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<CounterPage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/theme" element={<ThemePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </div>
  )
}

function NavLink({ to, children, current }) {
  const isActive = current === to
  return (
    <Link
      to={to}
      className={`px-4 py-2 rounded-lg transition-colors ${
        isActive ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
      }`}
    >
      {children}
    </Link>
  )
}

export default App


