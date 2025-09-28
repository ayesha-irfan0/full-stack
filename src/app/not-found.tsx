import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-12">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="mb-6 text-neutral-600">We couldn’t find what you’re looking for.</p>
        <Link href="/" className="inline-block px-4 py-2 bg-brand-600 text-white rounded">Return home</Link>
      </div>
    </div>
  );
}
