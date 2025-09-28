import Image from "next/image";
import { notFound } from "next/navigation";

// Mock product data (replace with real DB/API later)
const products = [
  {
    slug: "mens-jacket",
    title: "Classic Men's Jacket",
    price: 120,
    description:
      "A timeless jacket designed for comfort and style. Crafted with premium materials.",
    images: ["/images/men-1.jpg", "/images/men-2.jpg"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Gray"],
  },
  {
    slug: "womens-dress",
    title: "Elegant Women's Dress",
    price: 90,
    description:
      "An elegant dress perfect for evening occasions. Flowing design with modern cut.",
    images: ["/images/women-1.jpg", "/images/women-2.jpg"],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Red", "Blue", "Green"],
  },
];

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) return notFound();

  return (
    <div className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-12">
      {/* Image Gallery */}
      <div>
        <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="mt-4 flex gap-4">
          {product.images.map((img, i) => (
            <div
              key={i}
              className="relative w-24 h-24 rounded-md overflow-hidden border"
            >
              <Image src={img} alt={`${product.title} ${i}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div>
        <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
        <p className="text-xl text-gray-600 mb-4">${product.price}</p>
        <p className="text-gray-700 mb-6">{product.description}</p>

        {/* Size Selector */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Size</h3>
          <div className="flex gap-3">
            {product.sizes.map((size) => (
              <button
                key={size}
                className="px-4 py-2 border rounded-md hover:bg-gray-100 transition"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Color Selector */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Color</h3>
          <div className="flex gap-3">
            {product.colors.map((color) => (
              <button
                key={color}
                className="px-4 py-2 border rounded-md hover:bg-gray-100 transition"
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        {/* Add to Cart */}
        <button className="px-6 py-3 rounded-lg bg-black text-white font-semibold hover:bg-gray-800 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
