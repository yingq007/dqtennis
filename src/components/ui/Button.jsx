import React from "react";

export default function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl font-semibold transition-all duration-200 active:scale-95";

  const variants = {
    primary:
      "bg-clay text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 px-6 py-3 text-base",
    secondary:
      "bg-white text-forest border border-gray-300 hover:bg-gray-50 px-6 py-3 text-base",
    clay:
      "bg-clay text-white shadow-md hover:shadow-lg px-6 py-3 text-base",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}