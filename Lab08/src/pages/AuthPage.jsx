"use client"

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login, logout, setUserInfo } from "../features/auth/authSlice"

function AuthPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { user, isLoggedIn } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const handleLogin = (e) => {
    e.preventDefault()
    if (username && password) {
      dispatch(login({ username, id: Date.now() }))
    }
  }

  const handleUpdateProfile = (e) => {
    e.preventDefault()
    if (username) {
      dispatch(setUserInfo({ username }))
    }
  }

  return (
    <div className="p-4 border rounded-lg max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">🎯 Quản lý user đăng nhập</h1>

      {isLoggedIn ? (
        <div className="space-y-4">
          <div className="p-4 bg-green-100 rounded-lg">
            <h2 className="text-xl font-bold text-green-800">Chào mừng, {user.username}!</h2>
            <p className="text-green-700">Bạn đã đăng nhập thành công.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-bold mb-2">Cập nhật thông tin</h3>
            <form onSubmit={handleUpdateProfile} className="space-y-3">
              <div>
                <label className="block mb-1">Tên người dùng</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Nhập tên mới"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded">
                Cập nhật
              </button>
            </form>
          </div>

          <button onClick={() => dispatch(logout())} className="w-full px-4 py-2 bg-red-500 text-white rounded">
            Đăng xuất
          </button>
        </div>
      ) : (
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1">Tên đăng nhập</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Nhập tên đăng nhập"
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Mật khẩu</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nhập mật khẩu"
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded">
            Đăng nhập
          </button>
        </form>
      )}
    </div>
  )
}

export default AuthPage
