import React, { useState, useEffect } from "react";
import Card from "./components/ui/Card";
import Button from "./components/ui/Button";
import MembershipPage from "./pages/MembershipPage";
import { BOOKING_URL } from "./config";
import "./index.css";

const SLIDES = [
  { src: "/images/hero.JPG",     position: "center" },
  { src: "/images/gallery1.JPG", position: "center" },
  { src: "/images/gallery2.JPG", position: "center" },
  { src: "/images/gallery3.JPG", position: "top center" },
];

export default function App() {
  const [page, setPage] = useState("home");
  const [slideIndex, setSlideIndex] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const timer = setInterval(
      () => setSlideIndex((i) => (i + 1) % SLIDES.length),
      4000
    );
    return () => clearInterval(timer);
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  if (page === "membership") {
    return <MembershipPage onBack={() => setPage("home")} />;
  }

  return (
    // Scroll-snap container: each child section snaps to full viewport
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory font-sans text-gray-800">

      {/* Navbar — fixed to viewport, floats above all snap sections */}
      <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-forest">DQ Tennis</div>

          <ul className="hidden md:flex items-center space-x-6">
            {["About", "Services", "Gallery", "Contact"].map((section) => (
              <li key={section}>
                <a
                  href={`#${section.toLowerCase()}`}
                  className="text-gray-700 hover:text-clay font-semibold transition-colors duration-200"
                >
                  {section}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => setPage("membership")}
                className="text-gray-700 hover:text-clay font-semibold transition-colors duration-200"
              >
                Membership
              </button>
            </li>
          </ul>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block"
          >
            <Button variant="primary" className="text-sm px-4 py-2">
              Book a Court
            </Button>
          </a>
        </div>
      </nav>

      {/* ── SECTION 1: Hero ─────────────────────────────────────── */}
      <header
        id="hero"
        className="snap-start h-screen relative flex flex-col justify-center items-center text-white text-center px-6 overflow-hidden"
      >
        {/* Crossfading slideshow backgrounds */}
        {SLIDES.map(({ src, position }, i) => (
          <div
            key={src}
            className="absolute inset-0 bg-cover transition-opacity duration-1000"
            style={{ backgroundImage: `url(${src})`, backgroundPosition: position, opacity: i === slideIndex ? 1 : 0 }}
          />
        ))}

        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.70) 100%)" }} />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-4 text-clay-light font-semibold">
            Indoor Tennis · Sunnyvale, CA
          </p>
          <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg leading-none">
            DQ Tennis
          </h1>
          <p className="mt-4 text-lg md:text-xl drop-shadow-md max-w-xl font-light">
            Indoor courts, ball machines &amp; video analysis — open 7 days a week.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" className="text-base px-8 py-4">Book a Court</Button>
            </a>
            <Button variant="secondary" className="text-base px-8 py-4" onClick={() => setPage("membership")}>
              View Memberships
            </Button>
          </div>

          {/* Slide dots */}
          <div className="flex gap-2 mt-8">
            {SLIDES.map((_slide, i) => (
              <button
                key={i}
                onClick={() => setSlideIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === slideIndex ? "w-6 bg-white" : "w-1.5 bg-white/40"}`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 flex flex-col items-center gap-1 text-white/60 text-xs tracking-widest uppercase">
          <span>Scroll</span>
          <span className="text-lg animate-bounce">↓</span>
        </div>
      </header>

      {/* ── SECTION 2: About ────────────────────────────────────── */}
      <section
        id="about"
        className="snap-start h-screen flex flex-col justify-center items-center text-center px-8 bg-white"
      >
        <p className="text-xs uppercase tracking-[0.25em] text-clay font-semibold mb-4">Who We Are</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-forest max-w-xl leading-tight">
          Tennis on Your Schedule
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-2xl text-lg">
          DQ Tennis is a modern indoor studio designed for players who want to train
          on their own terms. Automatic ball machines, on-court video replay, and
          climate-controlled courts — available every day of the week, no instructor required.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm font-semibold text-gray-500">
          {["Ball Machine Included", "Video Replay System", "Climate-Controlled", "Open 7 Days"].map((feat) => (
            <span key={feat} className="flex items-center gap-2">
              <span className="text-clay">✓</span> {feat}
            </span>
          ))}
        </div>
      </section>

      {/* ── SECTION 3: How It Works ─────────────────────────────── */}
      <section
        className="snap-start h-screen flex flex-col justify-center items-center text-center px-8 bg-clay-light"
      >
        <p className="text-xs uppercase tracking-[0.25em] text-clay font-semibold mb-4">Simple Process</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-14 text-forest">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto w-full">
          {[
            { step: "1", title: "Book a Court", desc: "Reserve online in under 2 minutes, 7 days a week." },
            { step: "2", title: "Arrive & Set Up", desc: "Walk in and start the ball machine — no staff needed." },
            { step: "3", title: "Train & Review", desc: "Hit at your pace, then replay your session on-screen." },
          ].map(({ step, title, desc }) => (
            <div key={step} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-clay text-white flex items-center justify-center text-2xl font-bold mb-5 shadow-lg">
                {step}
              </div>
              <h3 className="text-xl font-bold mb-2 text-forest">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 4: Services ─────────────────────────────────── */}
      <section
        id="services"
        className="snap-start h-screen flex flex-col justify-center items-center text-center px-8 bg-white"
      >
        <p className="text-xs uppercase tracking-[0.25em] text-clay font-semibold mb-4">What We Offer</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-forest">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto w-full">
          <Card title="Self-Practice Session">
            1-hour court rental with ball machine and video analysis. Book anytime.
          </Card>
          <Card title="Private Coaching">
            One-on-one with a certified coach to sharpen your technique and tactics.
          </Card>
          <Card title="Court Membership">
            Unlimited monthly access, member-only hours, and priority booking.
          </Card>
        </div>
      </section>

      {/* ── SECTION 5: Gallery ──────────────────────────────────── */}
      <section
        id="gallery"
        className="snap-start h-screen flex flex-col justify-center px-6 py-24 bg-forest-light"
      >
        <p className="text-xs uppercase tracking-[0.25em] text-clay font-semibold mb-2 text-center">The Facility</p>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-forest">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl mx-auto w-full flex-1">
          <img
            src="/images/gallery1.JPG"
            alt="Tennis Practice 1"
            loading="lazy"
            className="w-full h-48 md:h-64 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          />
          <img
            src="/images/gallery2.JPG"
            alt="Tennis Practice 2"
            loading="lazy"
            className="w-full h-48 md:h-64 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          />
          <img
            src="/images/gallery3.JPG"
            alt="Tennis Practice 3"
            loading="lazy"
            className="w-full h-48 md:h-64 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>

      {/* ── SECTION 6: Membership CTA ───────────────────────────── */}
      <section
        className="snap-start h-screen flex flex-col justify-center items-center text-center px-8 bg-forest text-white"
      >
        <p className="text-xs uppercase tracking-[0.25em] text-clay-light font-semibold mb-4">Become a Member</p>
        <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-none">
          Train Without<br />Limits.
        </h2>
        <p className="text-forest-light text-lg md:text-xl max-w-lg mb-10">
          Skip per-session booking. Unlimited court access starts at $99/mo — no contract, cancel anytime.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary" className="text-base px-8 py-4" onClick={() => setPage("membership")}>
            See Membership Plans
          </Button>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="primary" className="text-base px-8 py-4">Book a Single Session</Button>
          </a>
        </div>
      </section>

      {/* ── SECTION 7: Contact + Footer ─────────────────────────── */}
      <section
        id="contact"
        className="snap-start h-screen flex flex-col justify-center items-center text-center px-8 bg-gray-900 text-white"
      >
        <p className="text-xs uppercase tracking-[0.25em] text-clay font-semibold mb-4">Find Us</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Contact Us</h2>
        <div className="space-y-3 text-gray-300 text-lg">
          <a href="mailto:info@dq-tennis.com" className="hover:text-white transition-colors underline underline-offset-4">info@dq-tennis.com</a>
          <p className="mt-4">251 South Mary Avenue Unit 2<br />Sunnyvale, CA 94086</p>
        </div>
        <div className="mt-12">
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="primary" className="text-base px-8 py-4">Book a Court Now</Button>
          </a>
        </div>

        <footer className="absolute bottom-6 text-xs text-gray-500">
          &copy; {new Date().getFullYear()} DQ Tennis. All rights reserved.
          {" · "}
          <button
            onClick={() => setPage("membership")}
            className="underline hover:text-clay transition-colors"
          >
            Membership
          </button>
        </footer>
      </section>

    </div>
  );
}
