"use client";

import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Your cart is empty 🛒</p>
      </div>
    );
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b pb-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-gray-500">${item.price}</p>
                <p className="text-sm">Qty: {item.quantity}</p>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* ✅ Total + Clear Cart */}
      <div className="flex items-center justify-between mt-10">
        <p className="text-xl font-semibold">Total: ${total}</p>
        <div className="flex gap-4">
          <button
            onClick={clearCart}
            className="px-6 py-2 bg-gray-200 text-black rounded-lg hover:bg-gray-300 transition"
          >
            Clear Cart
          </button>
          <button
            className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
