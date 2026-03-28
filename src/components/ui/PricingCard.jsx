// import React from "react";
// import Button from "./Button";

// export default function PricingCard({
//   tier,
//   price,
//   period = "/mo",
//   description,
//   features,
//   ctaLabel,
//   onCta,
//   highlighted = false,
// }) {
//   return (
//     <div
//       className={`relative flex flex-col rounded-2xl p-8 shadow-md transition-all duration-300 hover:shadow-xl
//         ${highlighted
//           ? "bg-clay text-white ring-4 ring-clay-light scale-105 z-10"
//           : "bg-white text-gray-800"
//         }`}
//     >
//       {highlighted && (
//         <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-clay-light text-clay-dark text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide whitespace-nowrap">
//           Most Popular
//         </span>
//       )}

//       <h3 className={`text-xl font-bold mb-1 ${highlighted ? "text-white" : "text-gray-900"}`}>
//         {tier}
//       </h3>
//       <p className={`text-sm mb-4 ${highlighted ? "text-orange-100" : "text-gray-500"}`}>
//         {description}
//       </p>

//       <div className="mb-6">
//         <span className={`text-4xl font-extrabold ${highlighted ? "text-white" : "text-clay"}`}>
//           {price}
//         </span>
//         {period && (
//           <span className={`text-sm ml-1 ${highlighted ? "text-orange-100" : "text-gray-500"}`}>
//             {period}
//           </span>
//         )}
//       </div>

//       <ul className="flex-1 space-y-3 mb-8">
//         {features.map((feature) => (
//           <li key={feature} className="flex items-start gap-2 text-sm">
//             <span className={`mt-0.5 font-bold flex-shrink-0 ${highlighted ? "text-clay-light" : "text-clay"}`}>
//               ✓
//             </span>
//             <span className={highlighted ? "text-orange-50" : "text-gray-700"}>
//               {feature}
//             </span>
//           </li>
//         ))}
//       </ul>

//       <Button
//         variant={highlighted ? "secondary" : "primary"}
//         className="w-full"
//         onClick={onCta}
//       >
//         {ctaLabel}
//       </Button>
//     </div>
//   );
// }

import React from "react";
import PricingCard from "./PricingCard";
import Button from "./Button";

const BOOK_URL =
  "https://app.courtreserve.com/Online/Account/LogIn/17486";

const MEMBERSHIP_URL =
  "https://app.courtreserve.com/Online/Memberships/Public/17486";

export default function PricingSection() {
  const handleBookCourt = () => {
    window.open(BOOK_URL, "_blank");
  };

  const handleJoinMembership = () => {
    window.open(MEMBERSHIP_URL, "_blank");
  };

  return (
    <section className="bg-white px-6 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Membership & Pricing
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Play more. Book earlier. Improve faster.
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 md:text-lg">
            Start with flexible pay-as-you-go or unlock better access and pricing
            with membership.
          </p>

          {/* Top CTAs */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button onClick={handleBookCourt}>
              Book a Court
            </Button>

            <Button variant="clay" onClick={handleJoinMembership}>
              Start Membership
            </Button>
          </div>

          <p className="mt-3 text-xs text-gray-500">
            Quick signup required • Takes less than 1 minute
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          <PricingCard
            tier="Player"
            price="Free"
            period=""
            description="Pay-as-you-go access"
            features={[
              "No monthly fee",
              "One-time court bookings",
              "Reserve up to 3 days in advance",
              "No access to lessons or packages",
            ]}
            ctaLabel="Book a Court"
            onCta={handleBookCourt}
            badge="Getting Started"
          />

          <PricingCard
            tier="Monthly Individual"
            price="$9.99"
            period="/month"
            description="For regular players"
            features={[
              "$5 discount on court bookings",
              "Access to lessons & packages",
              "Reserve up to 7 days in advance",
            ]}
            ctaLabel="Start Membership"
            onCta={handleJoinMembership}
            highlighted
            badge="Most Popular"
          />

          <PricingCard
            tier="Premium Monthly"
            price="$19.99"
            period="/month"
            description="Best access & priority booking"
            features={[
              "$5 discount on court bookings",
              "Access to lessons & packages",
              "Reserve up to 14 days in advance",
            ]}
            ctaLabel="Upgrade to Premium"
            onCta={handleJoinMembership}
            badge="Best Value"
          />
        </div>

        {/* Packages */}
        <div className="mt-16 rounded-3xl border border-gray-200 bg-gray-50 p-8 md:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
                Practice Packages
              </p>

              <h3 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
                Train more, save more
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600 md:text-base">
                Available for Monthly and Premium members only.
              </p>
            </div>

            <Button variant="secondary" onClick={handleJoinMembership}>
              Become a Member
            </Button>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { name: "4 Hours", price: "$249", term: "1 month" },
              { name: "10 Hours", price: "$599", term: "3 months" },
              { name: "20 Hours", price: "$1,099", term: "6 months" },
              { name: "40 Hours", price: "$1,999", term: "12 months" },
            ].map((pkg) => (
              <div
                key={pkg.name}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200"
              >
                <p className="text-sm font-medium text-gray-500">
                  {pkg.name} Practice Package
                </p>
                <p className="mt-3 text-3xl font-bold text-gray-900">
                  {pkg.price}
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Use within {pkg.term}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center text-sm text-gray-500">
            Packages activate on purchase date • No rollover
          </div>
        </div>
      </div>
    </section>
  );
}