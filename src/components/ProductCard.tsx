"use client";

import { useCart } from "../context/CartContext";

type ProductCardProps = {
  id: string;
  title: string;
  price: number;
  image: string;
};

export default function ProductCard({ id, title, price, image }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white border rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-lg transition">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">${price}</p>
      <button
        onClick={() => addToCart({ id, title, price, image })}
        className="mt-4 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
