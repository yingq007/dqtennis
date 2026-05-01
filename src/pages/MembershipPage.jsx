import { useState } from "react";
import PricingCard from "../components/ui/PricingCard";
import Button from "../components/ui/Button";
import membershipData from "../data/membership.json";

const BOOK_URL = "https://app.courtreserve.com/Online/Portal/Index/17486";
const GROUP_LESSON_URL = "https://widgets.courtreserve.com/Online/Public/EmbedCode/17486/102267";

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
                Book a Session
              </Button>
            </div>
          </div>
        </div>
      </nav>


      {/* ── SECTION 2: Membership ───────────────────────────────── */}
      <section className="snap-start min-h-screen flex flex-col justify-center px-6 py-24 bg-clay-light">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-forest">
          Ball Machine
        </h2>
        <p className="text-center text-clay font-semibold text-sm uppercase tracking-widest mb-6">Limited Time</p>
        <p className="text-center text-forest font-bold text-3xl mb-2">$20/30 mins</p>
        <p className="text-center text-gray-500 mb-6 text-lg font-medium">Regular rate <span className="line-through text-gray-700 font-bold text-2xl">$69/h</span></p>
        <ul className="flex flex-col items-center gap-2 mb-8 text-gray-700 text-lg font-medium">
          <li>✔ Staff-assisted setup</li>
          <li>✔ Beginner-friendly drills</li>
          <li>✔ No experience needed</li>
        </ul>
        <div className="flex justify-center mb-10">
          <Button variant="primary" className="text-base px-8 py-4" onClick={handleBookCourt}>
            Book a Session
          </Button>
        </div>
      </section>


      {/* ── SECTION 4: Lessons ──────────────────────────────────── */}
      <section className="snap-start min-h-screen flex flex-col justify-center px-6 py-24 bg-clay-light">
        <p className="text-xs uppercase tracking-[0.25em] text-clay font-semibold mb-2 text-center">Coaching</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-forest">Lessons</h2>
        <div className="flex sm:grid sm:grid-cols-2 gap-6 overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 sm:max-w-2xl sm:mx-auto w-full px-1">
          {LESSONS.map((tier) => (
            <div key={tier.tier} className="min-w-[260px] sm:min-w-0">
              <PricingCard
                {...tier}
                onCta={tier.tier === "Kids Group"
                  ? () => window.open(GROUP_LESSON_URL, "_blank")
                  : handleBookCourt}
              />
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


    </div>
  );
}
