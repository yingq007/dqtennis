import React, { useState } from "react";
import PricingCard from "@/components/ui/PricingCard";
import Button from "@/components/ui/Button";
import BookingModal from "@/components/ui/BookingModal";
import membershipData from "@/data/membership.json";

const TIERS = membershipData.tiers;
const FAQS = membershipData.faqs;

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
  const [showBooking, setShowBooking] = useState(false);

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory font-sans text-gray-800">

      {showBooking && <BookingModal onClose={() => setShowBooking(false)} />}

      {/* Navbar */}
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
            <button onClick={() => setShowBooking(true)} className="hidden md:block">
              <Button variant="primary" className="text-sm px-4 py-2">
                Book a Court
              </Button>
            </button>
          </div>
        </div>
      </nav>

      {/* ── SECTION 1: Hero ─────────────────────────────────────── */}
      <section className="snap-start h-screen flex flex-col justify-center items-center text-center px-8 bg-forest text-white">
        <p className="text-xs uppercase tracking-[0.25em] text-clay-light font-semibold mb-4">DQ Tennis</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-none">
          Choose Your<br />Membership.
        </h1>
        <p className="text-forest-light text-lg md:text-xl max-w-lg">
          Train on your schedule. Pick the plan that fits how often you play.
        </p>
        <div className="absolute bottom-8 flex flex-col items-center gap-1 text-white/50 text-xs tracking-widest uppercase">
          <span>Scroll</span>
          <span className="text-lg animate-bounce">↓</span>
        </div>
      </section>

      {/* ── SECTION 2: Pricing ──────────────────────────────────── */}
      <section className="snap-start min-h-screen flex flex-col justify-center px-6 py-24 bg-clay-light">
        <p className="text-xs uppercase tracking-[0.25em] text-clay font-semibold mb-2 text-center">Plans &amp; Pricing</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-forest">Pick Your Plan</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center w-full">
          {TIERS.map((tier) => (
            <PricingCard key={tier.tier} {...tier} onCta={() => setShowBooking(true)} />
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 mt-8">
          All plans include ball machines and video replay. No hidden fees.
        </p>
      </section>

      {/* ── SECTION 3: FAQ ──────────────────────────────────────── */}
      <section className="snap-start min-h-screen flex flex-col justify-center px-8 py-24 bg-white">
        <div className="max-w-2xl mx-auto w-full">
          <p className="text-xs uppercase tracking-[0.25em] text-clay font-semibold mb-4 text-center">Questions</p>
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

      {/* ── SECTION 4: Bottom CTA + Footer ──────────────────────── */}
      <section className="snap-start h-screen flex flex-col justify-center items-center text-center px-8 bg-gray-900 text-white">
        <p className="text-xs uppercase tracking-[0.25em] text-clay font-semibold mb-4">Ready?</p>
        <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-none">Join Today.</h2>
        <p className="text-gray-400 text-lg mb-10">No contract. Cancel anytime. First session on us.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" className="text-base px-8 py-4" onClick={() => setShowBooking(true)}>
            Join Now
          </Button>
          <Button variant="secondary" className="text-base px-8 py-4" onClick={() => setShowBooking(true)}>
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
