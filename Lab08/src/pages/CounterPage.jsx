"use client"

import { useDispatch, useSelector } from "react-redux"
import { increment, decrement } from "../features/counter/counterSlice"

function CounterPage() {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  return (
    <div className="p-4 border rounded-lg max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">🧩 Counter App</h1>
      <div className="text-6xl font-bold mb-6">{count}</div>
      <div className="flex justify-center gap-4">
        <button onClick={() => dispatch(decrement())} className="px-6 py-2 bg-red-500 text-white rounded-lg">
          Giảm
        </button>
        <button onClick={() => dispatch(increment())} className="px-6 py-2 bg-green-500 text-white rounded-lg">
          Tăng
        </button>
      </div>
    </div>
  )
}

export default CounterPage
