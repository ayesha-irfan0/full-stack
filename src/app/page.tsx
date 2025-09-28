import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";

const featuredCollections = [
  { id: "men", title: "Men", image: "/images/men-1.jpg" },
  { id: "women", title: "Women", image: "/images/women-1.jpg" },
  { id: "kids", title: "Kids", image: "/images/kids-1.jpg" },
];

const newArrivals = [
  { id: "men-2", title: "Casual Shirt", price: 60, image: "/images/men-2.jpg" },
  { id: "women-2", title: "Summer Top", price: 45, image: "/images/women-2.jpg" },
  { id: "kids-2", title: "Kids Hoodie", price: 40, image: "/images/kids-2.jpg" },
  { id: "acc-1", title: "Leather Bag", price: 150, image: "/images/accessory-1.jpg" },
  { id: "acc-2", title: "Sneakers", price: 80, image: "/images/accessory-2.jpg" },
  { id: "acc-3", title: "Classic Watch", price: 200, image: "/images/accessory-3.jpg" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <Hero />

      {/* Featured Collections */}
      <section className="py-16 px-6 lg:px-50">
        <SectionTitle
          title="Featured Collections"
          subtitle="Explore our exclusive fashion categories"
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
          {featuredCollections.map((col) => (
            <div
              key={col.id}
              className="relative h-64 rounded-2xl overflow-hidden group shadow-md"
            >
              <img
                src={col.image}
                alt={col.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-semibold">{col.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 px-6 lg:px-20">
        <SectionTitle
          title="New Arrivals"
          subtitle="Check out the latest trends in fashion"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {newArrivals.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black dark:bg-white text-center">
        <h2 className="text-3xl font-bold text-white dark:text-black mb-6">
          Elevate Your Style Today
        </h2>
        <p className="text-gray-300 dark:text-gray-700 mb-8">
          Discover timeless fashion pieces designed just for you.
        </p>
        <a
          href="/products"
          className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 dark:bg-black dark:text-white dark:hover:bg-gray-800 transition"
        >
          Shop Now
        </a>
      </section>
    </main>
  );
}
