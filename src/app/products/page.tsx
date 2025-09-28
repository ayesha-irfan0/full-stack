"use client";

import ProductCard from "@/components/ProductCard";

const products = [
  { id: "1", title: "Men’s Jacket", price: 120, image: "/images/men-1.jpg" },
  { id: "2", title: "Women’s Dress", price: 90, image: "/images/women-1.jpg" },
  { id: "3", title: "Kids T-Shirt", price: 40, image: "/images/kids-1.jpg" },
  { id: "4", title: "Watch", price: 200, image: "/images/watch-1.jpg" },
  { id: "5", title: "Shoes", price: 150, image: "/images/shoes-1.jpg" },
  { id: "6", title: "Handbag", price: 110, image: "/images/bag-1.jpg" },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">Our Products</h2>

      {/* 👇 Horizontal arrangement */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </main>
  );
}
