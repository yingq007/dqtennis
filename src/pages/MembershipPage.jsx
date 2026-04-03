import { useState } from "react";
import PricingCard from "../components/ui/PricingCard";
import Button from "../components/ui/Button";
import membershipData from "../data/membership.json";

const BOOK_URL = "https://app.courtreserve.com/Online/Portal/Index/17486";
const MEMBERSHIP_URL = "https://app.courtreserve.com/Online/Memberships/Public/17486";

const MEMBERSHIPS = membershipData.memberships;
const PACKAGES    = membershipData.packages;
const LESSONS     = membershipData.lessons;
const FAQS        = membershipData.faqs;

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

  const handleBookCourt = () => window.open(BOOK_URL, "_blank");
  const handleJoinMembership = () => window.open(MEMBERSHIP_URL, "_blank");

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory font-sans text-gray-800">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <button onClick={onBack} className="flex items-center gap-2">
            <img src="/images/logo.PNG" alt="DQ Tennis logo" className="h-10 w-10 object-contain" />
            <span className="text-2xl font-bold text-forest">DQ Tennis</span>
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

      {/* ── SECTION 1: Hero ─────────────────────────────────────── */}
      <section className="snap-start h-screen flex flex-col justify-center items-center text-center px-8 bg-forest text-white">
        <p className="text-xs uppercase tracking-[0.25em] text-clay-light font-semibold mb-4">DQ Tennis</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-none">
          Plans &amp;<br />Pricing.
        </h1>
        <p className="text-forest-light text-lg md:text-xl max-w-lg">
          Memberships, court packages, and lessons — for adults and kids.
        </p>
        <div className="absolute bottom-8 flex flex-col items-center gap-1 text-white/50 text-xs tracking-widest uppercase">
          <span>Scroll</span>
          <span className="text-lg animate-bounce">↓</span>
        </div>
      </section>

      {/* ── SECTION 2: Membership ───────────────────────────────── */}
      <section className="snap-start min-h-screen flex flex-col justify-center px-6 py-24 bg-clay-light">
        <p className="text-xs uppercase tracking-[0.25em] text-clay font-semibold mb-2 text-center">Recurring Plans</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-forest">Membership</h2>
        <p className="text-center text-lg mb-10 text-gray-600">
          Court rate:{" "}
          <span className="line-through text-gray-400">$88/hr</span>
          {" → "}
          <span className="text-forest font-bold text-2xl">$69/hr</span>
          {" "}as a member
        </p>
        <p className="text-center text-sm text-clay font-medium -mt-6 mb-10">
          * $69/hr member rate valid during soft opening
        </p>
        <div className="flex sm:grid sm:grid-cols-2 gap-6 overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 sm:max-w-2xl sm:mx-auto w-full px-1">
          {MEMBERSHIPS.map((tier) => (
            <div key={tier.tier} className="min-w-[260px] sm:min-w-0">
              <PricingCard {...tier} onCta={handleJoinMembership} />
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-gray-600 text-base">
          Create a free account on{" "}
          <a href={MEMBERSHIP_URL} target="_blank" rel="noopener noreferrer" className="text-clay font-semibold underline underline-offset-4 hover:text-forest transition-colors">
            CourtReserve ↗
          </a>
          {" "}to book a court.
        </p>
      </section>

      {/* ── SECTION 3: Packages ─────────────────────────────────── */}
      <section className="snap-start min-h-screen flex flex-col justify-center px-6 py-24 bg-white">
        <p className="text-xs uppercase tracking-[0.25em] text-clay font-semibold mb-2 text-center">Court Time</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-forest">Packages</h2>
        <div className="flex lg:grid lg:grid-cols-4 gap-6 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 lg:max-w-6xl lg:mx-auto w-full px-1">
          {PACKAGES.map((tier) => (
            <div key={tier.tier} className="min-w-[240px] lg:min-w-0">
              <PricingCard {...tier} onCta={handleJoinMembership} />
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 4: Lessons ──────────────────────────────────── */}
      <section className="snap-start min-h-screen flex flex-col justify-center px-6 py-24 bg-clay-light">
        <p className="text-xs uppercase tracking-[0.25em] text-clay font-semibold mb-2 text-center">Coaching</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-forest">Lessons</h2>
        <div className="flex sm:grid sm:grid-cols-2 gap-6 overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 sm:max-w-2xl sm:mx-auto w-full px-1">
          {LESSONS.map((tier) => (
            <div key={tier.tier} className="min-w-[260px] sm:min-w-0">
              <PricingCard {...tier} onCta={handleBookCourt} />
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 mt-8">
          Both semi private and group lessons available for adults &amp; kids.
        </p>
      </section>

      {/* ── SECTION 5: FAQ ──────────────────────────────────────── */}
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

      {/* ── SECTION 6: Bottom CTA + Footer ──────────────────────── */}
      <section className="snap-start h-screen flex flex-col justify-center items-center text-center px-8 bg-gray-900 text-white">
        <p className="text-xs uppercase tracking-[0.25em] text-clay font-semibold mb-4">Ready?</p>
        <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-none">Join Today.</h2>
        <p className="text-gray-400 text-lg mb-10">No contract. Cancel anytime.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" className="text-base px-8 py-4" onClick={handleJoinMembership}>
            Join Now
          </Button>
          <Button variant="secondary" className="text-base px-8 py-4" onClick={handleBookCourt}>
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
