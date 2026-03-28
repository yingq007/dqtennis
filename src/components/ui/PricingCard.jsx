
import React from "react";
import Button from "./Button";

export default function PricingCard({
  tier,
  price,
  period,
  description,
  features = [],
  ctaLabel,
  onCta,
  badge,
  highlighted = false,
}) {
  return (
    <div className={`relative rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300
      ${highlighted
        ? "border-clay shadow-xl scale-105 bg-white"
        : "border-gray-200 bg-white hover:shadow-md"}`}
    >
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-clay text-white text-xs px-3 py-1 rounded-full font-semibold">
          {badge}
        </div>
      )}

      <div className="text-center">
        <h3 className="text-xl font-bold text-forest">{tier}</h3>

        <div className="mt-3 flex items-end justify-center gap-1">
          <span className="text-3xl font-bold text-gray-900">{price}</span>
          {period && <span className="text-sm text-gray-500">{period}</span>}
        </div>

        {description && (
          <p className="mt-3 text-sm text-gray-600">{description}</p>
        )}
      </div>

      <ul className="mt-6 space-y-2 text-sm text-gray-600">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-clay mt-0.5">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <Button
          variant={highlighted ? "primary" : "secondary"}
          className="w-full py-3"
          onClick={onCta}
        >
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
}