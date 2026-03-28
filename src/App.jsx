import React, { useState, useEffect } from "react";
import Card from "./components/ui/Card";
import Button from "./components/ui/Button";
import MembershipPage from "./pages/MembershipPage";
import "./index.css";

const BOOK_URL = "https://app.courtreserve.com/Online/Portal/Index/17486";

const SLIDES = [
  { src: "/images/hero.JPG", position: "center" },
  { src: "/images/gallery1.JPG", position: "center" },
  { src: "/images/gallery2.JPG", position: "center" },
  { src: "/images/gallery3.JPG", position: "top center" },
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

        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-bold">DQ Tennis</h1>

          <p className="mt-4 text-lg md:text-xl max-w-xl">
            Indoor courts, ball machines & video analysis — open 7 days a week.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button onClick={() => window.open(BOOK_URL, "_blank")}>
              Book a Court
            </Button>

            <Button
              variant="secondary"
              onClick={() => setPage("membership")}
            >
              View Memberships
            </Button>
          </div>
        </div>
      </header>

      {/* Services */}
      <section
        id="services"
        className="snap-start h-screen flex flex-col justify-center items-center text-center px-8 bg-white"
      >
        <h2 className="text-4xl font-bold mb-10 text-forest">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto w-full">
          <Card title="Self-Practice Session">
            1-hour court rental with ball machine and video analysis.
          </Card>

          <Card title="Private Coaching">
            One-on-one with a certified coach.
          </Card>

          <Card title="Court Membership">
            Unlimited monthly access and priority booking.
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="snap-start h-screen flex flex-col justify-center items-center text-center px-8 bg-gray-900 text-white"
      >
        <h2 className="text-4xl font-bold mb-8">Contact Us</h2>

        <p>info@dq-tennis.com</p>
        <p className="mt-4">Sunnyvale, CA</p>

        <div className="mt-8">
          <Button onClick={() => window.open(BOOK_URL, "_blank")}>
            Book a Court Now
          </Button>
        </div>
      </section>
    </div>
  );
}