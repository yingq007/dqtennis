import React from "react";

const variants = {
  // Forest green — Roland Garros green, all primary CTAs
  primary:
    "bg-forest hover:bg-forest-dark text-white border-2 border-forest hover:border-forest-dark",
  // White outlined — for use on dark/colored backgrounds
  secondary:
    "bg-transparent hover:bg-white/10 text-white border-2 border-white",
  // Clay terracotta — explicit accent CTA when needed
  clay:
    "bg-clay hover:bg-clay-dark text-white border-2 border-clay hover:border-clay-dark",
};

export default function Button({ children, variant = "primary", className = "", ...props }) {
  return (
    <button
      className={`font-semibold px-6 py-3 rounded-xl transition-all duration-200 ${variants[variant] ?? variants.primary} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
