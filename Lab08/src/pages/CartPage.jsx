"use client"

import { useDispatch, useSelector } from "react-redux"
import { addItem, removeItem, updateQuantity } from "../features/cart/cartSlice"

// Sample products
const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Smartphone", price: 800 },
  { id: 3, name: "Headphones", price: 100 },
  { id: 4, name: "Mouse", price: 30 },
]

function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems)
  const dispatch = useDispatch()

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <div className="p-4 border rounded-lg max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📦 Giỏ hàng</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-bold mb-3">Sản phẩm</h2>
          <div className="grid gap-3">
            {products.map((product) => (
              <div key={product.id} className="flex justify-between items-center p-2 border rounded">
                <div>
                  <div className="font-bold">{product.name}</div>
                  <div>${product.price}</div>
                </div>
                <button onClick={() => dispatch(addItem(product))} className="px-3 py-1 bg-blue-500 text-white rounded">
                  Thêm vào giỏ
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-bold mb-3">Giỏ hàng của bạn</h2>
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Giỏ hàng trống</p>
          ) : (
            <div className="space-y-3">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center p-2 border rounded">
                  <div>
                    <div className="font-bold">{item.name}</div>
                    <div>
                      ${item.price} x {item.quantity}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() =>
                        dispatch(updateQuantity({ id: item.id, quantity: Math.max(1, item.quantity - 1) }))
                      }
                      className="px-2 py-1 bg-gray-200 rounded-l"
                    >
                      -
                    </button>
                    <span className="px-3">{item.quantity}</span>
                    <button
                      onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                      className="px-2 py-1 bg-gray-200 rounded-r"
                    >
                      +
                    </button>
                    <button
                      onClick={() => dispatch(removeItem(item.id))}
                      className="ml-2 px-2 py-1 bg-red-500 text-white rounded"
                    >
                      X
                    </button>
                  </div>
                </div>
              ))}

              <div className="mt-4 pt-4 border-t">
                <div className="flex justify-between font-bold">
                  <span>Tổng số lượng:</span>
                  <span>{totalItems} sản phẩm</span>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <span>Tổng tiền:</span>
                  <span>${totalPrice}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CartPage
