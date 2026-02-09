import React, { useState } from "react";
import Card from "@/components/ui/Card";
import './index.css';

function CourtReserveWidget() {
  useEffect(() => {
    const handler = (e) => {
      if (!e?.data?.action) return;

      switch (e.data.action) {
        case "setHeight": {
          const embedCodeId = e.data.embedCodeId;

          if (embedCodeId) {
            const elements = document.getElementsByClassName("form-iframe-" + embedCodeId);
            for (let i = 0; i < elements.length; i++) {
              elements[i].style.height = e.data.height + "px";
            }
          } else {
            const iframe = document.getElementById("form-iframe");
            if (iframe) iframe.style.height = e.data.height + "px";
          }
          break;
        }

        case "eventClick": {
          // Optional: hook if you want tracking
          // const eventId = e.data?.params?.eventId;
          // const reservationId = e.data?.params?.reservtionId; // note: CourtReserve typo
          break;
        }

        default:
          break;
      }
    };

    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
      <iframe
        id="form-iframe"
        className="form-iframe-100698"
        src="https://widgets.courtreserve.com/Online/Public/EmbedCode/17486/100698"
        style={{ margin: 0, width: "100%", border: "none", overflow: "hidden" }}
        scrolling="no"
        title="Book a session"
      />
    </div>
  );
}

function Button({ children }) {
  return (
    <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200">
      {children}
    </button>
  );
}

export default function App() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-green-700">DQ Tennis</div>
          <ul className="hidden md:flex space-x-6">
            {["Home", "About", "Services", "Gallery", "Booking", "Contact"].map((section) => (
              <li key={section}>
                <a
                  href={section === "Home" ? "#hero" : `#${section.toLowerCase()}`}
                  className="text-gray-800 hover:text-green-700 font-semibold transition-colors duration-200"
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero */}
      
      
      <header
        id="hero"
        className="bg-cover bg-center h-[80vh] flex flex-col justify-center items-center text-white text-center"
        style={{ backgroundImage: `url(/images/hero.JPG)` }}
      >
        <h1 className="text-6xl font-bold drop-shadow-lg">DQ Tennis</h1>
        <p className="mt-4 text-2xl drop-shadow-md">Train Anytime. Play Smarter.</p>
        <div className="mt-6">
          <Button>Book a Session</Button>
        </div>
      </header>



      {/* About */}
      <section id="about" className="py-16 px-8 pt-24 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="text-gray-700">
          Welcome to DQ Tennis — a modern indoor tennis studio designed for players who want to train on their own schedule. 
          Our facility features automatic ball machines, video replay systems, and climate-controlled courts for year-round practice.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="bg-gray-50 py-16 px-8 pt-24 text-center">
        <h2 className="text-3xl font-semibold mb-8">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card title="Self-Practice Session">
            1-hour indoor court rental with ball machine and video analysis system.
          </Card>
          <Card title="Private Coaching">
            Work one-on-one with a certified tennis coach to improve your technique.
          </Card>
          <Card title="Court Membership">
            Unlimited monthly access to self-practice sessions and member-only events.
          </Card>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-10">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <img
              src="/images/gallery1.JPG"
              alt="Tennis Practice 1"
              className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
            />
            <img
              src="/images/gallery2.JPG"
              alt="Tennis Practice 2"
              className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
            />
            <img
              src="/images/gallery3.JPG"
              alt="Tennis Practice 3"
              className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
            />
      {/* Add more images as needed */}
        </div>
      </div>
    </section>


      {/* Booking */}
      <section id="booking" className="bg-green-50 py-16 px-8 pt-24 text-center">
        <h2 className="text-3xl font-semibold mb-4">Book a Session</h2>
        <CourtReserveWidget />
        <p className="mb-8 text-gray-700">
          Choose your time and start training today. Use the form below or email us directly.
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-4">
          <input
            name="name"
            onChange={handleChange}
            value={form.name}
            placeholder="Your Name"
            required
          />
          <input
            name="email"
            onChange={handleChange}
            value={form.email}
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            onChange={handleChange}
            value={form.message}
            placeholder="Preferred Date & Time"
            rows="3"
          />
          <Button>Submit</Button>
        </form>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-8 pt-24 text-center bg-gray-800 text-white">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p>Email: dongsiyang104@gmail.com| yingq007@gmail.com </p>
        <p className="mt-2">251 South Mary Aveune Unit 2, Sunnyvale, CA 94086</p>
      </section>
  
    {/* Footer */}
    <footer className="bg-gray-800 text-white text-center py-4 mt-12">
      <p className="text-sm">&copy; {new Date().getFullYear()} DQ Tennis. All rights reserved.</p>
    </footer>
  </div>
  );

  }