"use client"

import { useDispatch, useSelector } from "react-redux"
import { toggleTheme } from "../features/theme/themeSlice"
import { useEffect } from "react"

function ThemePage() {
  const theme = useSelector((state) => state.theme.theme)
  const dispatch = useDispatch()

  useEffect(() => {
    // Apply theme to body
    document.body.className = theme
  }, [theme])

  return (
    <div
      className={`p-4 border rounded-lg max-w-md mx-auto ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"}`}
    >
      <h1 className="text-2xl font-bold mb-4">🔁 Toggle Theme</h1>

      <div className="flex flex-col items-center">
        <div className="text-xl mb-4">
          Current Theme: <span className="font-bold">{theme}</span>
        </div>

        <button
          onClick={() => dispatch(toggleTheme())}
          className={`px-6 py-3 rounded-lg ${theme === "dark" ? "bg-yellow-400 text-black" : "bg-gray-800 text-white"}`}
        >
          {theme === "dark" ? "☀️ Switch to Light Mode" : "🌙 Switch to Dark Mode"}
        </button>

        <div className="mt-8 p-4 border rounded-lg w-full">
          <h3 className="font-bold mb-2">Preview</h3>
          <p>This is how text looks in {theme} mode.</p>
        </div>
      </div>
    </div>
  )
}

export default ThemePage
