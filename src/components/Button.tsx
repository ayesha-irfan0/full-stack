"use client";

import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export default function Button({ label, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="px-6 py-2 bg-black text-white rounded-md shadow hover:bg-gray-800 transition disabled:opacity-50"
    >
      {label}
    </button>
  );
}
