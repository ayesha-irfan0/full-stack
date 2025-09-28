"use client";

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center w-full h-screen justify-center bg-gray-900">
      {/* Background Image */}
      <img
        src="/images/hero-fashion.jpg"
        alt="Fashion Hero Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Discover Your Unique Style
        </h1>
        <p className="text-lg mb-8">
          Shop the latest trends in fashion for Men, Women, and Kids.
        </p>
        <a
          href="/products"
          className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
}
