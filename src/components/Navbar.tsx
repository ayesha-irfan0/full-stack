"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-md px-6 py-4 flex justify-between items-center z-50">
      <Link href="/" className="text-2xl font-bold">
        FashionBrand
      </Link>
      <div className="flex items-center gap-6">
        <Link href="/products">Products</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/cart" className="relative">
          Cart
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
              {cart.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
