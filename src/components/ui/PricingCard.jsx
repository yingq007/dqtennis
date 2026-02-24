import React from "react";
import Button from "./Button";

export default function PricingCard({
  tier,
  price,
  period = "/mo",
  description,
  features,
  ctaLabel,
  ctaHref,
  highlighted = false,
}) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl p-8 shadow-md transition-all duration-300 hover:shadow-xl
        ${highlighted
          ? "bg-clay text-white ring-4 ring-clay-light scale-105 z-10"
          : "bg-white text-gray-800"
        }`}
    >
      {highlighted && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-clay-light text-clay-dark text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide whitespace-nowrap">
          Most Popular
        </span>
      )}

      <h3 className={`text-xl font-bold mb-1 ${highlighted ? "text-white" : "text-gray-900"}`}>
        {tier}
      </h3>
      <p className={`text-sm mb-4 ${highlighted ? "text-orange-100" : "text-gray-500"}`}>
        {description}
      </p>

      <div className="mb-6">
        <span className={`text-4xl font-extrabold ${highlighted ? "text-white" : "text-clay"}`}>
          {price}
        </span>
        {period && (
          <span className={`text-sm ml-1 ${highlighted ? "text-orange-100" : "text-gray-500"}`}>
            {period}
          </span>
        )}
      </div>

      <ul className="flex-1 space-y-3 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm">
            <span className={`mt-0.5 font-bold flex-shrink-0 ${highlighted ? "text-clay-light" : "text-clay"}`}>
              ✓
            </span>
            <span className={highlighted ? "text-orange-50" : "text-gray-700"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <a href={ctaHref} target="_blank" rel="noopener noreferrer" className="block">
        <Button
          variant={highlighted ? "secondary" : "primary"}
          className="w-full"
        >
          {ctaLabel}
        </Button>
      </a>
    </div>
  );
}
