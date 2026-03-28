import React, { useState } from "react";
import PricingCard from "../components/ui/PricingCard";
import Button from "../components/ui/Button";
import membershipData from "../data/membership.json";

const FAQS = membershipData.faqs;

const BOOK_URL = "https://app.courtreserve.com/Online/Portal/Index/17486";
const MEMBERSHIP_URL =
  "https://app.courtreserve.com/Online/Memberships/Public/17486";

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="w-full text-left flex justify-between items-center py-5 font-semibold text-gray-800 hover:text-clay transition-colors focus:outline-none"
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span className="ml-4 text-clay text-2xl leading-none select-none">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && (
        <p className="pb-5 text-gray-600 text-sm leading-relaxed">{answer}</p>
      )}
    </div>
  );
}

export default function MembershipPage({ onBack }) {
  const [openFaq, setOpenFaq] = useState(null);

  const handleBookCourt = () => {
    window.open(BOOK_URL, "_blank");
  };

  const handleJoinMembership = () => {
    window.open(MEMBERSHIP_URL, "_blank");
  };

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory font-sans text-gray-800">
      <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <button
            onClick={onBack}
            className="text-2xl font-bold text-forest hover:text-forest-dark transition-colors"
          >
            DQ Tennis
          </button>

          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="text-gray-600 hover:text-clay font-semibold text-sm transition-colors"
            >
              ← Back to Home
            </button>

            <div className="hidden md:block">
              <Button
                variant="primary"
                className="text-sm px-5 py-2 rounded-full"
                onClick={handleBookCourt}
              >
                Book a Court
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="snap-start h-screen flex flex-col justify-center items-center text-center px-8 bg-forest text-white">
        <p className="text-xs uppercase tracking-[0.25em] text-clay-light font-semibold mb-4">
          DQ Tennis
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-none">
          Choose Your
          <br />
          Membership.
        </h1>

        <p className="text-forest-light text-lg md:text-xl max-w-lg">
          Train on your schedule. Pick the plan that fits how often you play.
        </p>

        <div className="absolute bottom-8 flex flex-col items-center gap-1 text-white/50 text-xs tracking-widest uppercase">
          <span>Scroll</span>
          <span className="text-lg animate-bounce">↓</span>
        </div>
      </section>

      <section className="snap-start min-h-screen flex flex-col justify-center px-6 py-24 bg-clay-light">
        <p className="text-xs uppercase tracking-[0.25em] text-clay font-semibold mb-2 text-center">
          Plans &amp; Pricing
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-forest">
          Pick Your Plan
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch w-full">
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

        <p className="text-center text-sm text-gray-500 mt-8">
          All plans include ball machines and video replay. No hidden fees.
        </p>

        <div className="mt-16 rounded-3xl border border-gray-200 bg-gray-50 p-8 md:p-10 max-w-6xl mx-auto w-full">
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
      </section>

      <section className="snap-start min-h-screen flex flex-col justify-center px-8 py-24 bg-white">
        <div className="max-w-2xl mx-auto w-full">
          <p className="text-xs uppercase tracking-[0.25em] text-clay font-semibold mb-4 text-center">
            Questions
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-forest">
            Frequently Asked
          </h2>

          {FAQS.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.q}
              answer={faq.a}
              isOpen={openFaq === i}
              onToggle={() => setOpenFaq(openFaq === i ? null : i)}
            />
          ))}
        </div>
      </section>

      <section className="snap-start h-screen flex flex-col justify-center items-center text-center px-8 bg-gray-900 text-white">
        <p className="text-xs uppercase tracking-[0.25em] text-clay font-semibold mb-4">
          Ready?
        </p>

        <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-none">
          Join Today.
        </h2>

        <p className="text-gray-400 text-lg mb-10">
          No contract. Cancel anytime. First session on us.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="primary"
            className="text-base px-8 py-4"
            onClick={handleJoinMembership}
          >
            Join Now
          </Button>

          <Button
            variant="secondary"
            className="text-base px-8 py-4"
            onClick={handleBookCourt}
          >
            Try a Day Pass First
          </Button>
        </div>

        <footer className="absolute bottom-6 text-xs text-gray-600">
          &copy; {new Date().getFullYear()} DQ Tennis. All rights reserved.
        </footer>
      </section>
    </div>
  );
}