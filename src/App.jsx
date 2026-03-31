import React, { useState, useEffect } from "react";
import Card from "./components/ui/Card";
import Button from "./components/ui/Button";
import MembershipPage from "./pages/MembershipPage";
import "./index.css";

const BOOK_URL = "https://app.courtreserve.com/Online/Portal/Index/17486";

const SLIDES = [
  { src: "/images/hero.JPG",     position: "center center" },
  { src: "/images/gallery1.JPG", position: "center center" },
  { src: "/images/gallery2.JPG", position: "center center" },
  { src: "/images/gallery3.JPG", position: "center center" },
];

export default function App() {
  const [page, setPage] = useState("home");
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setSlideIndex((i) => (i + 1) % SLIDES.length),
      4000
    );
    return () => clearInterval(timer);
  }, []);

  if (page === "membership") {
    return <MembershipPage onBack={() => setPage("home")} />;
  }

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory font-sans text-gray-800">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#hero" className="flex items-center gap-2">
            <img src="/images/logo.PNG" alt="DQ Tennis logo" className="h-10 w-10 object-contain" />
            <span className="text-2xl font-bold text-forest">DQ Tennis</span>
          </a>

          <ul className="hidden md:flex items-center space-x-6">
            {["About", "Services"].map((section) => (
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
                Pricing
              </button>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-700 hover:text-clay font-semibold transition-colors duration-200"
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="hidden md:block">
            <Button
              variant="primary"
              className="text-sm px-4 py-2"
              onClick={() => window.open(BOOK_URL, "_blank")}
            >
              Book a Court
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        id="hero"
        className="snap-start h-screen relative flex flex-col justify-center items-center text-white text-center px-6 overflow-hidden"
      >
        {SLIDES.map(({ src, position }, i) => (
          <div
            key={src}
            className="absolute inset-0 bg-cover transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${src})`,
              backgroundPosition: position,
              opacity: i === slideIndex ? 1 : 0,
            }}
          />
        ))}

        <div className="absolute inset-0 bg-black/50" />

        {/* Prev / Next arrows */}
        <button
          onClick={() => setSlideIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/30 hover:bg-black/60 text-white text-xl flex items-center justify-center transition-colors"
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          onClick={() => setSlideIndex((i) => (i + 1) % SLIDES.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/30 hover:bg-black/60 text-white text-xl flex items-center justify-center transition-colors"
          aria-label="Next slide"
        >
          ›
        </button>

        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-bold">DQ Tennis</h1>

          <p className="mt-4 text-lg md:text-xl max-w-xl">
            Indoor courts, ball machines &amp; video analysis — open 7 days a week.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="primary" className="text-base px-8 py-4" onClick={() => window.open(BOOK_URL, "_blank")}>
              Book a Court
            </Button>
            <Button variant="secondary" className="text-base px-8 py-4" onClick={() => setPage("membership")}>
              View Pricing
            </Button>
          </div>

          {/* Slide dots */}
          <div className="flex gap-2 mt-8">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlideIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === slideIndex ? "w-6 bg-white" : "w-1.5 bg-white/40"}`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </header>

      {/* About Section */}
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
          on their own terms. Automatic ball machines and climate-controlled courts —
          available every day of the week, no instructor required.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm font-semibold text-gray-500">
          {["Ball Machine Included", "Climate-Controlled", "Open 7 Days"].map((feat) => (
            <span key={feat} className="flex items-center gap-2">
              <span className="text-clay">✓</span> {feat}
            </span>
          ))}
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="snap-start h-screen flex flex-col justify-center items-center text-center px-8 bg-white"
      >
        <h2 className="text-4xl font-bold mb-10 text-forest">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto w-full">
          <Card title="Self-Practice Session">
            1-hour court rental with ball machine included. Book anytime, no instructor required.
          </Card>
          <Card title="Semi Private Lesson">
            One-on-one coaching with a certified instructor — available for both adults and kids.
          </Card>
          <Card title="Group Lesson">
            Fun, structured group sessions for adults and kids. Learn together and improve faster.
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="snap-start h-screen flex flex-col justify-center items-center text-center px-8 bg-gray-900 text-white"
      >
        <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
        <div className="space-y-3 text-gray-300 text-lg">
          <a href="mailto:info@dq-tennis.com" className="hover:text-white transition-colors underline underline-offset-4">info@dq-tennis.com</a>
          <p className="mt-4">251 South Mary Avenue Unit 2<br />Sunnyvale, CA 94086</p>
        </div>
        <div className="mt-8">
          <Button variant="primary" className="text-base px-8 py-4" onClick={() => window.open(BOOK_URL, "_blank")}>
            Book a Court Now
          </Button>
        </div>
        <footer className="absolute bottom-6 text-xs text-gray-500">
          &copy; {new Date().getFullYear()} DQ Tennis. All rights reserved.
          {" · "}
          <button
            onClick={() => setPage("membership")}
            className="underline hover:text-clay transition-colors"
          >
            Pricing
          </button>
        </footer>
      </section>

    </div>
  );
}
