import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t py-8 mt-8 bg-neutral-50 dark:bg-neutral-900">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm">&copy; {year} Aurelia. All rights reserved.</div>
        <div className="flex gap-4 text-sm">
          <Link href="/about">About</Link>
          <Link href="/products">Shop</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
