"use client"

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, toggleTodo, removeTodo } from "../features/todos/todoSlice"

function TodoPage() {
  const [newTodo, setNewTodo] = useState("")
  const todos = useSelector((state) => state.todos.todos)
  const dispatch = useDispatch()

  const handleAddTodo = (e) => {
    e.preventDefault()
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo))
      setNewTodo("")
    }
  }

  return (
    <div className="p-4 border rounded-lg max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">📋 To-do List</h1>

      <form onSubmit={handleAddTodo} className="mb-4 flex">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Thêm công việc mới..."
          className="flex-1 px-3 py-2 border rounded-l-lg"
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-r-lg">
          Thêm
        </button>
      </form>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center justify-between p-3 border rounded-lg">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
                className="mr-3 h-5 w-5"
              />
              <span className={todo.completed ? "line-through text-gray-500" : ""}>{todo.text}</span>
            </div>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="px-2 py-1 bg-red-500 text-white rounded-lg"
            >
              Xoá
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && <p className="text-center text-gray-500 mt-4">Chưa có công việc nào</p>}
    </div>
  )
}

export default TodoPage
